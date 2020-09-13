var buttons = document.querySelectorAll('button');
var img = document.querySelector('img');
buttons.forEach(button =>{
    button.addEventListener('mousemove', function(e){
        console.log(button)
        console.log(e);
        // img.src = button.dataset.img;
        // img.style.display ="block";
        document.querySelector('.block').style.transform = `translate(${e.clientX/-.5+100}px , ${e.clientY*0.5+100}px)`;
        

    })
    
})
