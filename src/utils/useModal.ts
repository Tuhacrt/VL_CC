import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';

export default (modalRef = ref<HTMLDivElement | string>('')) => {
  let modal: Modal | null = null;
  onMounted(() => {
    modal = new Modal(modalRef.value, {
      keyboard: false,
      backdrop: false
    }) as Modal;
  });
  const showModal = () => modal?.show();
  const hideModal = () => modal?.hide();
  return { modal, showModal, hideModal };
};
