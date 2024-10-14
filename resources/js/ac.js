document.getElementById('button_dang_nhap_start').addEventListener('click', () => {
    dang_nhap();
});
document.getElementById('button_dang_ki_start').addEventListener('click', () => {
    dang_ki();
});

function dang_nhap() {
    window.location.href = "dang_nhap.html";
}
function dang_ki() {
    window.location.href = "dang_ki.html";
}

