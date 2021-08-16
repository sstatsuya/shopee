// Modal
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
const loginModal = document.getElementById('modal-login');
const registerModal = document.getElementById('modal-register');


function openLoginModal(){
    modal.classList.add('modal-show');
    loginModal.classList.add('auth-open');
}

function openRegisterModal(){
    modal.classList.add('modal-show');
    registerModal.classList.add('auth-open');
}

function closeModal(){
    loginModal.classList.remove('auth-open');
    registerModal.classList.remove('auth-open');
    modal.classList.remove('modal-show');
}

// Close when click on overlay
modalOverlay.onclick = () =>{
    closeModal();
}
// End Modal