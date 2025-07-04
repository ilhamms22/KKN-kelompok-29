document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Slideshow Functionality (hanya berlaku jika elemen ada di halaman)
    function initializeSlideshow() {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide .slide');
        if (slides.length === 0) return; // Keluar jika tidak ada slide

        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        showSlide(0); // Tampilkan slide pertama saat inisialisasi
        setInterval(() => showSlide(currentSlide + 1), 5000);
    }
    
    // Profile Dropdown Toggle (untuk desktop navbar)
    const profileDropdownToggle = document.getElementById('profile-dropdown-toggle');
    const profileDropdownMenu = document.getElementById('profile-dropdown-menu');
    if (profileDropdownToggle && profileDropdownMenu) {
        profileDropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            profileDropdownMenu.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!profileDropdownToggle.contains(event.target) && !profileDropdownMenu.contains(event.target)) {
                profileDropdownMenu.classList.add('hidden');
            }
        });
    }

    // Initialize features based on the current page
    // Inisialisasi Slideshow di halaman Home
    if (document.querySelector('.hero-slide')) {
        initializeSlideshow();
    }
});