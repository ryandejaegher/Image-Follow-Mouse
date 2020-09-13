var buttons = document.querySelectorAll('buttons');

buttons.forEach(button =>{
    button.addEventListener('mouseover', function(){
        console.log(button)
    })
})