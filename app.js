const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const noOfImages = document.querySelectorAll("img").length;
let currentImage = 1;
const imageContainer = document.querySelector(".image-container");
let interval = "";

btnNext.addEventListener("click", () => {
    currentImage++;
    clearInterval(interval);
    updateImg();
})

btnPrev.addEventListener("click", () => {
    currentImage--;
    clearInterval(interval);
    updateImg();
})

function updateImg() {
    if(currentImage > noOfImages){
        currentImage = 1;
    }else if(currentImage < 1){
        currentImage = noOfImages;
    }
    imageContainer.style.transform = `translateX(-${(currentImage-1)*720}px)`;
    interval = setInterval(()=> {
        currentImage++;
        clearInterval(interval);
        updateImg();
    },3000);
}

updateImg();