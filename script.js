var buttons = document.querySelectorAll('button');

buttons.forEach(button =>{
    button.addEventListener('mouseover', function(){
        console.log(button)
    })
})
