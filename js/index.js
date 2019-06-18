// Your code goes here

// 1: Message when page loads
window.addEventListener('load', function(event) {
    alert('Hi!');
});

// 2: Double click on images to make them disappear
const imgDelete = document.querySelector('.img-content');

imgDelete.addEventListener('dblclick', event => {
   imgDelete.style.display = 'none';
});


// 3: Makes images black and white on mouseover
const grayScale = document.querySelector('.img-content')
grayScale.addEventListener('mouseover', event => {
    grayScale.style.filter = 'grayscale(1)';    
  });

  
    // grayScale.addEventListener("mouseenter", event => {
    //     grayScale.style.filter = 'grayscale(1)';
    // });
  
    //  item.addEventListener("mouseleave", event => {
    //     grayScale.style.filter = 'grayscale(0)';
    // });
  

// 4: Gets mad when you scroll too much
let counter = 0;
window.addEventListener("scroll", (event) => {
        counter++;
    if (counter > 150) {
        alert("Stop moving!!"); 
        counter = 0; 
    }
});

// 5: Turns paragraph text red
let paragraph = document.querySelector('p')
paragraph.addEventListener('click', (event) => {
    event.target.style.color = 'red'
 });

// 6: Makes links unclickable and hover turns hot pink
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (item) {
    linkHover(item);
    item.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
  function linkHover(item) {
    item.addEventListener("mouseenter", (event) => {
      item.style.color = "hotpink";
    });
  
     item.addEventListener("mouseleave", (event) => {
      item.style.color = black;
    });
  }
// 7:

// 8:

// 9:

// 10: