// Groomz MVP - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Поиск при нажатии кнопки
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `salons.html?search=${encodeURIComponent(query)}`;
            }
        });
    }
    
    // Поиск при Enter
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
    
    console.log('Groomz MVP инициализирован');
});
