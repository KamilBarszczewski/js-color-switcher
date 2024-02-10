const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

stopBtn.disabled = true;

function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

let id;


function changeColor(){
    document.body.style.background = getRandomHexColor();
}

startBtn.addEventListener("click", (event) => {
    event.preventDefault;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    id = setInterval(changeColor, 1000)
    
});

stopBtn.addEventListener("click", (event)=>{
    event.preventDefault;
    clearInterval(id);
    stopBtn.disabled = true;
    startBtn.disabled = false;

})

