'use strict';

function setDot (pr_letter, pr_line_height) {
    var set_element = document.querySelectorAll('.item-name');
    set_element = [].slice.call(set_element);

    var maxHeight; // set maxHeight
    set_element.forEach( el => {
        maxHeight = parseFloat(window.getComputedStyle(el).getPropertyValue('line-height')) * pr_line_height;
        var text = el.textContent;
        text = text.trim();

        for (var i = 0; i < text.length; i++) {
            el.textContent = text.slice(0, [i])+'...';
            var height = parseFloat(el.offsetHeight);
            if (height > maxHeight) {
                return el.textContent = text.slice(0, [i] - 3 - pr_letter)+'...';
            }
        }

    });
}