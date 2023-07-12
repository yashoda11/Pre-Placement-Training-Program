# **Web Development - CSS**
## **Assignment Questions - 02**
## **Question - 06**


**6 What’s z-index and How does it Function ?**

**ANSWER :**

**Z - Index :**
- **Z-Index** (z-index) is a CSS property that defines the order of overlapping HTML elements. 
- Elements with a higher index will be placed on top of elements with a lower index.
- Z index only works on positioned elements like 
    1. position : absolute
    2. position : relative
    3. position : fixed

**Z - Index Values :**
```
/* Default value if not specified */
z-index: auto;

/* Integer values */
z-index: 1;
z-index: 100;
z-index: 9999;
z-index: -1;

/* Global values */
z-index: inherit;
z-index: initial;
z-index: unset;
```

**Example - 01 :**

**Program for Z index - Positive Z-Index Value :**

- In this example, we can see three boxes displayed on top of each other in different orders using z-index.

- **HTML Source Code :**

    - [HTML Source Code](./positive.html)

- **CSS Source Code :**

    - [CSS Source Code](./positive.css)

- **Output Image :**

    - [Output Image](./Output%20Image%20-%2001.png)


**Example - 02 :**

**Program for Z index - Negative Z-Index Value :**
- Use Z Index if we need to put a background element below a container.
- We can easily place the background under every element by giving it a negative Z Index like below :

- **HTML Source Code :**

    - [HTML Source Code](./negative.html)

- **CSS Source Code :**

    - [CSS Source Code](./negative.css)

- **Output Image :**

    - [Output Image](./Output%20Image%20-%2002.png)