console.log('Succes Load External JS');

// Function to validate the form
function validateForm() {
    let nameInput = document.getElementById('name-input');

    // Validation condition
    if (nameInput.value === '') {
        alert('Name must be filled out');
    } else {
        alert('Welcome' + nameInput.value);
    }
}

// Variables for the slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

// Function to show the slide at the given index
function showSlide(index) {
    const slider = document.querySelector('.slides');
    slider.style.transform = `translateX(-${index * 100 / totalSlides}%)`;
}

// Function to show the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Function to show the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Automatically change the slide every 5 seconds
setInterval(nextSlide, 5000);

// Event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Event listener for the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Check if all fields are filled
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interest = document.getElementById('interest').value;
        
        if (name && email && interest) {
            // Display the pop-up message
            alert('Data Berhasil Dikirim');
            
            // Optionally, you can reset the form
            form.reset();
        } else {
            alert('Please fill in all fields');
        }
    });
});