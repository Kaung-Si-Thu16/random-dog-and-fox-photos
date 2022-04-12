const dogResult = document.querySelector("#dogResult");
const foxResult = document.querySelector("#foxResult");

const dogBtn = document.querySelector("#dogBtn");
const foxBtn = document.querySelector("#foxBtn");


const getRandomDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            dogResult.innerHTML = `<img src="${data.message}" alt="Random dog photo">`
        })
}

const getRandomFox = () => {
    fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => {
            foxResult.innerHTML = `<img src="${data.image}" alt="Random fox photo">`
        })
}

dogBtn.addEventListener("click", getRandomDog);
foxBtn.addEventListener("click", getRandomFox);