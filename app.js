const url = "https://api.thecatapi.com/v1/images/search"
const section = document.querySelector('.container')
const button = document.querySelector('.btn')

button.addEventListener('click', getRandomCats);

randomCatPhoto = (json) => {
    let photo = (json)[0].url
    section.classList.add('cats')

    let image = document.createElement('img')
    image.src = photo;
    image.classList.add('random-cats')
    image.alt = photo;
    section.appendChild(image)
}

async function getRandomCats() {
    section.innerHTML =""
    try {
        const response = await fetch(url)
        const json = await response.json()
        console.log('JSON:', json);
        return randomCatPhoto(json)        
    } catch (e) {
        console.log('thi is an apple')
        console.log(e)
    }
}