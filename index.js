const slides= document.getElementsByClassName('mySlides')
const nextSlider = document.getElementById('next')
const prevSlider = document.getElementById('prev')
let size = slides.length
let slide=0

nextSlider.addEventListener('click',function(){
    slides[slide].style.display="none"
    if(slide === size-1){
        slide=-1
    }
    slide+=1
    slides[slide].style.display="block"
    
})

prevSlider.addEventListener('click',function(){
    slides[slide].style.display="none"
    if(slide === 0){
        slide=size
    }
    slide-=1
    slides[slide].style.display="block"
})