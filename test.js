const buttons = document.querySelectorAll('button[data-target]');
const contents = document.querySelectorAll('div[id^="content"]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target'); // Lấy giá trị data-target
        contents.forEach(content => {
            if (content.id === targetId) {
                content.classList.remove('hidden');
                content.classList.add('visible');
            } else {
                content.classList.remove('visible');
                content.classList.add('hidden');
            }
        });
    });
});