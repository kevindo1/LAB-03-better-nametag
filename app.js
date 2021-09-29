// import functions and grab DOM elements
const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');

const blueButton = document.getElementById('blue');
const greenButton = document.getElementById('green');
const pinkButton = document.getElementById('pink');

const backgroundHeader = document.getElementById('background-header');
const backgroundFooter = document.getElementById('background-footer');

const pronouns = document.getElementById('pronouns');
const heButton = document.getElementById('heButton');
const sheButton = document.getElementById('sheButton');
const theyButton = document.getElementById('theyButton');

const serif = document.getElementById('Serif');
const sansSerif = document.getElementById('Sans-serif');
const cursive = document.getElementById('Cursive');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

serif.addEventListener('click', ()=> {
    firstName.style.fontFamily = 'Serif';
});

sansSerif.addEventListener('click', ()=> {
    firstName.style.fontFamily = 'Arial';
});

cursive.addEventListener('click', ()=> {
    firstName.style.fontFamily = 'Cursive';
});

button.addEventListener('click', ()=> {
    let newName = nameInput.value;
    firstName.textContent = newName;
});

blueButton.addEventListener('click', ()=> {
    backgroundHeader.style.backgroundColor = 'Blue';
    backgroundFooter.style.backgroundColor = 'Blue';
});

greenButton.addEventListener('click', ()=> {
    backgroundHeader.style.backgroundColor = 'Green';
    backgroundFooter.style.backgroundColor = 'Green';
});

pinkButton.addEventListener('click', ()=> {
    backgroundHeader.style.backgroundColor = 'Pink';
    backgroundFooter.style.backgroundColor = 'Pink';
});

heButton.addEventListener('click', ()=> {
    pronouns.textContent = '(He/Him)';
});

sheButton.addEventListener('click', ()=> {
    pronouns.textContent = '(She/Her)';
});

theyButton.addEventListener('click', ()=> {
    pronouns.textContent = '(They/Them)';
});