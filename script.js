var buttons = document.querySelectorAll('button');
var img = document.querySelector('img');
buttons.forEach(button =>{
    button.addEventListener('mousemove', function(e){
        console.log(button)
        console.log(e);
        img.src = button.dataset.img;
        //img.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
        img.style.left = `${e.pageX}px`;
        img.style.top = `${e.pageY}px`;
    })
})
