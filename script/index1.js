// console.log("hello")
// const content = document.querySelector(".content");
// // console.log(content)

// fetch(" http://localhost:3000/user").then((data)=>data.json())

//         .then(json => {console.log(json)
//             json.map(data => {
//                DataRe(data);
//             })
//         })
// function DataRe({photo,SpeakerName,SpeakerDesc}){
// content.innerHTML=      ` <h2 class="imgHeading"> ${SpeakerName}</h2>
//     <img src= "${photo}" alt="">
//     <h2 class="eventTitle"> Good Man</h2>
//     <p class="description">${SpeakerDesc}</p>`
// }
   
// IMPORTANT TOPICS
//difference between this code is that above code will genereate the innerhtml but it will stay there and again the new data comes it will overwritten the previous in more tecahinal term the fuction not creating any new element so it will stay there 

// and now below case the element is being created so datare function is called the it will send the value to the that element that new element will store it and  if we again send new data with the help of the datare will again store it in the element 

const heading = document.querySelector(".headingDIV h4");
// console.log(heading.textContent)
if (heading.textContent === "Dedicated to the Craft of Building Websites ") {
console.log("For the JSON")
const content = document.querySelector(".content");
fetch("/db.json")
  .then(data => data.json())
  .then(json => {
    // console.log(json)
    json.user.forEach(data => {
      // console.log(data);
      const newElement = document.createElement("div");
      newElement.innerHTML = DataRe(data);
      console.log(newElement)
      content.appendChild(newElement);
    });
  });
function DataRe({ SpeakerName , photo , SpeakerDesc,title }) {
  return `
    <h2 class="imgHeading">${SpeakerName}</h2>
    <img src="${photo}" alt="">
    <h2 class="eventTitle">${title}</h2>
    <p class="description">${SpeakerDesc}</p>
  `;
}





// const linkOrButton =  document.getElementById("register");

// linkOrButton.addEventListener('click', (event) => {
//   event.preventDefault();

//   // Get the ID of the element you want to scroll to.
//   const elementId = '#form';

//   // Set the new URL to redirect to, including the fragment identifier.
//   const newUrl = '/pages/index.4html';

//   // Redirect to the new URL.
//   window.location.assign(newUrl);

//   // Scroll to the element with the specified ID.
//   const element = document.getElementById(elementId);
//   if (element) {
//     element.scrollIntoView();
//   }
// });




}


// console.log(window.location.href)

















  const  toggleNav =()=> {
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
  }

    
 




// const button = document.querySelector('#navList'); // select the button element

// window.addEventListener('resize', function() { // add a resize event listener to the window object
//   if (window.innerWidth < 455) { // check if screen width is below 455px
//     button.style.display = 'block'; // show button
//   } else {
//     button.style.display = 'none'; // hide button
//   }
// });








































































// const main = document.querySelector("main");
// main.style.backgroundColor = "white";

// const changeColor = () => {
//  return  new Promise((resolve, reject) => {
//     if (main.style.backgroundColor === "white") 
//     {
//       main.style.backgroundColor = "orange";
//       resolve("Background color changed to orange");
//     }
//      else { 
//       main.style.backgroundColor = "white";
//       reject("Background color changed to white");
//     } 
//   });
// };
// setInterval(() => {
//   changeColor()
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
// }, 1000)



















// const myDiv = document.getElementsByClassName("newDiv");
// const rect = myDiv.getBoundingClientRect();

// const width = rect.width;
// const height = rect.height;

// console.log("Width: " + width);
// console.log("Height: " + height);