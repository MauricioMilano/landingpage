document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Testimonial carousel functionality
    const carouselContainer = document.querySelector('#testimonials .carousel-container');
    const testimonialItems = document.querySelectorAll('#testimonials .testimonial-item');
    const prevBtn = document.querySelector('#testimonials .prev-btn');
    const nextBtn = document.querySelector('#testimonials .next-btn');

    let currentIndex = 0;

    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            item.style.transform = `translateX(${-100 * index}%)`;
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
        showTestimonial(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonialItems.length;
        showTestimonial(currentIndex);
    });

    // Initial display
    showTestimonial(currentIndex);

    // Automatic carousel movement
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonialItems.length;
        showTestimonial(currentIndex);
    }, 5000); // Change testimonial every 5 seconds (5000ms)
});
