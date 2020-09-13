var buttons = document.querySelectorAll('button');
var img = document.querySelector('img');
buttons.forEach(button =>{
    button.addEventListener('mousemove', function(e){
        console.log(button)
        console.log(e);
        img.src = button.dataset.img;
        img.style.display ="block";
        img.style.transform = `translate(${e.clientX /2}% , ${e.clientY/2}px)`;

    })
    
})
