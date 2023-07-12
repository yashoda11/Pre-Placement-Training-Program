# **Web Development - CSS**
## **Assignment Questions - 02**
## **Question - 03**

**3. What is VW/VH ?**

**ANSWER :**

**Viewport-Width (VW) :**
- The **viewport width** or the **vw** property is used to set the values according to the current viewport width in which the user is viewing the web page. 
- It will allow the containers to change their width dynamically according to the current viewport width of the web page.

**Viewport-Height (VH) :**
- The **viewport height** or the **vh** is almost similar to the viewport width property. 
- The vw is used to set the dynamic width of the element, on the other hand, vh is used to set the dynamic height of the element. 
- It will dynamically set the height of the element relative to the current viewport height every time the height is changed by the user.

**Pixels (PX) :** 
- The **pixels** or **px** unit is the smallest and mostly used by the beginners to set values of different length properties. 
- Mathematically, 1px is defined as the 1/96th part of a inch i.e. **1px = 1/96 of 1 inch**.


**Example :**
- A few examples of using vw and vh in CSS :
```
.container {
  width: 50vw; /* Set the width of the container to 50% of the viewport width */
  height: 70vh; /* Set the height of the container to 70% of the viewport height */
}

.title {
  font-size: 3vw; /* Set the font size of the title to 3% of the viewport width */
}

.image {
  max-width: 80vw; /* Set the maximum width of the image to 80% of the viewport width */
}
```
- The use of vw and vh units provides a responsive layout that scales proportionally with the viewport dimensions. 
- This ensures that elements adapt to different screen sizes and maintain their relative sizes and positions.


**Differences between them are :**

1. While PX is primarily used for font sizing, Whereas VW, and VH are mostly used for margins, padding, spacing, and widths/heights.
2. It is recommended not to use pixels as a unit while developing a web page or application. 
3. Because, it will not allow the containers in the HTML to change their width and height dynamically according to the viewport size at the time of making the web page responsive.
4. To reiterate, VH stands for “viewport height”, which is the viewable screen’s height. 100VH would represent 100% of the viewport’s height, or the full height of the screen.
5. VW stands for “viewport width”, which is the viewable screen’s width. 100VW would represent 100% of the viewport’s width, or the full width of the screen.

