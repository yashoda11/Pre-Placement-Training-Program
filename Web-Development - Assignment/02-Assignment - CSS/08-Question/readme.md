# **Web Development - CSS**
## **Assignment Questions - 02**
## **Question - 08**


**8. Difference between absolute and relative and sticky and fixed position explain with example.**

**ANSWER :**

**Position Property in CSS :**
- The CSS position property is used to position an element on the web page. 
- It has a different positioning method that is used by elements during positioning on the web page.
- These positioning methods are static, relative, fixed, absolute or sticky.

**CSS Positioning Properties are :**
1. CSS Static Positioning
2. CSS Absolute Positioning
3. CSS Relative Positioning
4. CSS Fixed Positioning
5. CSS Sticky Positioning

**1.  CSS Static Position Property :**
- This is the default positioning of the HTML element and it is not affected by the top, bottom, left, right, and z-index properties.
- An element with **position: static;** is not positioned in any special way; it is always positioned according to the normal flow of the page.


**2.  CSS Absolute Position Property :**
- Absolute positioning is used to position an element relative to the first parent element that has a position other than static. 
- If no such element is found, the containing block is HTML.
- With absolute positioning, you can place an element anywhere on a page.
- Absolute positioned elements are removed from the normal flow and can overlap elements.
- It **behaves** based on the **parent's position**.

**Example Program for Absolute Position is :**

**HTML Source Code :**
[HTML Source Code](./CSS%20Absolute%20Position%20Property/index.html)

**CSS Source Code :**
[CSS Source Code](./CSS%20Absolute%20Position%20Property/style.css)

**Output Images :**
![Output Images](./CSS%20Absolute%20Position%20Property/Output%20Image-Absolute.png)

**Explanation :**
- In this example, the CSS absolute property of the position has been used. 
- After applying CSS absolute property, the element is positioned relative to its nearest positioned element.


**3.  CSS Relative Position Property :**
- The Relative positioned element is positioned itself relative to its normal position. 
- After applying the following relative properties like top, bottom, right and left the box element will be shifted with respect to its normal position.

**Example Program for Relative Position is :**

**HTML Source Code :**
[HTML Source Code](./CSS%20Relative%20Position%20Property/index.html)

**CSS Source Code :**
[CSS Source Code](./CSS%20Relative%20Position%20Property/style.css)

![Output Image](./CSS%20Relative%20Position%20Property/Output%20Image%20-%20Relative.png)

**Explanation :**
- In this example, the CSS relative property of the position is used. 
- After applying CSS relative property, the element can be shifted from its normal position after providing top and right property values.


**Difference between Absolute Position and Relative Positions are :**

|Sr. No|Aspect|Absolute Positioning|Relative Positioning|
|------|------|--------------------|--------------------|
|1|Positioning Behavior	|Takes the element out of the normal flow of the document.|Keeps the element within the normal flow of the document.|
|2|Reference Point|Positioned relative to its nearest positioned ancestor, if any. Otherwise, relative to the initial containing block (usually the viewport).	|Positioned relative to its normal position in the document flow.
|3|Impact on Other Elements	|Does not affect the layout of other elements. They can overlap with other elements.|	Does not disturb the layout of other elements. Other elements are positioned as if the relative positioned element still takes up its original space.|
|4|Scrolling Behavior	|Scrolls along with the page content.	|Scrolls along with the page content.|
|5|Z-index	|Can be assigned a z-index value to control its stacking order with other elements.	|Can be assigned a z-index value to control its stacking order with other elements.|
|6|Example	|Placing a popup modal box on top of the page content.	|Moving an image slightly to the right from its original position.|



**4.  CSS Fixed Position Property :**
- An element with **position: fixed;** is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. 
- The top, right, bottom, and left properties are used to position the element.
- A fixed element does not leave a gap in the page where it would normally have been located.

**Example Program for Fixed Position is :**

**HTML Source Code :**
[HTML Source Code](./CSS%20Fixed%20Fixed%20Property/index.html)

**CSS Source Code :**
[CSS Source Code](./CSS%20Fixed%20Fixed%20Property/style.css)

**Output Image :**
![Output Image](./CSS%20Fixed%20Fixed%20Property/Output%20Image%20-%20Fixed.png)

**Explanation :**
- In this example, the CSS fixed property of the position has been used. 
- After applying CSS fixed property, the element can not move after the page scroll.


**5. CSS Sticky Position Property :**
- An element with **position: sticky;** is positioned based on the user's scroll position.
- A sticky element toggles between relative and fixed, depending on the scroll position. 
- It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position: fixed).

**Example Program for Sticky position is :**

**HTML Source Code :** 
[HTML Source Code](./CSS%20Sticky%20Position%20Property/index.html)

**CSS Source Code :**
[CSS Source Code](./CSS%20Sticky%20Position%20Property/style.css)

**Output Image :**
[Output Image](./CSS%20Sticky%20Position%20Property/Output%20Image%20Sticky.png)



**Difference between Sticky Position and Fixed Positions are :**

|Sr. No|Aspect|Sticky Positioning|Fixed Positioning|
|------|------|--------------------|--------------------|
|1|Scrolling Behavior	|Acts as a hybrid of relative and fixed positioning. Initially follows the normal flow of the document, but becomes fixed once a specific threshold (usually based on scroll position) is reached.	|Remains fixed in its position regardless of scrolling. It stays in the same location relative to the viewport.|
|2|Reference Point|Positioned relative to its nearest scrolling ancestor (if any) or the initial containing block (usually the viewport).	|Positioned relative to the viewport.
|3|Impact on Other Elements|Can affect the layout of other elements when it becomes fixed, pushing them.|Does not affect the layout of other elements. It does not interact with the flow of other elements.|
|4|Scrolling Range|Stays within the defined scrolling range based on the threshold.|Remains fixed at its specified position regardless of scrolling.|
|5|Z-index|Can be assigned a z-index value to control its stacking order with other elements.|Can be assigned a z-index value to control its stacking order with other elements.|
|6|Example|Having a navigation menu that remains at the top of the page as you scroll down, but returns to its original position when scrolling back up.|Displaying a banner ad that remains fixed at the bottom of the screen while the rest of the content scrolls.