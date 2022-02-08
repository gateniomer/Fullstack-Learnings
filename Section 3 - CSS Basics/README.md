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