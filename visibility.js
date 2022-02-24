const button = document.querySelector('button')
const visibility = document.querySelector('.visibility')

button.addEventListener('click', openWindow)
function openWindow(){
    visibility.classList.remove('visibility')
}

document.addEventListener('keydown', closeWindow)
function closeWindow(event){   
    if(event.key == "Escape" && visibility.classList.length < 2){
        visibility.classList.add('visibility')        
    }
}