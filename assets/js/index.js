//------------------------more discos start----------------------
function toggleText() {
    const fullText = document.querySelector('.full-text');
    const button = document.querySelector('.toggle-btn');
    
    if (fullText.style.display === 'block') {
        fullText.style.display = 'none';
        button.textContent = 'توضیحات بیشتر';
    } else {
        fullText.style.display = 'block';
        button.textContent = 'توضیحات کمتر';
    }
}

//-------------------------more discose end-----------------------