let baseURL = "https://random-d.uk/api/v2"
let duckContainer = document.querySelector("#duckContainer")
let modal = document.querySelector(".modal")
let modalContent = document.querySelector(".modalInnerText")
let span = document.querySelector("span")
let donald = document.querySelector(".donald")

let duckFacts = [
  {title: "Mandarin Duck", description: "The duck swimming in the pool."},
  {title: "Mandarin Duck", description: "The duck relaxing in the pool."},
  {title: "White Duck", description: "The duck on the grass."},
  {title: "Hat Duck", description: "The duck wearing a hat on top of it's head."},
  {title: "Yellow Duck", description: "The duck is taking the photo shoot."},
  {title: "Donald Duck", description: "The duck cosplaying the Donald Duck."},
  {title: "Baby Duck", description: "The duck looked so comfortable."},
  {title: "Canadian Duck", description: "The duck becomes the ruler of the sky."},
  {title: "Rubber Duck", description: "The duck taking picture with the Rubber Duck."},
  {title: "Loving Duck", description: "The ducks love each others."},
  {title: "Canadian Duck", description: "The duck wondering in the pool."},
  {title: "Cute Duck", description: "The duck looked silly, but cute."},
  {title: "Adorable Duck", description: "The baby duck looking at you."},
  {title: "The Ducks", description: "The three muskteeer ducks."},
  {title: "Hat Duck", description: "The duck wearing a hat on top of it's head."},
  {title: "Constructor Duck", description: "The duck building the home."},
  {title: "Canadian Duck", description: "The duck taking a selfie."},
  {title: "Chubby Duck", description: "The duck is having fun with the water."},
]
  
let duck = () => {
  fetch(`${baseURL}/list`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      renderDucks(data.images)
    })
}  
duck()

function renderDucks(data) {
  // shuffle data-array first ["164.jpg", "55.jpg", "64.jpg", "14.jpg"]

  let n = 18

  for (let i = 0; i < n; i++) {
    let duckCard = `
    <div>
      <img class="duckpic" src="${baseURL}/${data[i]}"/>
    </div>
    `
    duckContainer.insertAdjacentHTML("beforeend", duckCard)
  }

  let duckGallery = document.querySelectorAll(".duckpic")
    
  duckGallery.forEach((duckClick, index) => {
    duckClick.addEventListener("click", (e) => { 
      donald.src = e.target.currentSrc
      donald.height = 300
      donald.width = 300

      let duckInfo = `
        <h1>${duckFacts[index].title}</h1>
        <p>${duckFacts[index].description}</p>
      `

      // Call removePrevious when you need to remove previous search before rendering new search
      removePrevious(modalContent);

      modal.style.display = "block"
      modalContent.insertAdjacentHTML('beforeend', duckInfo)
     
      // console.log(e.target.currentSrc)
      span.onclick = function () {
        modal.style.display = "none";
      }
      
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    })
  })
}
  
// function that removes all elements inside of a container
function removePrevious(result) {
  while (result.lastChild) {
    result.removeChild(result.lastChild);
  }
}