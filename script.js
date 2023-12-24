

//const  toggleButton = document.querySelector('.faq-toggle');
const FAQContainer = document.querySelectorAll('.faq');


FAQContainer.forEach((element) => {
    element.addEventListener('click', (event) => {
        element.classList.toggle('active');
    })
})