document.addEventListener("DOMContentLoaded", function () {
    const background = document.getElementById("background");
    const images = ["mountain1.jpg", "mountain2.jpg", "mountain3.jpg"];
    let index = 0;

    function changeBackground() {
        background.style.backgroundImage = `url(${images[index]})`;
        // Save the current background index and timer state to localStorage
        localStorage.setItem("backgroundIndex", index);
        localStorage.setItem("timerState", Date.now());
        index = (index + 1) % images.length;
    }

    // Load the background index and timer state from localStorage
    const savedIndex = localStorage.getItem("backgroundIndex");
    const savedTimerState = localStorage.getItem("timerState");
    
    if (savedIndex !== null) {
        index = parseInt(savedIndex);
    }

    // Calculate the time elapsed since the last background change
    const elapsedTime = savedTimerState ? Date.now() - parseInt(savedTimerState) : 0;

    // Initial background change with adjusted timer
    changeBackground();

    // Change background every 5 minutes (300,000 milliseconds) minus elapsed time
    setInterval(function () {
        changeBackground();
        // Add logic here to update content if needed
    }, 40000 - elapsedTime);
});
