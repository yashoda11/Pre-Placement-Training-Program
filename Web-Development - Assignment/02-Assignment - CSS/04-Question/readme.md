# **Web Development - CSS**
## **Assignment Questions - 02**
## **Question - 04**

**4 Whats difference between Inline, Inline Block and block ?**

**ANSWER :**

**1. The Inline  Elements :** 
- The element doesn’t start on a new line and only occupies just the width it requires. 
- We can’t set the width or height.

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

**Syntax :**
```
.block-element {
display: block;
width: 1000px; /* ✅  yes, it will work */
height: 1000px; /* ✅  yes, it will work */
}
```