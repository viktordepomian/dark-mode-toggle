const btn = document.querySelector('.toggle-mode');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});