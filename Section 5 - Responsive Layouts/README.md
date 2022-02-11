# Responsive
external css (media query)
em rem vh vw

## [CSS Units](https://www.w3schools.com/css/css_units.asp)

CSS has several different units for expressing a length.

Many CSS properties take "length" values, such as `width`, `margin`, `padding`, `font-size`, etc.

Length is a number followed by a length unit, such as 10px, 2em, etc.

There are two types of length units: absolute and relative.

### **Absolute Lengths**

The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.

Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout.

**cm** - centimeters

**mm** - millimeters

**in** - inches (1in = 96px = 2.54cm)

**px** * - pixels (1px = 1/96th of 1in)

**pt** - points (1pt = 1/72 of 1in)

**pc** - picas (1pc = 12 pt)

### **Relative Lengths**

Relative length units specify a length relative to another length property. Relative length units scales better between different rendering mediums.

**em** - Relative to the font-size of the element (2em means 2 times the size of the current font)	

**ex** - Relative to the x-height of the current font (rarely used)	

**ch** - Relative to width of the "0" (zero)	

**rem** - Relative to font-size of the root element	

**vw** - Relative to 1% of the width of the viewport*	

**vh** - Relative to 1% of the height of the viewport*	

**vmin** - Relative to 1% of viewport's* smaller dimension	

**vmax** - Relative to 1% of viewport's* larger dimension	

**%** - Relative to the parent element

## [Responsive Web Design](https://www.w3schools.com/css/css_rwd_intro.asp)

Responsive web design makes your web page look good on all devices.

Responsive web design uses only HTML and CSS.

Responsive web design is not a program or a JavaScript.

### **What is The Viewport?**

The viewport is the user's visible area of a web page.

The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.

Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen.

This was not perfect!! But a quick fix.

HTML5 introduced a method to let web designers take control over the viewport, through the `<meta>` tag.

You should include the following `<meta>` viewport element in all your web pages:

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This gives the browser instructions on how to control the page's dimensions and scaling.

The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The `initial-scale=1.0` part sets the initial zoom level when the page is first loaded by the browser.

Without the viewport meta tag:

![withoutmeta](https://www.w3schools.com/css/img_viewport1.png)

With the viewport meta tag:

![withmeta](https://www.w3schools.com/css/img_viewport2.png)

### **What is a Media Query?**
