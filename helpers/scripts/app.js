const reader = new FileReader()

const btn = document.getElementById('play')

btn.addEventListener("click" , ()=>{
    console.log(new Audio('helpers/songs/lost.mp3'))
})


const file = "lost.mp3"

reader.readAsDataURL(file);