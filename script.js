const cityName = document.querySelector("#cityName");
const submitBtn = document.querySelector("#submitBtn");
let weatherCardContainer = document.querySelector("#weatherCardContainer");
const apiKey = "5f174e245eaa4766afa31549231803";

submitBtn.addEventListener("click", () => {
  let city = cityName.value;
  fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { temp_c, condition } = data.current;
      const { text, icon } = condition;
      const { name } = data.location;

      let cardInfo = `
      <div class="card">
        <h1>${name}'s Weather</h1>
        <h2>${temp_c}°C</h2>
        <div>
          <span class="customText"
            ><strong>Condition:</strong> ${text}</span
          >
          <img
            src="${icon}"
            width="64px"
            height="auto"
          />
        </div>
        </div>
        `;

      //   card.innerHTML = cardInfo;
      weatherCardContainer.innerHTML = cardInfo;
    });
});
