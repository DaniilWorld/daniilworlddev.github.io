document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menuContainer = document.querySelector('.menu-container');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        menuContainer.classList.toggle('active');
    });

    // Закрываем меню при клике вне его
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.header_continer')) {
            burgerMenu.classList.remove('active');
            menuContainer.classList.remove('active');
        }
    });
}); 