# **Web Development - HTML**
## **Assignment Questions - 01**
## **Question - 08**


**8. What is the difference between `<figure>` tag and `<img>` tag?**

**ANSWER :**

**Difference between `<figure>` tag and `<img>` tag :**

- The difference between the `<figure>` tag and the `<img>` tag is, the `<figure>` tag specifies the self-contained content, like diagrams, images, code snippets, etc. 
- `<figure>` tag is used to semantically organize the contents of an image like image, image caption, etc., whereas the `<img>` tag is used to embed the picture in the HTML5 document.
- It is critical to note that these two elements are not interchangeable.

**Syntax for `<img>` tag is :**
```
<img src="pic_Flower.jpg" alt="Flower Images"> 
``` 

**Syntax for `<figure>` tag is :**

```
<figure>
<img src="pic_trulli.jpg" alt="Trulli">
<figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
</figure>
```

**`<img>` tag :**
- The `<img>` tag is a self-closing tag used to insert an image into an HTML document.
- It is used to display a single image on a web page.
- The `<img>` tag requires the src attribute, which specifies the URL or path to the image file.
- It supports additional attributes such as alt, width, height, title, etc., which provide alternative text, define dimensions, and provide tooltips for the image.

**Example :**
```
<img src="image.jpg" alt="Description of the image" width="300" height="200">
```

**`<figure>` tag :**
- The `<figure>` tag is used to group media content, such as images, illustrations, diagrams, videos, etc., along with their captions.
- It allows for semantic grouping of content and provides a way to associate a caption or description with the media element.
- It is typically used when you want to display an image or other media with a caption or when you want to provide additional context or information about the media content.
- The `<figure>` tag is often used in conjunction with the <figcaption> tag, which is used to define the caption or description for the content within the `<figure>` element.

**Example :**
```
<figure>
  <img src="image.jpg" alt="Description of the image" width="300" height="200">
  <figcaption>Caption or description for the image</figcaption>
</figure>
```