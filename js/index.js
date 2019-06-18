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


// 3:
const grayScale = document.querySelector('.img-content')
grayScale.addEventListener('mouseover', event => {
    grayScale.style.filter = 'grayscale(1)';    
  });


// 4:

// 5:

// 6:

// 7:

// 8:

// 9:

// 10: