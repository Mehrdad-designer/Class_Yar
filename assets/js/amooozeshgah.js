const show_call_section = document.querySelector('.show-call-section');
const show_number_call = document.querySelector('.show-number');
const remove_call_section = document.querySelector('.remove-call-section');
const close_icon = document.querySelector('.remove-icon')

const call_modal_section = document.querySelector('.call-card-modal-section');
const amoozeshgah_number = document.querySelector('.amoozeshgah-number-section');


show_call_section.addEventListener('click', () => {
    if (call_modal_section != undefined) {
        call_modal_section.style.display = "block";
    }
})

remove_call_section.addEventListener('click', () => {
    if (call_modal_section != undefined) {
        call_modal_section.style.display = "none";
    }
})

show_number_call.addEventListener('click', () => {
    if (amoozeshgah_number != undefined) {
        amoozeshgah_number.style.display = "block";
    }
})

close_icon.addEventListener('click', () => {
    if (call_modal_section != undefined) {
        call_modal_section.style.display = "none";
    }
})

