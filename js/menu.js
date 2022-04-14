(() => {
    const refs = {
      openModalBtn: document.querySelector(".header__menu-button"),
      modal: document.querySelector(".header__menu"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("header__menu--hidden");
    }
  })();