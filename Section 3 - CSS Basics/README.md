# Section 3 - CSS Basics
``` css
body {
  background-color: lightblue;
}

#id {
  color: white;
  text-align: center;
}

.class {
  font-family: verdana;
  font-size: 20px;
}
```

## [Three Ways to Insert CSS](https://www.w3schools.com/css/css_howto.asp)

There are three ways of inserting a style sheet:

- External CSS
- Internal CSS
- Inline CSS

### **External CSS**
With an external style sheet, you can change the look of an entire website by changing just one file!

Each HTML page must include a reference to the external style sheet file inside the `<link>` element, inside the head section.

``` html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

### **Internal CSS**
An internal style sheet may be used if one single HTML page has a unique style.

The internal style is defined inside the `<style>` element, inside the head section.

``` html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

### **Inline CSS**
An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

``` html
<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>
```

### **What style will be used when there is more than one style specified for an HTML element?**
All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default

So, an **inline style has the highest priority, and will override external and internal styles and browser defaults.**

## [CSS Selectors](https://www.w3schools.com/css/css_selectors.asp)
CSS selectors are used to "find" (or select) the HTML elements you want to style.

We can divide CSS selectors into five categories:

- Simple selectors (select elements based on name, id, class)
- Combinator selectors (select elements based on a specific relationship between them)
- Pseudo-class selectors (select elements based on a certain state)
- Pseudo-elements selectors (select and style a part of an element)
- Attribute selectors (select elements based on an attribute or attribute value)

``` css
/* Here, all <p> elements on the page will be center-aligned, with a red text color: */
p {
  text-align: center;
  color: red;
}

/* The CSS rule below will be applied to the HTML element with id="para1": */
#para1 {
  text-align: center;
  color: red;
}

/* In this example all HTML elements with class="center" will be red and center-aligned: */
.center {
  text-align: center;
  color: red;
}

/* In this example only <p> elements with class="center" will be red and center-aligned: */
p.center {
  text-align: center;
  color: red;
}

/* The CSS rule below will affect every HTML element on the page: */
* {
  text-align: center;
  color: blue;
}

/* The grouping selector selects all the HTML elements with the same style definitions.

Look at the following CSS code (the h1, h2, and p elements have the same style definitions): */
h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}

    /* In this example we have grouped the selectors from the code above: */
    h1, h2, p {
      text-align: center;
      color: red;
    }
```

## [CSS Comments](https://www.w3schools.com/css/css_comments.asp)
Comments are used to explain the code, and may help when you edit the source code at a later date.

Comments are ignored by browsers.

A CSS comment is placed inside the `<style>` element, and starts with /* and ends with */:

``` css
/* This is a single-line comment */
p {
  color: red;
}
```

## [CSS Fonts](https://www.w3schools.com/css/css_font.asp)
Choosing the right font has a huge impact on how the readers experience a website.

The right font can create a strong identity for your brand.

Using a font that is easy to read is important. The font adds value to your text. It is also important to choose the correct color and text size for the font.

In CSS there are five generic font families:

1. **Serif** fonts have a small stroke at the edges of each letter. They create a sense of formality and elegance.
2. **Sans-serif** fonts have clean lines (no small strokes attached). They create a modern and minimalistic look.
3.  **Monospace** fonts - here all the letters have the same fixed width. They create a mechanical look. 
4. **Cursive** fonts imitate human handwriting.
5. **Fantasy** fonts are decorative/playful fonts.

