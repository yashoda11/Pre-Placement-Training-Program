# **Web Development - CSS**
## **Assignment Questions - 02**
## **Question - 02**

**2. What are the Different Types of Selectors in CSS & what are the advantages of them?**

**ANSWER :**

**CSS Selectors :**
- CSS (Cascading Style Sheets) provides several types of selectors that allow you to target and style specific elements within an HTML document. 
- CSS selectors are used to select the content we want to style.
- Selectors are part of the CSS rule set. 
- CSS selectors select HTML elements according to its id, class, type, attribute etc.,
- Here are some commonly used types of CSS selectors:


**Different types of CSS Selectors are :** 
1. Universal Selector
2. Individual Selector
3. Class Selector
4. ID Selector
5. And (Chained) Selector
6. Combined Selector
7. Inside Selector
8. Direct Child
9. Sibling ` or +

**1. Universal Selector :** 
- The universal selector is used as a wildcard character. It selects all the elements on the pages.

**2. Individual Selector :** 
- It can address any individual elements like div, span, p, ul, li etc., in html.

**3. Class elector :**
- The class selector selects HTML elements with a specific class attribute. It is used with a period character . (full stop symbol) followed by the class name.

**4. ID Selector :** 
- The id selector selects the id attribute of an HTML element to select a specific element. 
- An id is always unique within the page so it is chosen to select a single, unique element. 
- It is written with the hash character (#), followed by the id of the element.

**5. And (Chained) Selector –:** 
- It can address a single tag / elements / attributes section.

**6. Combined Selector :** 
- The grouping selector is used to select all the elements with the same style definitions. 
- Grouping selector is used to minimize the code. 
- Commas are used to separate each selector in grouping.

**7. Inside Selector :** The Inside Selector is used to select only inside attributes, that is can address elements inside elements. 
- Spaces are used in between tag names.

**8. Direct Child :** 
- The Direct Child selector is used to address the direct child only.

**9. Sibling ` or + :** 
- This selector is used next to the element that can be addressed, that is, just after the next class name will be selected.

**10. Pseudo-classes and Pseudo-elements :** 
- Select elements based on their state or position within the document. 
- Pseudo-classes target elements based on conditions such as hover, active, visited, etc. 
- Pseudo-elements target specific parts of elements, such as the first letter or first line. 
- **For example :**

```
a:hover {
color: blue;
}

p::first-letter {
  font-size: 24px;
}
```
- Pseudo-classes and pseudo-elements enable you to apply styles based on dynamic states or specific parts of elements, enhancing interactivity and visual effects.



**Advantages of CSS selectors :**

**1. Specificity :** 
- Different types of selectors allow you to target elements with varying levels of specificity, enabling fine-grained control over styling.

**2. Reusability :** 
- Class selectors and attribute selectors promote the reuse of styles across multiple elements, reducing code duplication and improving maintainability.

**3. Flexibility :** 
- CSS selectors provide a wide range of options to select and style elements based on different criteria, allowing for versatile and customized designs.

**4. Separation of concerns :** 
- By using selectors, you can separate the presentation (CSS) from the content (HTML), improving the maintainability and scalability of your codebase.

**5. Simple syntax** since they include a single element in their structure.

**6. Simple syntax Performance** is the same or faster compared to XPath.

**7. Easier** to **learn** than **XPath**, easier to use.