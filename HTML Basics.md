# Section 2 - HTML Basics
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>

</body>
</html>
```

## [HTML Elements](https://www.w3schools.com/html/html_elements.asp)
An HTML element is defined by a start tag, some content, and an end tag.

The HTML element is everything from the start tag to the end tag:

`<tagname>`Content goes here...`</tagname>`

## [HTML Attributes](https://www.w3schools.com/html/html_attributes.asp)
HTML attributes provide additional information about HTML elements.

All HTML elements can have attributes.
Attributes provide additional information about elements.
Attributes are always specified in the start tag
and usually come in name/value pairs like: name="value".

- All HTML elements can have attributes
- The href attribute of `<a>` specifies the URL of the page the link goes to
- The src attribute of `<img>` specifies the path to the image to be displayed
- The width and height attributes of `<img>` provide size information for images
- The alt attribute of `<img>` provides an alternate text for an image
- The style attribute is used to add styles to an element, such as color, font, size, and more
- The lang attribute of the `<html>` tag declares the language of the Web page
- The title attribute defines some extra information about an element


## [HTML Tags](https://www.w3schools.com/tags/default.asp)

### [`<!DOCTYPE>`](https://www.w3schools.com/tags/tag_doctype.asp)
All HTML documents must start with a `<!DOCTYPE>` declaration.

The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.

In HTML 5, the declaration is simple: `<!DOCTYPE html>`

In older documents (HTML 4 or XHTML), the declaration is more complicated because the declaration must refer to a DTD (Document Type Definition).

### [`<html>`](https://www.w3schools.com/tags/tag_html.asp)
The `<html>` tag represents the root of an HTML document.

The `<html>` tag is the container for all other HTML elements (except for the <!DOCTYPE> tag).

Note: You should always include the lang attribute inside the `<html>` tag, to declare the language of the Web page. This is meant to assist search engines and browsers.

### [`<head>`](https://www.w3schools.com/tags/tag_head.asp)
The `<head>` element is a container for metadata (data about data) and is placed between the `<html>` tag and the `<body>` tag.

Metadata is data about the HTML document. Metadata is not displayed.

Metadata typically define the document title, character set, styles, scripts, and other meta information.

The following elements can go inside the `<head>` element:

``` html
<title> (required in every HTML document)
<style>
<base>
<link>
<meta>
<script>
<noscript>
```

### [`<title>`](https://www.w3schools.com/tags/tag_title.asp)
The `<title>` tag defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.

The `<title>` tag is required in HTML documents!

The contents of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.

The `<title>` element:

defines a title in the browser toolbar
provides a title for the page when it is added to favorites
displays a title for the page in search-engine results
Here are some tips for creating good titles:

Go for a longer, descriptive title (avoid one- or two-word titles)
Search engines will display about 50-60 characters of the title, so try not to have titles longer than that
Do not use just a list of words as the title (this may reduce the page's position in search results)
So, try to make the title as accurate and meaningful as possible!

Note: You can NOT have more than one `<title>` element in an HTML document.

### [`<meta>`](https://www.w3schools.com/tags/tag_meta.asp)
The `<meta>` tag defines metadata about an HTML document. Metadata is data (information) about data.

`<meta>` tags always go inside the `<head>` element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.

Metadata will not be displayed on the page, but is machine parsable.

Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.

Define keywords for search engines:

`<meta name="keywords" content="HTML, CSS, JavaScript">`

Define a description of your web page:

`<meta name="description" content="Free Web tutorials for HTML and CSS">`

Define the author of a page:

`<meta name="author" content="John Doe">`

Refresh document every 30 seconds:

`<meta http-equiv="refresh" content="30">`

Setting the viewport to make your website look good on all devices:

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

``` html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

### [`<body>`](https://www.w3schools.com/tags/tag_body.asp)
The `<body>` tag defines the document's body.

The `<body>` element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

Note: There can only be one `<body>` element in an HTML document.

### [`<h1> to <h6>`](https://www.w3schools.com/tags/tag_hn.asp)
The `<h1>` to `<h6>` tags are used to define HTML headings.

`<h1>` defines the most important heading. `<h6>` defines the least important heading.

Note: Only use one `<h1>` per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with `<h1>`, then use `<h2>`, and so on.