![fonts](https://www.w3schools.com/css/serif.gif)

### **The CSS font-family Property**
In CSS, we use the font-family property to specify the font of a text.

**Note**: If the font name is more than one word, it must be in quotation marks, like: "Times New Roman".

**Tip**: The font-family property should hold several font names as a "fallback" system, to ensure maximum compatibility between browsers/operating systems. Start with the font you want, and end with a generic family (to let the browser pick a similar font in the generic family, if no other fonts are available). The font names should be separated with comma.

``` css
.p1 {
  font-family: "Times New Roman", Times, serif;
}

.p2 {
  font-family: Arial, Helvetica, sans-serif;
}

.p3 {
  font-family: "Lucida Console", "Courier New", monospace;
}
```

### **CSS Web Safe Fonts**
Web safe fonts are fonts that are universally installed across all browsers and devices.

However, there are no 100% completely web safe fonts. There is always a chance that a font is not found or is not installed properly.

Therefore, it is very important to always use [**Fallback Fonts**](https://www.w3schools.com/css/css_font_fallbacks.asp).

This means that you should add a list of similar "backup fonts" in the font-family property. If the first font does not work, the browser will try the next one, and the next one, and so on. Always end the list with a generic font family name.

``` css
p {
font-family: Tahoma, Verdana, sans-serif;
}
```

The following list are the best web safe fonts for HTML and CSS:

- Arial (sans-serif)
- Verdana (sans-serif)
- Helvetica (sans-serif)
- Tahoma (sans-serif)
- Trebuchet MS (sans-serif)
- Times New Roman (serif)
- Georgia (serif)
- Garamond (serif)
- Courier New (monospace)
- Brush Script MT (cursive)

### **How To Use Google Fonts**
Just add a special style sheet link in the `<head>` section and then refer to the font in the CSS.

``` css
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
<style>
body {
  font-family: "Sofia", sans-serif;
}
</style>
</head>
```

### **More Fonts Properties**
```css
p.style {
  font-style: normal;
  font-style: italic;
  font-style: oblique;
}

p.weight {
  font-weight: normal;
  font-weight: bold;
}

p.variant {
  font-variant: normal;
  font-variant: small-caps;
}

p.size {
  font-size: 40px;
  font-size: 2.5em;
  font-size: 100%;
}
```
## [CSS Colors](https://www.w3schools.com/css/css_colors.asp)
Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.

``` html
<h1 style="background-color:tomato;">...</h1>
<h1 style="background-color:rgb(255, 99, 71);">...</h1>
<h1 style="background-color:#ff6347;">...</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>

<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>
```

## [CSS Backgrounds](https://www.w3schools.com/css/css_background.asp)
The CSS background properties are used to add background effects for elements.

``` css
body {

  /* The background-color property specifies the background color of an element. */
  background-color: lightblue;

  /* The background-image property specifies an image to use as the background of an element. By default, the image is repeated so it covers the entire element. (horizontally and vertically)*/
  background-image: url("paper.gif");

  /* Showing the background image only once is also specified by the background-repeat property: */
  background-repeat: no-repeat;

  /* The background-position property is used to specify the position of the background image. */
  background-position: right top;

  /* The background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page): */
  background-attachment: fixed;
}
```
## [CSS Borders](https://www.w3schools.com/css/css_border.asp)
The CSS border properties allow you to specify the style, width, and color of an element's border.

The `border-style` property specifies what kind of border to display.

The following values are allowed:

- dotted - Defines a dotted border
- dashed - Defines a dashed border
- solid - Defines a solid border
- double - Defines a double border
- groove - Defines a 3D grooved border. The effect depends on the border-color value
- ridge - Defines a 3D ridged border. The effect depends on the border-color value
- inset - Defines a 3D inset border. The effect depends on the border-color value
- outset - Defines a 3D outset border. The effect depends on the border-color value
- none - Defines no border
- hidden - Defines a hidden border

``` css
p {
  border-style: solid;
  border-width: 5px;
  border-color: red;
  border-radius: 5px;

  /* In CSS, there are also properties for specifying each of the borders (top, right, bottom, and left): */
  border-top-style: dotted;
  border-right-style: solid;
  border-bottom-style: dotted;
  border-left-style: solid;

  /* The example above gives the same result as this: */
  border-style: dotted solid;

  /* To shorten the code, it is also possible to specify all the individual border properties in one property. */
  border: 5px solid red;
}
```

## [CSS Height and Width](https://www.w3schools.com/css/css_dimension.asp)
The CSS `height` and `width` properties are used to set the height and width of an element.

The CSS `max-width` property is used to set the maximum width of an element.

The height and width properties may have the following values:

- auto - This is default. The browser calculates the height and width
- length - Defines the height/width in px, cm etc.
- % - Defines the height/width in percent of the containing block
- initial - Sets the height/width to its default value
- inherit - The height/width will be inherited from its parent value
``` css
div {
  height: 100px;
  width: 100px;
  width: 50%;
  max-width: 500px;
  background-color: powderblue;
}
```

## [CSS Margins](https://www.w3schools.com/css/css_margin.asp)
The CSS `margin` properties are used to create space around elements, outside of any defined borders.

**Tip**: Negative values are allowed.

``` css
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;

  margin: 25px 50px 75px 100px;
}
```

## [CSS Padding](https://www.w3schools.com/css/css_padding.asp)
Padding is used to create space around an element's content, inside of any defined borders.

**Note**: Negative values are not allowed.

``` css
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;

  padding: 25px 50px 75px 100px;
}
```
The CSS `width` property specifies the width of the element's content area. The content area is the portion inside the `padding`, `border`, and `margin` of an element (the box model).

So, if an element has a specified `width`, **the `padding` added to that element will be added to the total width of the element**. This is often an undesirable result.

To keep the original `width`, no matter the amount of `padding`, you can use the `box-sizing` property. This causes the element to maintain its actual `width`. if you increase the padding, the available content space will decrease.

``` css
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
```

## [The CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

![box-model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)

**Important**: When you set the `width` and `height` properties of an element with CSS, you just set the `width` and `height` of the content area. To calculate the full size of an element, you must also add `padding`, `borders` and `margins`.

### **The total width of an element should be calculated like this:**

Total element width = width + left padding + right padding + left border + right border + left margin + right margin

### **The total height of an element should be calculated like this:**

Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin

## [CSS Text](https://www.w3schools.com/css/css_text.asp)

CSS has a lot of properties for formatting text.

``` css
h1 {
  /* The color property is used to set the color of the text. */
  color: green;

  /* The text-align property is used to set the horizontal alignment of a text. */
  text-align: right;

  /* When the text-align property is set to "justify", each line is stretched so that every line has equal width, and the left and right margins are straight (like in magazines and newspapers): */
  text-align: justify;

  /* The text-align-last property specifies how to align the last line of a text. */
  text-align-last: center;

  /* The direction and unicode-bidi properties can be used to change the text direction of an element: */
  direction: rtl;
  unicode-bidi: bidi-override;

  /* The vertical-align property sets the vertical alignment of an element. */
  vertical-align: baseline;
  vertical-align: text-top;
  vertical-align: text-bottom;
  vertical-align: sub;
  vertical-align: super;

  /* The text-decoration-line property is used to add a decoration line to text. */
  text-decoration-line: overline;
  text-decoration-line: line-through;
  text-decoration-line: underline;

  /* Tip: Links in HTML are underlined by default. Sometimes you see that links are styled with no underline. The text-decoration: none; is used to remove underlines from links, like this: */
  text-decoration: none;

  /* The text-transform property is used to specify uppercase and lowercase letters in a text. */
  text-transform: uppercase;
  text-transform: lowercase;
  text-transform: capitalize;
}
```
There is also text spacing and shadow properties available.

## [Reset CSS](https://meyerweb.com/eric/tools/css/reset/)
The goal of a reset stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on.

``` css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```
## [CSS Icons](https://www.w3schools.com/css/css_icons.asp)

Icons can easily be added to your HTML page, by using an icon library.

The simplest way to add an icon to your HTML page, is with an icon library, such as Font Awesome.

Add the name of the specified icon class to any inline HTML element (like `<i>` or `<span>`).

All the icons in the icon libraries below, are scalable vectors that can be customized with CSS (size, color, shadow, etc.)

To use the Font Awesome icons, go to fontawesome.com, sign in, and get a code to add in the `<head>` section of your HTML page:

``` html
<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
```

Example:

``` html
<!DOCTYPE html>
<html>
<head>
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>

<i class="fas fa-cloud"></i>
<i class="fas fa-heart"></i>
<i class="fas fa-car"></i>
<i class="fas fa-file"></i>
<i class="fas fa-bars"></i>

</body>
</html>
```

## [Float and Clear](https://www.w3schools.com/css/css_float.asp)

The CSS `float` property specifies how an element should float.

The CSS `clear` property specifies what elements can float beside the cleared element and on which side.

The `float` property is used for positioning and formatting content e.g. let an image float left to the text in a container.

The `float` property can have one of the following values:

- left - The element floats to the left of its container
- right - The element floats to the right of its container
- none - The element does not float (will be displayed just where it occurs in the text). This is default
- inherit - The element inherits the float value of its parent

**When we use the `float` property, and we want the next element below (not on right or left), we will have to use the `clear` property.**

The `clear` property specifies what should happen with the element that is next to a floating element.

The `clear` property can have one of the following values:

- none - The element is not pushed below left or right floated elements. This is default
- left - The element is pushed below left floated elements
- right - The element is pushed below right floated elements
- both - The element is pushed below both left and right floated elements
- inherit - The element inherits the clear value from its parent

**When clearing floats, you should match the clear to the float**: If an element is floated to the left, then you should clear to the left. Your floated element will continue to float, but the cleared element will appear below it on the web page.

``` css
div1 {
  float: left;
}

div2 {
  clear: left;
}
```

### **The clearfix Hack**
If a floated element is taller than the containing element, it will "overflow" outside of its container. We can then add a clearfix hack to solve this problem:

``` css
.clearfix {
  overflow: auto;
}
```

Without clearfix:

![without clearfix](https://www.w3schools.com/howto/clearfix_prob.jpg)

With clearfix:

![without clearfix](https://www.w3schools.com/howto/clearfix_solution.jpg)

## [CSS Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)
A pseudo-class is used to define a special state of an element.

For example, it can be used to:

- Style an element when a user mouses over it
- Style visited and unvisited links differently
- Style an element when it gets focus

``` css
/* The syntax of pseudo-classes */
selector:pseudo-class {
  property: value;
}

/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}
```

## [CSS cursor Property](https://www.w3schools.com/cssref/pr_class_cursor.asp)

The `cursor` property specifies the mouse cursor to be displayed when pointing over an element.

``` css
.alias {cursor: alias;}
.all-scroll {cursor: all-scroll;}
.auto {cursor: auto;}
.cell {cursor: cell;}
.context-menu {cursor: context-menu;}
.col-resize {cursor: col-resize;}
.copy {cursor: copy;}
.crosshair {cursor: crosshair;}
.default {cursor: default;}
.e-resize {cursor: e-resize;}
.ew-resize {cursor: ew-resize;}
.grab {cursor: grab;}
.grabbing {cursor: grabbing;}
.help {cursor: help;}
.move {cursor: move;}
.n-resize {cursor: n-resize;}
.ne-resize {cursor: ne-resize;}
.nesw-resize {cursor: nesw-resize;}
.ns-resize {cursor: ns-resize;}
.nw-resize {cursor: nw-resize;}
.nwse-resize {cursor: nwse-resize;}
.no-drop {cursor: no-drop;}
.none {cursor: none;}
.not-allowed {cursor: not-allowed;}
.pointer {cursor: pointer;}
.progress {cursor: progress;}
.row-resize {cursor: row-resize;}
.s-resize {cursor: s-resize;}
.se-resize {cursor: se-resize;}
.sw-resize {cursor: sw-resize;}
.text {cursor: text;}
.url {cursor: url(myBall.cur),auto;}
.w-resize {cursor: w-resize;}
.wait {cursor: wait;}
.zoom-in {cursor: zoom-in;}
.zoom-out {cursor: zoom-out;}
```

## [HTML Lists and CSS list Properties](https://www.w3schools.com/css/css_list.asp)
In HTML, there are two main types of lists:

- unordered lists `(<ul>)` - the list items are marked with bullets
- ordered lists `(<ol>)` - the list items are marked with numbers or letters


The CSS list properties allow you to:

- Set different list item markers for ordered lists
- Set different list item markers for unordered lists
- Set an image as the list item marker
- Add background colors to lists and list items

``` css
ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}
```

## [The display Property](https://www.w3schools.com/css/css_display_visibility.asp)

The `display` property is the most important CSS property for controlling layout.

Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is `block` or `inline`.

A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

Examples of block-level elements:

``` html
<div>
<h1> - <h6>
<p>
<form>
<header>
<footer>
<section>
```

An inline element does not start on a new line and only takes up as much width as necessary.

Examples of inline elements:

``` html
<span>
<a>
<img>
```

``` css
span {
  display: block;
  display: inline;
  display: none;

  /* visibility: hidden; also hides an element.

However, the element will still take up the same space as before. The element will be hidden, but still affect the layout */
  visibility: hidden;
}
```
### [**The display: inline-block Value**](https://www.w3schools.com/css/css_inline-block.asp)
Compared to `display: inline`, the major difference is that `display: inline-block` allows to set a width and height on the element.

Also, with `display: inline-block`, the top and bottom margins/paddings are respected, but with `display: inline` they are not.

Compared to `display: block`, the major difference is that `display: inline-block` does not add a line-break after the element, so the element can sit next to other elements.

``` css
.nav {
  background-color: yellow;
  list-style-type: none;
  text-align: center; 
  padding: 0;
  margin: 0;
}

.nav li {
  display: inline-block;
  font-size: 20px;
  padding: 20px;
}
```

## [The position Property](https://www.w3schools.com/css/css_positioning.asp)

The `position` property specifies the type of positioning method used for an element.

There are five different `position` values:

``` css
div {
  /* HTML elements are positioned static by default.

Static positioned elements are not affected by the top, bottom, left, and right properties.

An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page */
  position: static;

  /* An element with position: relative; is positioned relative to its normal position.

Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element. */
  position: relative;

  /* An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located. */
  position: fixed;

  /* An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

Note: Absolute positioned elements are removed from the normal flow, and can overlap elements. */
  position: absolute;

  /* An element with position: sticky; is positioned based on the user's scroll position.

A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed). */
  position: sticky;
}
```

## [The !important Rule](https://www.w3schools.com/css/css_important.asp)
The `!important` rule in CSS is used to add more importance to a property/value than normal.

In fact, if you use the `!important` rule, it will override ALL previous styling rules for that specific property on that element!

``` css
/* In the example above. all three paragraphs will get a red background color, even though the ID selector and the class selector has a higher specificity. The !important rule overrides the background-color property in both cases. */

#myid {
  background-color: blue;
}

.myclass {
  background-color: gray;
}

p {
  background-color: red !important;
}
```

## Notes
- If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used.
- "user agent stylesheet" is the browser styling we see in chrome
- If you do not specify a font size, the default size for normal text, like paragraphs, is 16px (16px=1em).
- Recommended background colors:
  - #333 - dark background
  - #f4f4f4 light background
- Recommended color websites:
  - https://htmlcolorcodes.com/
  - https://www.color-hex.com/
- Class selector is stronger then element selector.

## VSCODE EMMET TRICKS
- `#box-1.box` return div with id 'box-1' and class 'box'.
- `margin: auto` + `width: x` = centered div (add `max-width` for responsive design)