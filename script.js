// Envelope interaction
document.addEventListener("DOMContentLoaded", () => {
    createHearts();

    const envelope = document.getElementById('envelope');
    const flowerBtn = document.getElementById("flowerBtn");

    // Auto-open the envelope after 2 seconds
    setTimeout(() => {
        envelope.classList.add('open');
    }, 2000);

    envelope.addEventListener('click', function () {
        this.classList.toggle('open');
    });

    flowerBtn.addEventListener("click", () => {
        window.location.href = "flower.html";
    });
});


function createHearts() {
    const heartsContainer = document.getElementById('hearts');

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-shape');

        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
    createHearts();

    const flowerBtn = document.getElementById("flowerBtn");
    flowerBtn.addEventListener("click", () => {
        window.location.href = "flower.html";
    });
});