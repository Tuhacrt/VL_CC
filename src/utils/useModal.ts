import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { Modal } from 'bootstrap';

interface UseModal {
  modal: Ref<Modal | null>;
  showModal: () => void;
  hideModal: () => void;
}

export default (modalRef = ref<HTMLDivElement | string>('')): UseModal => {
  const modal = ref<Modal | null>(null);
  onMounted(() => {
    modal.value = new Modal(modalRef.value, {
      keyboard: false,
      backdrop: false
    }) as Modal;
  });
  const showModal = () => modal.value?.show();
  const hideModal = () => modal.value?.hide();
  return { modal, showModal, hideModal };
};
