import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  let curr = document.querySelectorAll(".hot");
  console.log(curr);
  let emoji = "&#x1F525";
  for(let i = 0; i < curr.length; i++){ 
    let c = curr[i].innerHTML;
    const p = document.createElement("p")
    p.innerHTML = emoji;
    curr[i].parentNode.appendChild(p)
  }
});
