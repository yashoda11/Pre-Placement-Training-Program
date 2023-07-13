# **Web Development - CSS**
## **Assignment Questions - 03**
## **Question - 02**

**2. How do you define a media query in CSS?**

**ANSWER :**

**Define a Media Query in CSS :**

- To define a media query in CSS, we use the **@media** rule followed by the conditions or rules that you want to apply when those conditions are met. Here's the basic syntax:

**Syntax :**

```
@media media-type and (condition) {
  /* CSS rules to apply */
}
```

**Let's break down the different parts :**

**@media :** 
- This keyword is used to start a media query rule.

**media-type :** 
- It specifies the type of media for which the query is intended. 
- The most common media types are :
    1. all
    2. screen
    3. print
    4. speech
    5. projection. 
        - **all :**
            - Indicates that you want to target all devices, with no exceptions. 
            - Used for all media-type devices.
        - **print :**
            - Targets devices that send output to a print display like the “Print Preview” window in a web browser.
        - **screen :** 
            - This is the opposite of print, targeting all devices that don’t fall under the print category.
            - Used for computer screens, tablets, smartphones etc.
        - **speech :** 
            - Used for screenreaders that "reads" the page out loud.
            - **syntax :**
            ```
            @media screen {
              /* Styles! */
            }

            ```
- The screen type is commonly used for devices with screens, while print is used for printing purposes.

**condition :** 
- It represents one or more conditions that determine when the styles inside the media query will be applied.
- Conditions can be based on various factors like width, height, device orientation, resolution, and more. 
- Conditions are specified inside parentheses **'( )'** and can be combined using logical operators such as **and**, **not**, **and** only.

**Syntax - Example :**

![Image](https://cdn.hashnode.com/res/hashnode/image/upload/v1680271417207/0beb290b-8ad5-4e32-b7bb-ec1f2eb962d4.png?auto=compress,format&format=webp)

**And here’s a summary along with further details on what’s in the image :**

**1. @media :** 
- The CSS at-rule that indicates that you’re writing a media query.

**2. screen :** 
- One of the available media types to identify which devices should the media query should target. 
- This is optional if you’re not using the **not** and **only** operators.

**3. and :** 
- A media query modifier, also called a logical operator, that helps you conditionally target certain devices and media features.

**4. (min-width: 900px) :** 
- One of numerous media features and values available to target specific device sizes, device types, device capabilities, etc.

**5. article { ... } :** 
- The selectors and CSS rules, nested inside opening and closing curly braces, indicating what CSS rules you want to apply to your media queries.

**Example :**

1. Here's an example that shows a media query targeting a specific viewport width :

```
@media screen and (max-width: 600px) {
  /* CSS rules to apply when viewport width is 600px or less */
}
```
- In the above example, the styles inside the media query will be applied when the media type is screen (for screen devices) and the viewport width is 600 pixels or less.
- We can include multiple conditions within a media query, separated by logical operators. 

2. Here's an example that combines two conditions:

```
@media screen and (max-width: 600px) and (orientation: landscape) {
  /* CSS rules to apply when viewport width is 600px or less and the device is in landscape orientation */
}
```
- In this case, the styles will be applied when the media type is screen, the viewport width is 600 pixels or less, and the device is in landscape orientation.
- By using media queries, we can define different sets of CSS rules to be applied based on specific conditions, allowing us to create responsive designs that adapt to different devices and screen sizes.