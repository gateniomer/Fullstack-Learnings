# Section 1 - HTML Basics

## [HTML Tags](https://www.w3schools.com/tags/default.asp)

### [`<!DOCTYPE>`](https://www.w3schools.com/tags/tag_doctype.asp)
All HTML documents must start with a `<!DOCTYPE>` declaration.

The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.

In HTML 5, the declaration is simple: `<!DOCTYPE html>`

In older documents (HTML 4 or XHTML), the declaration is more complicated because the declaration must refer to a DTD (Document Type Definition).

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

- strong - bold text
- em - italic text
- br - line break
- hr - visible line break
- del - add strikethrough to text
- a - link 
  - adding _blank to target open link in a new window
  - adding / at href will link to another html page in the same folder
- img - show image
- ul - unordered list (contains li) (you can change type)
- ol - ordered list (contains list) (you can change type)
- table
  - thead - the head of the table
    - tr - table row
      - th - table head(only for the heading)
  - tbody
    - tr
      - td
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

## Notes
- Usually use 1 h1 per page
- index.html will be the home page.

## VSCODE EMMET TRICKS
- ctrl + Enter: new line from everywhere
- ctrl + ?: comment
- lorem100: dummy text with 100 words
- alt + up/down arrow: move line
- selected item + crtl + d: select the next item and edit them together.
- input: - input types
- div#id or #id- add div with id 'id'