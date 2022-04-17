import { html, render } from "../node_modules/lit-html/lit-html.js";

const weatherCardTemplate = () => html`
  <div id="card" class="container">
    <div class="card mb-3">
    <img id="img" src="../images/cloudy.PNG" class="img-fluid rounded" alt="...">
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
