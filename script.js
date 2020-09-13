var buttons = document.querySelectorAll('button');
var img = document.querySelector('img');
buttons.forEach(button =>{
    button.addEventListener('mousemove', function(e){
        console.log(button)
        console.log(e);
        img.src = button.dataset.img;
        // img.style.display ="block";

        // document.querySelector('.block').style.left = `${e.clientX}px`; 
        // document.querySelector('.block').style.top = `${e.clientY}px`;
        setTimeout(function() {
            img.style.left = `${e.clientX}px`; 
        img.style.top = `${e.clientY}px`;
        },180)
        

    })
    
})


(function(){

var template = document.createElement('template');
template.innerHTML = /*html*/`

<style>
    :host {
        display: inline-block;
    }
</style>

<slot></slot>
`;

class HoverText extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
    
})();