'us strict';
var dotstail = {
    setDot: function ( options ) {
        window.addEventListener('load', function() {
            var myArray = [];
            var sort = ['element', 'letter', 'lines', 'resize'];
            sort.forEach(el => {
                myArray.push( options[el] );
            });
            var myObject = checkError.apply(myObject, myArray);
            // check error value include
            function checkError ( pr_element, pr_letter, pr_lines, pr_resize ) {
                var getElement = document.querySelectorAll(pr_element);
                getElement = [].slice.call(getElement)

                var text_data;
                getElement.forEach( el => {
                    text_data = el.textContent;
                    text_data = text_data.trim();
                });

                if ( text_data === "" ) {
                    text_data = "."
                }

                if ( pr_element === undefined ) {
                    return console.log("%c'Thank you for using dotstail. Please, insert property for element selector element: 'element here'", 'background: #f16d99; color: #fff');
                }
                if ( pr_element.slice(0,1) != '.' && pr_element.slice(0,1) != '#' ) {
                    return console.log("%c'Thank you for using dotstail. Please, insert property for element selector element: '.' or '#'", 'background: #f16d99; color: #fff');
                }

                if ( pr_letter != undefined && typeof(pr_letter) === 'string' ) {
                    return console.log("%c'Thank you for using dotstail. Please, letter property must be a number", 'background: #f16d99; color: #fff');
                }
                if ( pr_letter === undefined ) {
                    getElement.forEach( el => {
                        pr_letter = 0;
                    });
                }

                if ( pr_lines != undefined && typeof(pr_lines) === 'string' ) {
                    return console.log("%c'Thank you for using dotstail. Please, lines property must be a number", 'background: #f16d99; color: #fff');
                }
                if ( pr_lines === undefined || pr_lines === 0 ) {
                    getElement.forEach( el => {
                        pr_lines = parseFloat(el.offsetHeight);
                    });
                }

                var myArray = [pr_element, pr_letter, pr_lines, text_data]
                var myObject = addDot.apply(myObject, myArray);

                function resizeDot() {
                    addDot(pr_element, pr_letter, pr_lines, text_data);
                }
                if ( pr_resize != undefined && typeof(pr_resize) != "boolean" ) {
                    return console.log("%c'Thank you for using dotstail. Please, insert property for element selector resize: 'boolean (true, flase)'", 'background: #f16d99; color: #fff');
                }
                // undefined -> default true
                if ( pr_resize === undefined || pr_resize === true ) {
                    window.addEventListener('resize', resizeDot);
                }
            }

            function addDot (pr_element, pr_letter, pr_lines) {
                var getElement = document.querySelectorAll(pr_element);
                getElement = [].slice.call(getElement);
                var maxHeight; // set maxHeight

                getElement.forEach( el => {
                    var text_data;
                    text_data = el.textContent.trim();
                    maxHeight = parseFloat(window.getComputedStyle(el).getPropertyValue('line-height')) * pr_lines;
                    for (var i = 0; i < text_data.length + 1; i++) {
                        el.textContent = text_data.slice(0, [i]);
                        var height = parseFloat(el.offsetHeight);
                        var width = parseFloat(el.offsetWidth);


                        if (height > maxHeight) {
                            return el.textContent = text_data.slice(0, [i] - 4 - pr_letter)+'...';
                        }
                    }
                });
            }
        },true);
    }
}
