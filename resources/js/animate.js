

document.getElementById('button_dang_nhap_start').addEventListener('click', () => {
    toggleContent(content_start, content_dang_nhap);
});
document.getElementById('button_dang_ki_start').addEventListener('click', () => {
    toggleContent(content_start,content_dang_ki);
});

function toggleContent(content_hidden, content_visible) {
    content_hidden.classList.remove('visible');
    content_hidden.classList.add('hidden');
    content_visible.classList.remove('hidden');
    content_visible.classList.add('visible');
}
