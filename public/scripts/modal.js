export default function modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)

  function open() {
    // funcionalidade de atribuir a classe active para modal
    modalWrapper.classList.add('active')
  }
  function close() {
    // remover
    modalWrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}
