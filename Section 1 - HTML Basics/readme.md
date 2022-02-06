## !DOCTYPE html
Tell the browser which type of doc is used. (in our case HTML5).

## title
show the page title in the search results. Very important to put keywords and describe the current page (SEO).

## meta: charset
...

## meta: desctiption
Show the description of the page in the search results.

## meta: viewport
Enable us to make our page responsive.


## meta: keywords
Add keywords to our page, help with search results.

## meta: robots
By writing "NOINDEX,NOFOLLOW" in the content, we are telling the search engine to not show our page in the search results.

## HTML TAGS
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
## HTML Block and Inline Elements
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

## Div
The `<div>` tag defines a division or a section in an HTML document.

The `<div>` tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.

The `<div>` tag is easily styled by using the class or id attribute.

Any sort of content can be put inside the `<div>` tag! 

Note: By default, browsers always place a line break before and after the `<div>` element.

## Span
The `<span>` tag is an inline container used to mark up a part of a text, or a part of a document.

The `<span>` tag is easily styled by CSS or manipulated with JavaScript using the class or id attribute.

**The `<span>` tag is much like the `<div>` element, but `<div>` is a block-level element and `<span>` is an inline element.**

## Class
The HTML class attribute is used to specify a class for an HTML element.

Multiple HTML elements can share the same class.

The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.

## Id
The HTML id attribute is used to specify a unique id for an HTML element.

You cannot have more than one element with the same id in an HTML document.
The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document.

The id attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.

The syntax for id is: write a hash character (#), followed by an id name. Then, define the CSS properties within curly braces {}.

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