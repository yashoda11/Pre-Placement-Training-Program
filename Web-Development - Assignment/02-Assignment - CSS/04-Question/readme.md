# **Web Development - CSS**
## **Assignment Questions - 02**
## **Question - 04**

**4 Whats difference between Inline, Inline Block and block ?**

**ANSWER :**

**1. The Inline  Elements :** 
- The element doesn’t start on a new line and only occupies just the width it requires. 
- We can’t set the width or height.
- Elements with **display: inline** are displayed on the same line as their siblings, without creating line breaks.
- Inline elements do not have a width or height property, and their dimensions are determined by their content.
- Margins and paddings can be applied horizontally (left and right) but do not affect the vertical layout.
- Inline elements flow **horizontally**, do not have explicit dimensions, and do not create line breaks.

**Examples :** 
- Examples of **inline elements** are 
    - `<span>`, 
    - `<a>`, 
    - `<em>`, 
    - `<strong>`, etc.

**Syntax :**
```
.inline-element {
display: inline;
width: 1000px; /* ❌ won't have any effect */
height: 1000px; /* ❌ won't have any effect */
}
```
- Here are a few elements that have a default inline property, Which are **span**, **a** , **img**.
- And most of the formatting tags are also inherently inline, Which are **em**, **strong**, **i**, **small** etc.,

**2. The Inline-Block Elements :**
- Inline-block It’s formatted just like the inline element, where it doesn’t start on a new line. 
- But, we can set width and height values.
- Elements with **display: inline-block** share characteristics of both inline and block elements.
- Inline-block elements are displayed on the same line as their siblings, but they can have specific widths, heights, margins, and paddings.
- They respect line breaks and can create horizontal space between elements.
- Inline-block elements flow horizontally, respect dimensions, and can create line breaks.


**Examples :**
- Examples of **inline-block elements** are 
    - <img>, 
    - <button>, 
    - <input>, etc.

**Syntax :** 
```
.inline-block-element {
display: inline-block;
width: 1000px; /* ✅  yes, it will work */
height: 1000px; /* ✅  yes, it will work */
}
```

**3.  The Block Elements :**
- The element will start on a new line and occupy the full width available.
- We can set width and height values.
- Here are a few elements that have a default block property, Which are **div**, **h1**, **p**, **li**, **section**.
- Elements with **display: block** start on a new line and occupy the full available width by default.
- Block-level elements have a width, height, margins, paddings, and can create vertical space with line breaks.
- Block-level elements ignore the presence of other elements on the same line.
- Block-level elements start on a new line, have explicit dimensions, and create line breaks.

**Examples :**
- Examples of **block-level elements** are 
    - `<div>`, 
    - `<p>`, 
    - `<h1>` to 
    - `<h6>`, 
    - `<ul>`, 
    - `<li>`, etc.

**Syntax :**
```
.block-element {
display: block;
width: 1000px; /* ✅  yes, it will work */
height: 1000px; /* ✅  yes, it will work */
}
```