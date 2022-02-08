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

## Notes
- If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. 