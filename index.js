console.log('hello world')

let message = document.querySelector('#message');



const addMovie = (event) => {
    event.preventDefault();
   
    let inputField = document.querySelector('input');
    
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    
    const list = document.querySelector('ul')
    list.appendChild(movie);
    
    inputField.value = '';
}

const eventButton = document.querySelector('form')
eventButton.addEventListener('submit', addMovie);

const deleteMovie = event => {
    event.target.parentNode.remove();
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage();
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked') === true) {
        message.textContent = `${event.target.textContent} watched!`;
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage();
}

function revealMessage() {
    message.classList.remove('hide');
    setTimeout = (() => {
        message.classList.add('hide');
    }, 1000)
}