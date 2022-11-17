
const saluteTextContainer = document.querySelector('.saluteTextContainer')
const saluteImgContainer = document.querySelector('.saluteImgContainer')
const Authorname = document.querySelector('.name')
const jobTitleContainer = document.querySelectorAll('.jobTitleContainer')
const jobTitle = document.querySelectorAll('.jobTitle')
const projectsTitle = document.querySelector('.projectsTitle')
const phone = document.querySelectorAll('.phone')
const laptop = document.querySelector('.laptop')


window.addEventListener('scroll',()=>{
    let offsetY = window.scrollY
    saluteTextContainer.style.transform = `translateY(${offsetY*0.1}px)`
    saluteImgContainer.style.transform = `translate(${offsetY*0.4}px,${-offsetY*0.7}px)`
    Authorname.style.transform = `translateX(${offsetY*0.1}px)`
    jobTitleContainer[0].style.backgroundPositionY = `${offsetY*0.5}px`
    jobTitleContainer[1].style.backgroundPositionY = `${-offsetY*0.5}px`
    jobTitle[0].style.transform = `translateX(calc(200vh - ${offsetY}px)`
    jobTitle[1].style.transform = `translateX(calc(-300vh + ${offsetY}px)`
    projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px)`
    phone[0].style.transform = `translateX(calc(500vh - ${offsetY}px)`
    laptop.style.transform = `translateY(calc(615vh - ${offsetY}px)`
    phone[1].style.transform = `translateX(calc(760vh - ${offsetY}px)`
})

//Say Namste according to day period
let namaste  = document.getElementById("namaste")


let date = new Date()
let hours = date.getHours()


if(hours>0 && hours < 3){
namaste.innerText = "Good Night"
}
else if(hours>=3 && hours < 6){
    namaste.innerText = "Hey meet me Early Morning !"
}
else if(hours>=6 && hours < 12){
    namaste.innerText = "Good Morning !"
}
else if(hours>=12 && hours < 15){
    namaste.innerText = "Good Afternoon !"
}
else if(hours>=15 && hours < 21){
    namaste.innerText = "Good Evening !"
}
else if(hours>=21 && hours <=24) {
    namaste.innerText = "Good Night !"
}