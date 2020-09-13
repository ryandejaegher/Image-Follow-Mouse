var buttons = document.querySelectorAll('button');
var img = document.querySelector('img');
buttons.forEach(button =>{
    button.addEventListener('mouseover', function(e){
        console.log(button)
        console.log(e);
        img.src = button.dataset.img;
        img.style.transform = `(${e.clientX}px, ${e.clientY}px`;
    })
})
