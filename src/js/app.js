import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  let curr = document.getElementsByClassName("hot");
      let emoji = "&#x1F525";
      for(let i = 0; i < curr.length; i++){
        
        let c = curr[i].innerHTML;
        curr[i].innerHTML = c + emoji;
      
      }
});
