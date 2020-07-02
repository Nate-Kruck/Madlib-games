// import functions and grab DOM elements
const submitButton = document.getElementById('submit');
// initialize state

// set event listeners to update state and DOM

submitButton.addEventListener('click', ()=> {
    const myForm = document.getElementById('input-form');
    const madLib = document.getElementById('output-form');
    const enteredWordList = document.getElementsByClassName('word-input');
    const storyWordList = document.getElementsByClassName('word-output');
    
    for (let i = 0; i < enteredWordList.length; i++) {
        storyWordList[i].innerText = enteredWordList[i].value;
    }
    myForm.classList.add('hidden');
    madLib.classList.remove('hidden');
});