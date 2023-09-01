export function showMoreText() {
    const textHidden = document.getElementById('textHidden');
    const textShown = document.getElementById('textShown');
    textShown.classList.add('hidden')
    textHidden.classList.remove('hidden')
    textHidden.scrollIntoView({
        behavior: 'smooth' 
    });
}
