# **Web Development - CSS**
## **Assignment Questions - 03**
## **Question - 01**

**1. What is a Media Query in CSS, and what is its purpose?**

**ANSWER :**

**Media Queries in CSS :**
- Media Queries are used to make the websites responsive.
- The media query is used to hide/show an element when printing web pages.
- Media queries can modify the appearance (and even behavior) or a website or app based on a matched set of conditions about the user’s device, browser or system settings.

**Syntax :**

![Image - Syntax](https://cdn.hashnode.com/res/hashnode/image/upload/v1680270376128/5019c96b-ba92-4fdd-a68e-fa18e28df05d.png?auto=compress,format&format=webp)

**Media queries can be used to check many things, such as:**
1. width and height of the viewport
2. width and height of the device
3. orientation (is the tablet/phone in landscape or portrait mode?)
4. resolution

**Example :**
- Using media queries is a popular technique for delivering a tailored style sheet to desktops, laptops, tablets, and mobile phones (such as iPhone and Android phones).

![Image](https://cdn.hashnode.com/res/hashnode/image/upload/v1680270454124/4abf304b-cada-41aa-a042-31bfa9e502f2.png?auto=compress,format&format=webp)

- CSS Media queries are a way to target browsers by certain characteristics, features, and user preferences, then apply styles or run other code based on those things.
- Perhaps the most common media queries in the world are those that target particular viewport ranges and apply custom styles, which birthed the whole idea of responsive design.

**Purpose of Media Queries in CSS :**
1. The purpose of media queries is to make your webpages adapt and respond to the specific capabilities and constraints of the device that is rendering them. 
2. By using media queries, you can define different sets of CSS rules that will be applied when certain conditions are met.
3. Media queries typically target specific features of the user's device or viewport, such as width, height, screen resolution, device orientation, and more.
4. We can specify these conditions using CSS syntax within the @media rule. 
    - **For Example**, We can define a media query to apply a different style to a webpage when the viewport width is less than a certain value, indicating a **smaller screen** size like a **mobile device**.
5. When a webpage is loaded, the browser evaluates the media queries and applies the corresponding CSS rules based on the conditions that match the user's device. This allows you to provide an optimized layout, typography, and other visual aspects for different devices, ensuring a better user experience.
6. Media queries are crucial for responsive web design, as they enable you to create flexible and adaptive layouts that can accommodate various screen sizes and devices.