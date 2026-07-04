// Mobile hamburger menu for the shared site nav. The `js` class on <html>
// gates the CSS that collapses the nav behind the hamburger, so visitors
// without JavaScript keep a plain wrapped row of links.
(function () {
    'use strict';

    document.documentElement.classList.add('js');

    var nav = document.querySelector('header nav');
    var toggle = nav ? nav.querySelector('.nav-toggle') : null;
    if (!toggle) {
        return;
    }

    toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
})();
