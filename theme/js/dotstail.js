'use strict';

var $ = {
    setDot: function ( options ) {
        var myArray = [];
        var sort = ['element', 'letter', 'line-height'];
        sort.forEach(el => {
            myArray.push( options[el] );
        });

        var myObject = checkError.apply(myObject, myArray);
    }
}

function checkError( pr_element, pr_letter, pr_line_height ) {
    var getElement = document.querySelectorAll(pr_element);
    getElement = [].slice.call(getElement)

    if ( pr_element === undefined ) {
        return console.log("%c'Thank you for useing dotstail. Please, insert property for element selector element: 'element here'", 'background: #f16d99; color: #fff');
    }
    if ( pr_element.slice(0,1) != '.' && pr_element.slice(0,1) != '#' ) {
        return console.log("%c'Thank you for useing dotstail. Please, insert property for element selector element: '.' or '#'", 'background: #f16d99; color: #fff');
    }

    if ( pr_letter != undefined && typeof(pr_letter) === 'string' ) {
        return console.log("%c'Thank you for useing dotstail. Please, insert property for element selector letter: 'number here'", 'background: #f16d99; color: #fff');
    }
    if ( pr_letter === undefined ) {
        getElement.forEach( el => {
            pr_letter = el.textContent.length;
        });
    }

    if ( pr_line_height != undefined && typeof(pr_line_height) === 'string' ) {
        return console.log("%c'Thank you for useing dotstail. Please, insert property for element selector line-height: 'number here'", 'background: #f16d99; color: #fff');
    }
    if ( pr_line_height === undefined || pr_line_height === 0 ) {
        getElement.forEach( el => {
            pr_line_height = parseFloat(el.offsetHeight);
        });
    }
    var myArray = [pr_element, pr_letter, pr_line_height]
    console.log(myArray);
    var myObject = addDot.apply(myObject, myArray);
}

function addDot ( pr_element, pr_letter, pr_line_height ) {
    var getElement = document.querySelectorAll(pr_element);
    getElement = [].slice.call(getElement)

    var maxHeight; // set maxHeight
    getElement.forEach( el => {
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