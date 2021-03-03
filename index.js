document.querySelector(".hamburger").addEventListener("click", function(){
   var openNavItems = document.querySelectorAll(".nav-open");
   for (var i = 0; i < openNavItems.length; i++) {
       openNavItems[i].classList.remove("hidden");
   }
})
document.querySelector(".x-button").addEventListener("click", function(){
   var openNavItems = document.querySelectorAll(".nav-open");
   for (var i = 0; i < openNavItems.length; i++) {
       openNavItems[i].classList.add("hidden");
   }
})

var buttonSeeAll = document.querySelector(".button-see-all");
buttonSeeAll.addEventListener("mouseover", function(event) {
    event.target.style.background = "black";
    event.target.style.color = "white";
})
buttonSeeAll.addEventListener("mouseout", function(event) {
    event.target.style.background = "white";
    event.target.style.color = "black";
})

const pics = document.querySelectorAll('.pic-link');

const mouseOverHandler = (e) => {
  const shade = e.currentTarget.parentNode.querySelector('.shade');
  shade.style.background = '#ffffff';
  const pic = e.currentTarget;
  pic.style.color = 'black';
};

const mouseOutHandler = (e) => {
  const shade = e.currentTarget.parentNode.querySelector('.shade');
  shade.style.background = 'linear-gradient(to right, black, transparent)'; // Set there background color as it was before
  const pic = e.currentTarget;
  pic.style.color = 'white';
};

pics.forEach((pic) => {
  pic.addEventListener('mouseover', mouseOverHandler);
  pic.addEventListener('mouseout', mouseOutHandler);
});
 




