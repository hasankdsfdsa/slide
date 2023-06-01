let slide = document.querySelectorAll(".position")
let slideArray = Array.from(slide)

let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

function prevnext(){
    let activeSlide = document.querySelector(".active")
    let curentSlideIndex = slideArray.indexOf(activeSlide)
    
    let prev;
    let next;

    if(curentSlideIndex == 0){
        prev = slideArray [slideArray.length -1]
    }else{
        prev = slideArray[curentSlideIndex - 1 ]
    }

    if(curentSlideIndex == slideArray.length -1){
        next = slideArray[0]
    }else{

        next = slideArray[curentSlideIndex + 1]
    }
 return[prev,next]
}

function moveSlide(){
    let activeSlide = document.querySelector(".active")
    let curentSlideIndex = slideArray.indexOf(activeSlide)
    let [prev,next] = prevnext()

    slideArray.map((slide,index)=>{
        if(curentSlideIndex == index){
            slide.style.transform = "translateX(0)"
        }else if(slide == prev){
            slide.style.transform = "translateX(-100%)"
        }else if( slide == next){
            slide.style.transform = "translateX(100%)"
        }
        slide.addEventListener("transitionend",()=>{
            slide.classList.remove("smoth")
        })
    })
}


next.addEventListener("click",()=>{
    let activeSlide = document.querySelector(".active")
    let [prev,next] = prevnext()
    
    activeSlide.classList.add("smoth")
    next.classList.add("smoth")
    activeSlide.classList.remove("active")
    activeSlide.style.transform = "translateX(100%)"
    next.classList.add("active")
    next.style.transform = "translateX(0)"
    moveSlide()
})


prev.addEventListener("click",()=>{
    let activeSlide = document.querySelector(".active")
    let [prev,next] = prevnext()
      
      activeSlide.classList.add("smoth")
      prev.classList.add("smoth")
      activeSlide.classList.remove("active")
      activeSlide.style.transform = "translateX(-100%)"
      prev.classList.add("active")
      prev.style.transform ="translate(0)"
      moveSlide()
})






