class FlightChecklists extends HTMLElement {

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<ul class="nav justify-content-center" id="myTab" role="tablist">
  ${Array.from(this.querySelectorAll("flight-checklist")).map((checklistElement) => `
  <li class="nav-item">
    <a class="nav-link" id="${checklistElement.getAttribute('name')}-tab" data-toggle="tab" href="#walkaround" role="tab" aria-controls="home" aria-selected="true">
      ${checklistElement.getAttribute('name')}
    </a>
  </li>
  `).join('')}
</ul>
<slot></slot>
    `;
    this.shadowRoot.querySelectorAll(".nav-link").forEach((el) => el.addEventListener("click", (e) => {
      console.log('clickety!');
    }));
  }
}

export default FlightChecklists;
