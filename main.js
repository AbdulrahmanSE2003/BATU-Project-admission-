// <!--* Navbar => JS -->
const navLis = document.querySelectorAll(".navbar-links .main-li");

addActiveClass(navLis);
// SECTION - Add & Remove Active Class.
function addActiveClass(nodeList) {
  nodeList.forEach((a) => {
    a.addEventListener("click", (e) => {
      nodeList.forEach((a) => {
        a.classList.remove("active");
      });
      a.classList.add("active");
    });
  });
}

// *SECTION -  Controlling Animation
let firstP = document.querySelector("#how p");
let secondP = document.querySelector("#apply p");
let steps = document.querySelectorAll("#how .step");
let mainSection = document.querySelector("#how");
let lastSection = document.querySelector("#apply");
window.addEventListener("scroll", () =>{
  // console.log(window.scrollY);
  reveal(mainSection, firstP, 400);
  reveal(lastSection, secondP, 700);
})

function reveal(section, el , index ){
  if(window.scrollY >= section.offsetTop -index){
    if(el){
      // console.log("true");
      el.style.height = "100px";
    }
  }
}

// Controlling Steps
window.addEventListener("scroll", () =>{
  steps.forEach(step =>{
    if (window.scrollY >= step.offsetTop - 350){
      if(step){
        if(step.classList.contains("left")){
          step.classList.add("go-left");
          document.querySelector("#how .pic img").classList.add("go-left");
        } else{
          step.classList.add("go-right");
          document.querySelector("#how .pic img").classList.add("go-right");
        }
      }
    }
  })
})