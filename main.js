const input = document.getElementById('input');
const fact = document.getElementById('fact');

getFact();

function getFact() {
    let number = input.value;

    fetch ('http://numbersapi.com/' + number)
        .then(response => response.text())
        .then(data => {
            fact.textContent = data;
        })
        .catch(err => console.log(err));
}

input.addEventListener('input',getFact);