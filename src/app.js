const hamburgerIcon = document.querySelector('#hamburger')
const mobileMenu = document.querySelector('#menu')
hamburgerIcon.addEventListener('click', () => {
    if (hamburgerIcon.firstElementChild.id === 'closeBtn') {
        hamburgerIcon.innerHTML = '<svg id="hamburgerBtn"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke-width="1.5"stroke="currentColor"class="w-6 h-6 block hamburger lg:hidden focus:outline-none"><path stroke-linecap="round" stroke-linejoin="round"d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>'
    }
    else {
        hamburgerIcon.innerHTML = '<svg id="closeBtn" xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 block hamburger lg:hidden focus:outline-none"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>'
    }

    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden')
})


const reveal = () => {
    const reveals = document.querySelectorAll('.reveal')
    for (let reveal of reveals) {
        const revealTop = reveal.getBoundingClientRect().top
        const revealPoint = 150
        if (revealTop < (window.innerHeight / 5) * 4) {
            reveal.classList.add('active')
        }
        else {
            reveal.classList.remove('active')
        }
        console.log('reveal classlist', reveal.classList)
    }
}
window.addEventListener('scroll', reveal)

const staticFiles = [{
    propertyName: "New Hotels",
    area: "Egmore",
    city: "Chennai",
    imgSource: "images/room2.jpeg"
},
{
    propertyName: "Marriott",
    area: "ECR",
    city: "Chennai",
    imgSource: "images/room3.jpeg"
},
{
    propertyName: "Hyatt",
    area: "New Area",
    city: "Assam",
    imgSource: "images/room4.jpeg"
}]

const img = document.querySelector('#hotel-img')
const propertyName = document.querySelector('#property-name')
const area = document.querySelector('#area')
const city = document.querySelector('#city')
console.log(propertyName.innerText)
let toggle = false;
setInterval(() => {
    console.log('In timeout function')
    let index = staticFiles.findIndex((proprty) => proprty.propertyName === propertyName.innerText)
    console.log(index)
    if (index === staticFiles.length - 1) {
        index = 0
        console.log('inside if', index)
    }
    else {
        index += 1
        console.log('in else')
    }
    propertyName.innerText = staticFiles[index].propertyName
    area.innerText = staticFiles[index].area
    city.innerText = staticFiles[index].city
    img.src = staticFiles[index].imgSource
}, 4000)
