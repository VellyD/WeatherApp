import { html, render } from "../node_modules/lit-html/lit-html.js";

const weatherCardTemplate = () => html`
  <div id="card" class="container">
    <div class="card mb-3">
      <img
        src="https://assets.thehansindia.com/h-upload/2021/08/17/1102463-pain.webp"
        class="img-fluid"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">City title</h5>
        <p class="card-text">Description</p>
      </div>
    </div>
  </div>
`;

export const renderCard = () => {
  let rootElement = document.getElementById("root");

  return render(weatherCardTemplate(), rootElement);
};
