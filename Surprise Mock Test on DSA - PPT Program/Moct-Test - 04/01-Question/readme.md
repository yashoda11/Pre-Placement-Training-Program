# **Question - 01 :**
# **Explain all the CSS positions(static, fixed, sticky, relative, absolute) with one code example each**
# **Position Property in CSS –**
- The CSS Position Property is used to position an element on the web page. It has a different positioning method that is used by elements during positioning on the web page.
- These positioning methods are static, relative, fixed, absolute or sticky.
- **CSS Positioning Properties are**:
    1. CSS Static Positioning
    2. CSS Relative Positioning
    3. CSS Fixed Positioning
    4. CSS Absolute Positioning
    5. CSS Sticky Positioning
- Elements are then positioned using the top, right, left and bottom properties. 
- However, these properties will not work unless the position property is set first. 
- They also work differently depending on the position value.

**1.  CSS Static Position Property –**
- This is the default positioning of the HTML element and it is not affected by the top, bottom, left, right, and z-index properties.
- An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page.
- **[Example for Static Position is :]**(https://github.com/yashoda11/Pre-Placement-Training-Program/tree/main/Surprise%20Mock%20Test%20on%20DSA%20-%20PPT%20Program/Moct-Test%20-%2004/01-Question/01-Static-Position)

**2. CSS Absolute Position Property –**
- Absolute positioning is used to position an element relative to the first parent element that has a position other than static. If no such element is found, the containing block is HTML.
- With absolute positioning, you can place an element anywhere on a page.
- Absolute positioned elements are removed from the normal flow and can overlap elements.
- It behaves based on the parent's position.
- **Example for Absolute Position is :**
[]()
- In this example, The CSS absolute property of the position has been used. 
- After applying CSS absolute property, the element is positioned relative to its nearest positioned element.

**3.  CSS Relative Position Property -**
- The Relative positioned element is positioned itself relative to its normal position. 
- After applying the following relative properties like top,bottom,right and left the box element will be shifted with respect to its normal position.
- **Example for Relative Position is :**
- []()
- In this example, the CSS relative property of the position is used. 
- After applying CSS relative property, the element can be shifted from its normal position after providing top and right property values.

**4.  CSS Fixed Position Property -**
- An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. 
- The top, right, bottom, and left properties are used to position the element.
- A fixed element does not leave a gap in the page where it would normally have been located.
- **Example for Fixed Position is :**
- []()
- In this example, the CSS fixed property of the position has been used. 
- After applying CSS fixed property, the element can not move after the page scroll.

**5. CSS Sticky Position Property –**
- An element with position: sticky; is positioned based on the user's scroll position.
- A sticky element toggles between relative and fixed, depending on the scroll position. 
- It is positioned relative until a given offset position is met in the viewport - then it **"sticks"** in place (like position: fixed).
- **Example for Sticky position is :**
- []()