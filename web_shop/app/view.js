export default class View{
    DOM = {
        wrapper : document.querySelector('.wrapper')
    };

    constructor(){
        
    }

    render(d){
        const str = d.map(this.#renderCard).join('');
        this.DOM.wrapper.innerHTML = str;
    }

    #renderCard = ({a, product_name, content_quantity, price_bgn, subtype, manufacturer, taste}) => {            
        return `<div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
          <p>${ product_name }</p>
          <p>${ price_bgn } lv</p>
            <img src="one-colour-solid-color-single-plain-white-1600x1200-c-e6e7ff-f-24.png" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
          <p>Quantity : ${ content_quantity }</p>
          <p>Manufacturer : ${ manufacturer }</p>
          <p>Taste : ${ taste }</p>
          <p>Subtype : ${ subtype }</p>
      </div>
          </div>
        </div>`;
    }
}