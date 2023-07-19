# **Web Development - CSS**
## **Assignment Questions - 02**
## **Question - 07**

**7. What’s Grid & Flex and difference between them?**

**ANSWER :**
- While CSS Flexbox offers a one-dimensional layout model with powerful alignment and space distribution, CSS Grid lets you quickly create flexible and two-dimensional layouts. 
- They can both be used to place, size, align and architect the website designs.
- But dimensions aren’t the only value proposition between the two. 
- Let's learn about CSS Grid and Flexbox together.

**Grid Layout :**
- The CSS Grid Layout offers a **two-dimensional grid-based layout system**, with **rows** and **columns**.
- It makes designing web pages easier, without having to use floats and positioning. 
    
**Flexbox Layout :** 
- The CSS Flexbox offers a **one-dimensional layout**. 
- It is helpful in allocating and aligning the space among items in a container (made of grids). 
- It works with all kinds of display devices and screen sizes.


**Differences between Grid and Flexbox in CSS :**

|Sr. No|CSS Flexbox|CSS Grid
|------|-----------|--------|
|1|CSS Flexbox is a one-dimensional (1-D) layout model.|CSS Grid is a two-dimensional (2-D) layout model.|
2|A Flexbox container can either facilitate laying out things in a row, or lay them out in a column.|Grid can facilitate laying out items across and down at once.|
|3|Flexbox cannot intentionally overlap elements or items in a layout.|CSS Grid helps you create layouts with overlapping elements.|
|4|Flexbox is basically content based and it listens to the content and adjusts to it.|Grid operates more on the layout level and it is container based.|
|5|Flexbox can be used for Scaling, one-sided aligning, and organizing elements within a container.|Grid is useful when we want to define a large-scale layout with more complex and subtle designs.|
|6|Simpler syntax and concepts|More complex syntax and concepts.|
|7|Supports nesting of flex containers|Supports nesting of grid containers|
|8|Supports reordering of flex items|Supports explicit ordering of grid items|
|9|Allows alignment of items in the main axis|Allows alignment of items in both axes|
|10|Flexible and responsive components, navigation menus|Complex page layouts, grids, card layouts|


- It will be more time saving and helpful if we use both at the same time.
- While Grid and Flexbox can be defined as the parent-children element, both have their own strengths and limitations. 
- It is wise to understand their ability before deciding upon which one to choose.
- When working on either element (row or column), you are most associated with the content. Flexbox, here, gives you more flexibility. 
- HTML markup and CSS will be easy to manage in this type of scenario.
- However, when working with the overall web page layouts, CSS Grid does away with the nightmares of coding. It gives you more flexibility to move around the blocks irrespective of your HTML markup.
- Another major difference between Flexbox and Grids is that the former works on content while the latter is based on the layout. 


**Example Program :**

**FLEX :**

**Let’s say we want to recreate the below design in Flex :**

![Image](./Images/Home%20Start%20Image.png)

**HTML Source Code :** 

[HTML Source Code](./Flex/index.html)

**CSS Source Code :**

[CSS Source Code](./Flex/style.css)

**Out Put Image :**

**Output for this program is :**

![Flex Image](./Images/Flex%20-%20Output%20Image.png)


- Items will place automatically in one line and you don’t have to add anything else except `display: flex;` so the items are free to take their appropriate place.


**Grid :** 

- **Let’s see how we will achieve the same design with CSS Grids :**

**HTML Source Code :**

[HTML Souce Code](./Grid/index.html)

- HTML Code – It is as same as the flex box.

**CSS Complete Source Code :**

[CSS Complete Source Code](./Grid/style.css)


**CSS Code :**
```
.container{
    margin-top: 50px;
    border: 2px solid rgb(0, 0, 0);
    padding: 20px 40px;
    font-size: 50px;
    gap: 30px;
    background-color: pink;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
}   
```

- It divided the wrapper into 10 columns and placed each item into those grid cells. 
- It forced us to divide the layout into 10 columns. 
- But this limitation was not there in the flexbox since it adjusts the items automatically.

- **Then is displays as below :**

  ![Image1](./Images/Output%20Image%20-%201.png)

- We move forward with shifting one element (say, log out) to the extreme right.

- **Here’s how we do it :**

**CSS Code :**
```
.container > div:nth-child(3) {
    grid-column: 10;
}
```

**Output Image :**

**Final Output for this program is :**

![Output Image](./Images/Grid%20Output%20Image.png)


