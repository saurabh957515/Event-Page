const heading = document.querySelector(".headingDIV h4");
// console.log(heading.textContent)
if (heading.textContent === "Dedicated to the Craft of Building Websites ") {
  // console.log("For the JSON");
  const content = document.querySelector(".content");
  fetch("/db.json")
    .then((data) => data.json())
    .then((json) => {
      // console.log(json)
      json.user.forEach((data) => {
        // console.log(data);
        const newElement = document.createElement("div");
        newElement.innerHTML = DataRe(data);
        // console.log(newElement);
        content.appendChild(newElement);
      });
    });
  function DataRe({ SpeakerName, photo, SpeakerDesc, title }) {
    return `
    <h2 class="imgHeading">${SpeakerName}</h2>
    <img src="${photo}" alt="">
    <h2 class="eventTitle">${title}</h2>
    <p class="description">${SpeakerDesc}</p>
  `;
  }
}

const toggleNav = () => {
  const navList = document.getElementById("navList");
  const screenWidth = window.innerWidth;

  if (screenWidth < 455) {
    if (navList.style.display === "block") {
      navList.style.display = "none";
    } else {
      navList.style.display = "block";
    }
    if (navList.style.display === "none") {
      location.reload();
    }
  }
};
