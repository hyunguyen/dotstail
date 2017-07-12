# dotstail

![enter image description here](http://i.imgur.com/Lhvjbuo.png)

## Quick start
* Clone the repo: `git clone git@github.com:foxieboy/dotstail.git`
* Install with npm: `npm install --save-dev foxieboy/dotstail`
* Or download the [latest release] (https://github.com//foxieboy/dotstail/archive/master.zip)

## How to use
In other to use dotstail:
1. The element you want to have a text elipsis effect must have a CSS `line-height property` (must be a `em` unit).
2. In your script file, set dotstail function for the element:

`dotstail.setDot ({
    'element': '*your element class or id here*',
    'letter': 0, 
    'lines': 4,
});`
* Please keep in mind: `letter`, and `line` option are optional, use them if you want to. Also those options must be a `number`, not `string`.

## Call the function
Call the function by `dotstail.setDot ();`

## Demo
*https://foxieboy.github.io/dotstail/

## Documentation
* `element`: is your element class/Id
* `letter`: is the number of letter you want to cut out at the end of the last line.
* `line`: is the number of line you want your element to have a `text elipsis` effect.


## Template full feature list

* Semantically Correct / Valid HTML Code
* HTML5, CSS3
* Javascript / JS6
* Full project and seed project (build with: Gulp, Sass, Javascript, Npm)
* Cross browser compatible ( Internet Explorer 10+, Firefox, Safari, Opera, Chrome etc. )
* W3C Valid source code, properly formatted and commented

## Creators

#### Foxieboy
* Github:   https://github.com/foxieboy/dotstail & https://github.com/crazychicken


## Copyright and license

Code and documentation copyright 2017, MIT license.
