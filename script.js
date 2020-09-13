var buttons = document.querySelectorAll('button');

buttons.forEach(button =>{
    button.addEventListener('mouseover', function(e){
        console.log(button)
        console.log(e);
    })
})
