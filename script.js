var buttons = document.querySelectorAll('button');
var img = document.querySelector('img');
buttons.forEach(button =>{
    button.addEventListener('mousemove', function(e){
        console.log(button)
        console.log(e);
        img.src = button.dataset.img;
        img.style.display ="block";
        img.style.transform = `translate(${e.offsetX*(-0.5)} , ${e.pageY/2}px)`;

    })
    
})
