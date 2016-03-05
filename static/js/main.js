var nav = document.querySelectorAll('.main nav a');
for (var num in nav) {
    try {
        var link = nav[num];
        if (link.getAttribute('href') == window.location.pathname) {
            link.classList.add('current');
        } else {
            link.classList.toggle('current', false);
        }
    } catch (e) {
        
    }
}
disTime(0);
