let recommendationBoxes = document.querySelector('.recommendation-boxes'); 

recommendationBoxes.innerHTML = `
    <p class="bubble-text">" Working with Diego has been a smooth and easy process. He is adaptable and always trust worthy "</p>
    <p class="bubble-text">" Hi my name is Diego "</p>
    <p class="bubble-text">" My girlfriends name is Claire "</p>
`

const submitBtn = document.querySelector('.recommendation-button'); 

submitBtn.addEventListener('click', addRecommendation); 

function addRecommendation() {
    let recommendationInput = document.querySelector('.recommendation-input'); 

    recommendationBoxes.innerHTML += `<p class="bubble-text">" ${recommendationInput.value} "</p>`; 

    recommendationInput.value = ''; 
}
