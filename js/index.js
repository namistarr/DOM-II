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
const paragraph = document.querySelector('p')
paragraph.addEventListener('click', (event) => {
    event.target.style.color = 'red'
 });

// 6: Makes links unclickable and hover turns hot pink, mouseleave not working
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (item) {
    linkHover(item);
    item.addEventListener('click', (event) => {
      event.preventDefault();
      alert("You can't click meeee!!"); 
    });
  });
  function linkHover(item) {
    item.addEventListener('mouseenter', (event) => {
      item.style.color = 'hotpink';
    });
  
     item.addEventListener('mouseleave', (event) => {
      item.style.color = black;
    });
  }
// 7: Right click to change background color to hotpink
const container = document.querySelector('.home'); 
    container.addEventListener('contextmenu', (event) => {
        event.target.style.backgroundColor = 'hotpink';
});

// 8: Dragging funbus makes it 1.1x it's size
const funBus = document.querySelector('.intro');
    funBus.addEventListener('drag', (event) => event.target.style.transform = 'scale(1.1)');
// 9:

// 10: