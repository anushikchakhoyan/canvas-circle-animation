'use strict';

(function () {
    let theToggle = document.getElementById('toggle');

    theToggle.addEventListener('click', () => {
        let list = document.getElementById('data-info');

        if (list.style.display === 'flex') {
            list.style.display = 'none';
        } else  {
            list.style.display = 'flex';
        }
    });
}());
