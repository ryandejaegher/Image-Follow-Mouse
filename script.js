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
        background: black;
        color: white;
        font-family: monospace;
        padding:12px 36px;
        min-width: 6em;
        text-align: center;
    }

figure {
  position: relative;
  padding-bottom: 100%;
  display: block;
  visibility:hidden;
  top: 50%;
  left: 50%;
  margin: 0;
  opacity: 0;
  transition-duration: 0.4s
  transition-property: opacity;
  transition-timing-function: ease;

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
        this.addEventListener('mousemove', e => {


            setTimeout(this.updatePosition.bind(this),0,e.clientX,e.clientY)

            this.shadowRoot.querySelector('figure').style.opacity = '1';
        })

        this.addEventListener('mouseout', e => {
            var figure = this.shadowRoot.querySelector('figure')
                figure.style.opacity = '0';
                figure.style.left = `50%`;
                figure.style.top = `50%`;

        })
    }

    updatePosition(x,y){
        var figure = this.shadowRoot.querySelector('figure')
            figure.style.left = `${x}px`;
            figure.style.top = `${y}px`;
            figure.style.visibility = 'visible';
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