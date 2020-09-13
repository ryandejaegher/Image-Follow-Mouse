// var buttons = document.querySelectorAll('button');
// var img = document.querySelector('img');
// buttons.forEach(button =>{
//     button.addEventListener('mousemove', function(e){
//         console.log(button)
//         console.log(e);
//         img.src = button.dataset.img;
//         // img.style.display ="block";

//         // document.querySelector('.block').style.left = `${e.clientX}px`; 
//         // document.querySelector('.block').style.top = `${e.clientY}px`;
//         setTimeout(function() {
//             img.style.left = `${e.clientX}px`; 
//         img.style.top = `${e.clientY}px`;
//         },180)
        

//     })
    
// })


(function(){

var template = document.createElement('template');
template.innerHTML = /*html*/`

<style>
    :host {
        display: inline-block;
        border: 1px solid red;
    }

figure {
  position: relative;
  padding-bottom: 100%;
  display: block;
  margin: 0;

}

img {
  display: block;
  position: absolute;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  z-index:-1;
  transform: translate(-50%,-50%);
}

div {
position:absolute;
top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Change this to change image size */
  width: 50%; 
  z-index:-2;
  pointer-events: none;
}

    ::slotted(*) {
        z-index: 10000;
    }
</style>

<slot></slot>

<div><figure><img src=""></figure></div>
`;

class HoverText extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        this.hoverImage = this.shadowRoot.querySelector('img');

        updateImagePosition() {
            this.shadowRoot.querySelector('figure').style.left = `${mouseX}px`;
            this.shadowRoot.querySelector('figure').style.top = `${mouseY}px`;
        }
        this.addEventListener('mousemove', e =>{
            var mouseX = e.clientX;
            var mouseY = e.clientY;
            this.shadowRoot.querySelector('figure').style.opacity = 1;
            setTimeout(this.updateImagePosition)
        })
    }

    

    static get observedAttributes() { return ['image']; }


    get image() {
        return this.hasAttribute('image');
      }
    
      set image(val) {
        // Reflect the value of the image property as an HTML attribute.
        if (val) {
          this.setAttribute('image', val);
        } else {
          this.removeAttribute('image');
        }
    }

    connectedCallback() {
        this.hoverImage.src = this.getAttribute('image');
    }
}
window.customElements.define('hover-text', HoverText);
    
})();