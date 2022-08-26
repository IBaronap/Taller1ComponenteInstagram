import * as components from "./components/index.js"

class IContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-profile username="isa.baro" ubication="Cali"></my-profile>
        `
    }
}

class CountContainer extends IContainer{
    render(){
        this.shadowRoot.innerHTML =`
        <my-counter></my-counter>
        `
    }
}

class VContainer extends IContainer{
    render(){
        this.shadowRoot.innerHTML = `
        <my-prof username="isa.baro" comment="Instagram template" hashtag="#node" numbercomments="618" date="31 Oct 2021"></my-prof>
        `
    }
}

customElements.define("info-container",IContainer);
customElements.define("count-container",CountContainer);
customElements.define("comment-container",VContainer);