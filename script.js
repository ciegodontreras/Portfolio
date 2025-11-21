let recommendationBoxes = document.querySelector('.recommendation-boxes'); 

recommendationBoxes.innerHTML = `
    <p class="bubble-text">" Working with Diego has been a smooth and easy process. "</p>
    <p class="bubble-text">" Diego is adaptable and always trust worthy  "</p>
    <p class="bubble-text">" Diego provides great service "</p>
`

const submitBtn = document.querySelector('.recommendation-button'); 

submitBtn.addEventListener('click', addRecommendation); 

function addRecommendation() {
    let recommendationInput = document.querySelector('.recommendation-input');

    recommendationBoxes.innerHTML += `<p class="bubble-text">" ${recommendationInput.value} "</p>`; 

    recommendationInput.value = ''; 

    alert('Thank you for submitting a recommendation!')
}

const homeBtn = document.querySelector('.home-btn'); 

homeBtn.addEventListener('click', scrollHome); 

function scrollHome() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    }); 
}
