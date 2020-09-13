var buttons = document.querySelectorAll('button');
var img = document.querySelector('img');
buttons.forEach(button =>{
    button.addEventListener('mousemove', function(e){
        console.log(button)
        console.log(e);
        img.src = button.dataset.img;
        img.style.display ="block";
        img.style.transform = `translate(${e.offsetX}px, ${e.pageY/2}px)`;

    })
    button.addEventListener('mouseout', function(e){
        console.log(button)
        console.log(e);
        img.src = button.dataset.img;
        img.style.display="none";
    })
})
