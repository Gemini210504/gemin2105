function showTab(tabName) {
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function rate(bookId, rating) {
    var stars = document.querySelectorAll(`#${bookId} .star`);
    stars.forEach(function(star, index) {
        if (index < rating) {
            star.style.color = 'gold';
        } else {
            star.style.color = 'gray';
        }
    });
}
