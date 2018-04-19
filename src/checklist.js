class Checklist extends HTMLElement {

  get active() {
    return this.hasAttribute("active");
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <h2><slot name="checklist-name"></slot></h2>
    <ul class="list-group">
      <slot></slot>
    </ul>
    `;
  }
}

export default Checklist;
