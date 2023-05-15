export const FaqComponent = () => {
    const faqComponent = document.querySelector('.faq-component');
    const faqAllQuestions = faqComponent.querySelectorAll('.faq-question-partial');

    faqAllQuestions.forEach((faqSingleQuestion) => {
        const faqAnswer = faqSingleQuestion.querySelector('.faq-question-partial__answer');
        
        faqSingleQuestion.style.setProperty('--faq-answer-height', `${faqAnswer.scrollHeight}px`);

        faqSingleQuestion.addEventListener('click', () => {
            faqSingleQuestion.toggleAttribute('data-question-expanded');
        });
    });
}