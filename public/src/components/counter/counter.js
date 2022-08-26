class MyCounter extends HTMLElement {
    
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }
    
    static get observedAttributes(){
        return ["count"];
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.mount();
    }

    connectedCallback(){
        this.mount();
    }

    disconnectCallback(){
        this.removeEventListeners();
    }

    mount(){
        this.render();
        this.addEventListener();
    }
    
    render(){
        this.shadowRoot.innerHTML =`
        <section>
            <b>${this.count || 0} likes</b>
        </section>
        `
    }

    removeEventListener(){
        document.querySelector('#heart').removeEventListener("click",this.onButtonClicked);
    }

    addEventListener(){
        document.querySelector('#heart').addEventListener("click",this.onButtonClicked);
    }


    onButtonClicked(){
        let heart = document.querySelector('#heart');
        const currentValue = Number(this.getAttribute("count"));

        if (currentValue < 1){
            this.setAttribute("count", currentValue + 1);
            heart.src = "./src/components/profile/Imgs/heart_red.png";
        }
        else{
            this.setAttribute("count", currentValue - 1);
            heart.src="./src/components/profile/Imgs/heart.png";
        }
    }
}

customElements.define("my-counter",MyCounter);
export default MyCounter;

document.getElementById("bookmark").onclick = function saveButton(){
    let save = document.querySelector('#bookmark');

    if(save.src.match("./src/components/profile/Imgs/bookmark.png")){
        save.src = "./src/components/profile/Imgs/bookmark_black.png";
    }
    else{
        save.src="./src/components/profile/Imgs/bookmark.png";
    }
}