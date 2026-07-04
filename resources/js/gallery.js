// Photo galleries on the lifestyle page. The slide set is cloned once so the
// strip can loop seamlessly: scrolling past the last photo continues into the
// first, and the scroll position is silently teleported back by one set width
// whenever it comes to rest in the cloned half (the two halves render
// identically, so the jump is invisible).
(function () {
    'use strict';

    document.querySelectorAll('.gallery').forEach(function (gallery) {
        var track = gallery.querySelector('.gallery-track');
        var slides = track
            ? Array.prototype.slice.call(
                  track.querySelectorAll('.gallery-slide')
              )
            : [];
        if (slides.length < 2) {
            return;
        }

        slides.forEach(function (slide) {
            var clone = slide.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        });

        function step() {
            var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
            return slides[0].getBoundingClientRect().width + gap;
        }

        function setWidth() {
            return step() * slides.length;
        }

        function normalize() {
            // 1px tolerance: fractional slide widths leave sub-pixel drift.
            if (track.scrollLeft >= setWidth() - 1) {
                track.scrollLeft -= setWidth();
            }
        }

        var settle;
        track.addEventListener(
            'scroll',
            function () {
                clearTimeout(settle);
                settle = setTimeout(normalize, 150);
            },
            { passive: true }
        );

        gallery
            .querySelector('.gallery-prev')
            .addEventListener('click', function () {
                normalize();
                if (track.scrollLeft < step()) {
                    track.scrollLeft += setWidth();
                }
                track.scrollTo({
                    left: track.scrollLeft - step(),
                    behavior: 'smooth',
                });
            });

        gallery
            .querySelector('.gallery-next')
            .addEventListener('click', function () {
                normalize();
                track.scrollTo({
                    left: track.scrollLeft + step(),
                    behavior: 'smooth',
                });
            });

        // Nav stays hidden unless the script runs, so the buttons are never
        // dead; without JS the track is still a scrollable strip.
        gallery.classList.add('is-ready');
    });
})();
