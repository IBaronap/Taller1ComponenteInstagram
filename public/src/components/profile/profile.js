class MyProfile extends HTMLElement {
  static get observedAttributes() {
    return ['username', 'ubication', 'comment', 'hashtag', 'numbercomments', 'date'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link href="./src/components/profile/style.css" rel="stylesheet">
        <section>
          <section id="header">
            <img class="PP" src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png">
            <div>
              <h4 class="username">${this.username}</h4>
              <p class="Ubication">${this.ubication}</p>
            </div>
            <img class="Points" src="https://static.thenounproject.com/png/585197-200.png">
          </section>
          <img class="FP" id="FP" src="https://2.bp.blogspot.com/-gl0c5cbOJuU/Xd1dUcF37WI/AAAAAAACCfM/PcHgUvL6nno7tWAO2EZcOVizilXcPIR1ACKgBGAsYHg/s1600/02-Cat-in-a-Box-Asa-Ishino-www-designstack-co.jpg">
        </section>
        `;
  }

}

class MyComments extends MyProfile {
  render() {
    this.shadowRoot.innerHTML = `
        <link href="./src/components/profile/style.css" rel="stylesheet">
        <section>
            <p class="Caption"><b class="username">${this.username}</b> ${this.comment} <t>${this.hashtag}</t> </p>
            <p class="Comment">View all ${this.numbercomments} comments</p>
            <p class="Date">${this.date}</p>
        </section>
        `;
  }
}

customElements.define('my-profile', MyProfile);
customElements.define('my-prof', MyComments);
export default MyProfile; MyComments;