### [`<p>`](https://www.w3schools.com/tags/tag_p.asp)
The `<p>` tag defines a paragraph.

Browsers automatically add a single blank line before and after each `<p>` element.

Tip: Use CSS to style paragraphs.

### [`<!--...-->`](https://www.w3schools.com/tags/tag_comment.asp)
The comment tag is used to insert comments in the source code. Comments are not displayed in the browsers.

You can use comments to explain your code, which can help you when you edit the source code at a later date. This is especially useful if you have a lot of code.

``` html
<!--This is a comment. Comments are not displayed in the browser-->

<p>This is a paragraph.</p>
```

### [`<strong>`](https://www.w3schools.com/tags/tag_strong.asp)
The `<strong>` tag is used to define text with strong importance. The content inside is typically displayed in bold.

Tip: Use the `<b>` tag to specify bold text without any extra importance!

### [`<em>`](https://www.w3schools.com/tags/tag_em.asp)
The `<em>` tag is used to define emphasized text. The content inside is typically displayed in italic.

A screen reader will pronounce the words in `<em>` with an emphasis, using verbal stress.

### [`<br>`](https://www.w3schools.com/tags/tag_br.asp)
The `<br>` tag inserts a single line break.

The `<br>` tag is useful for writing addresses or poems.

The `<br>` tag is an empty tag which means that it has no end tag.

### [`<hr>`](https://www.w3schools.com/tags/tag_hr.asp)
The `<hr>` tag defines a thematic break in an HTML page (e.g. a shift of topic).

The `<hr>` element is most often displayed as a horizontal rule that is used to separate content (or define a change) in an HTML page.

### [`<del>`](https://www.w3schools.com/tags/tag_del.asp)
The `<del>` tag defines text that has been deleted from a document. Browsers will usually strike a line through deleted text.

### [`<a>`](https://www.w3schools.com/tags/tag_a.asp)
The `<a>` tag defines a hyperlink, which is used to link from one page to another.

The most important attribute of the `<a>` element is the href attribute, which indicates the link's destination.

By default, links will appear as follows in all browsers:

- An unvisited link is underlined and blue
- A visited link is underlined and purple
- An active link is underlined and red

``` html
<a href="https://www.w3schools.com">Visit W3Schools.com!</a>
```

### [`<img>`](https://www.w3schools.com/tags/tag_img.asp)
The `<img>` tag is used to embed an image in an HTML page.

Images are not technically inserted into a web page; images are linked to web pages. The `<img>` tag creates a holding space for the referenced image.

The `<img>` tag has two required attributes:

- src - Specifies the path to the image
- alt - Specifies an alternate text for the image, if the image for some reason cannot be displayed

Note: Also, always specify the width and height of an image. If width and height are not specified, the page might flicker while the image loads.

Tip: To link an image to another document, simply nest the `<img>` tag inside an `<a>` tag.

``` html
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
```

### [`<ul>`](https://www.w3schools.com/tags/tag_ul.asp)
The `<ul>` tag defines an unordered (bulleted) list.

Use the `<ul>` tag together with the `<li>` tag to create unordered lists.

Tip: Use CSS to style lists.

Tip: For ordered lists, use the `<ol>` tag.

``` html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```


### [`<table>`](https://www.w3schools.com/tags/tag_table.asp)
The `<table>` tag defines an HTML table.

An HTML table consists of one `<table>` element and one or more `<tr>`, `<th>`, and `<td>` elements.

The `<tr>` element defines a table row, the `<th>` element defines a table header, and the `<td>` element defines a table cell.

An HTML table may also include `<caption>`, `<colgroup>`, `<thead>`, `<tfoot>`, and `<tbody>` elements.

``` html
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>
```

### [`<div>`](https://www.w3schools.com/tags/tag_div.asp)
The `<div>` tag defines a division or a section in an HTML document.

The `<div>` tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.

The `<div>` tag is easily styled by using the class or id attribute.

Any sort of content can be put inside the `<div>` tag! 

Note: By default, browsers always place a line break before and after the `<div>` element.

### [`<span>`](https://www.w3schools.com/tags/tag_span.asp)
The `<span>` tag is an inline container used to mark up a part of a text, or a part of a document.

The `<span>` tag is easily styled by CSS or manipulated with JavaScript using the class or id attribute.

