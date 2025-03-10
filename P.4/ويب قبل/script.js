function showImage(service) {
    // إخفاء جميع الصور
    const images = document.querySelectorAll('.service-image');
    images.forEach(image => {
        image.style.display = 'none';
    });

    // إظهار الصورة الخاصة بالخدمة المحددة
    const selectedImage = document.getElementById(service + '-image');
    if (selectedImage) {
        selectedImage.style.display = 'block';
    }
}<a href="tel:+962796748067" class="cta-button">تواصل معنا</a>
