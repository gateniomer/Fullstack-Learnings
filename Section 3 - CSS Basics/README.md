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

## Notes
- If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used.
- "user agent stylesheet" is the browser styling we see in chrome