**The `<span>` tag is much like the `<div>` element, but `<div>` is a block-level element and `<span>` is an inline element.**

### `<form>`
The `<form>` tag is used to create an HTML form for user input.

The `<form>` element can contain one or more of the following form elements:

``` html
<input>
<textarea>
<button>
<select>
<option>
<optgroup>
<fieldset>
<label>
<output>

<form action="/action_page.php" method="get">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
```

### [`<input>`](https://www.w3schools.com/tags/tag_input.asp)
The `<input>` tag specifies an input field where the user can enter data.

The `<input>` element is the most important form element.

The `<input>` element can be displayed in several ways, depending on the type attribute.

The different input types are as follows:

``` html
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text"> (default value)
<input type="time">
<input type="url">
<input type="week">
```
Look at the type attribute to see examples for each input type!

## [HTML Text Formatting](https://www.w3schools.com/html/html_formatting.asp)
HTML contains several elements for defining text with a special meaning.

Formatting elements were designed to display special types of text:

`<b>` - Bold text
`<strong>` - Important text
`<i>` - Italic text
`<em>` - Emphasized text
`<mark>` - Marked text
`<small>` - Smaller text
`<del>` - Deleted text
`<ins>` - Inserted text
`<sub>` - Subscript text
`<sup>` - Superscript text

## [HTML Quotation and Citation Elements](https://www.w3schools.com/html/html_quotation_elements.asp)
`<abbr>`	Defines an abbreviation or acronym

`<address>`	Defines contact information for the author/owner of a document

`<bdo>`	Defines the text direction

`<blockquote>`	Defines a section that is quoted from another source

`<cite>`	Defines the title of a work

`<q>`	Defines a short inline quotation

## [HTML Block and Inline Elements](https://www.w3schools.com/html/html_blocks.asp)
Every HTML element has a default display value, depending on what type of element it is.

There are two display values: block and inline.

### **Block-level Elements**
A block-level element always starts on a new line.

A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

A block level element has a top and a bottom margin, whereas an inline element does not.

The `<div>` element is a block-level element.

### **Inline Elements**
An inline element does not start on a new line.

An inline element only takes up as much width as necessary.

This is a `<span>` element inside a paragraph.

## [Class](https://www.w3schools.com/html/html_classes.asp)
The HTML class attribute is used to specify a class for an HTML element.

Multiple HTML elements can share the same class.

The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.

## [Id](https://www.w3schools.com/html/html_id.asp)
The HTML id attribute is used to specify a unique id for an HTML element.

You cannot have more than one element with the same id in an HTML document.
The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document.

The id attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.

The syntax for id is: write a hash character (#), followed by an id name. Then, define the CSS properties within curly braces {}.


## [Entities](https://www.w3schools.com/html/html_entities.asp)
Reserved characters in HTML must be replaced with character entities.

Some characters are reserved in HTML.

If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags.

Character entities are used to display reserved characters in HTML.

To display a less than sign (<) we must write: `&lt;` or `&#60;`

## [HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
Semantic elements = elements with a meaning.

A semantic element clearly describes its meaning to both the browser and the developer.

Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.

Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

Many web sites contain HTML code like: `<div id="nav">` `<div class="header">` `<div id="footer">` to indicate navigation, header, and footer.

In HTML there are some semantic elements that can be used to define different parts of a web page.

![HTML Semantic Elements](https://www.w3schools.com/html/img_sem_elements.gif)

## [HTML Image Maps](https://www.w3schools.com/html/html_images_imagemap.asp)
With HTML image maps, you can create clickable areas on an image.

The HTML `<map>` tag defines an image map. An image map is an image with clickable areas. The areas are defined with one or more `<area>` tags.

You must define the shape of the clickable area, and you can choose one of these values:

- rect - defines a rectangular region

- circle - defines a circular region

- poly - defines a polygonal region

- default - defines the entire region

You must also define some coordinates to be able to place the clickable area onto the image. 

``` html
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>
```

## VSCODE EMMET TRICKS
- ctrl + Enter: new line from everywhere
- ctrl + ?: comment
- lorem100: dummy text with 100 words
- alt + up/down arrow: move line
- selected item + crtl + d: select the next item and edit them together.
- input: - input types
- div#id or #id- add div with id 'id'