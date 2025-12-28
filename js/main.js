// Основной JavaScript файл
console.log('Groomz MVP инициализирован');

// Пример: поиск при нажатии Enter
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[placeholder*="Поиск"]');
    const searchButton = document.querySelector('.btn-danger');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value;
            if (query) {
                window.location.href = `salons.html?search=${query}`;
            }
        });
    }
});
