import React from "react";

const Articles = (props) => {

  const codeSnippetOne = `const options = { root: null, threshold: 1.0 };`
  const codeSnippetTwo = 
`const options = { 
  root: document.querySelector(".wrapper"), 
  threshold: 1.0 
};`;
  const codeSnippetThree = 
`<!-- HTML --> 
<div class="wrapper">
  <section id="first">
    <h1>Hello Intesection Observer!</h1>
    <p>Some text.</p>
  </section>
  <section id="second">
    <img id="logo" src="./img/logo.png" />
  </section>
 </div>

 /* CSS */
 .animate { transition: 2s ease-in-out; }
 #logo.animate { transform: translate(5em, 0); }
 `;
 const codeSnippetFour = 
 `const options = { 
  root: document.querySelector(".wrapper"), 
  threshold: 1.0 
};
const logo = document.querySelector("#logo");  // The image we want to animate
const sectionScroll = document.querySelector("#second");  // The section which we want to observe
const observer = new IntersectionObserver((entries) => {  // this is our callback function
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      setTimeout(() => {
        logo.classList.add(".animate");
      }, 2000); 
    }
  })
}, options);
observer.observe(sectionScroll);
 `;

    return (
        <section id="posts" className="posts-container container">
          
          <div className="posts-text post-one">
            <h3>The Intersection Observer API</h3>
            <p>Recently I wanted to check the metrics for a webpage I built and I ran a Chrome Lighthouse audit. I got a good score, but my performance could be improved. Among the suggestions, there was one about lazy-loading the images present on my webpage, something that I never took too seriously. It was time to learn something new.</p>
            <p>After researching for a while, I came across the Intersection Observer API on <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noopener noreferrer">MDN</a>, a relatively new solution which allows you to trigger certain actions based on the document's viewport.</p>
            <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" className="quote">
                <p>The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.</p>
            </blockquote>
            <p>Leveraging on the Intersection Observer API can help when handling common tasks, thus boosting the performance of our website and giving us a powerful tool to interpret a user's movement along the page and trigger an action, i.e. as an animation, accordingly.</p>
            <p>A simple use case would be when we have to load a bunch of images. In most cases some of these images will not be visible when the user opens our website, so it does make sense to load them only when the user scrolls down the page below a certain threshold. In this case, we would need to specify a <strong>root element</strong> or, simply, a <strong>root</strong>. Here's how the basic syntax would look like:</p>
            
            <div className="code-block">
              <pre><code>{codeSnippetOne}</code></pre>
            </div>

            <p>Where <code>root</code> is the element, also known as the <strong>target</strong>, that intersects either the device viewport or a custom element we can specify. By default it's set to <code>null</code>, which means that it's going to watch for intersection changes with regard to the document's viewport. <code>threshold</code> os a representation of the percentage of the target element which is visible as a value between 0.0 and 1.0. In the example above, 1.0 means that when 100% of our target is visible within whatever is specified in the <code>root</code>, the the callback function is invoked.
            Whatever is your choice, the API executes a callback function we provide as soon as the visibility of the target element changes.</p>
            <p>Say we want to trigger some animation as soon as the user scrolls down the page below our hero section. In this case, we need to specify a custom element, say a <code>div</code> with the class of "wrapper", in the <code>options</code> object:</p>

            <div className="code-block">
              <pre><code>{codeSnippetTwo}</code></pre>
            </div>

            <p>Within our div we have two sections, the first one being as tall as the viewport (we can achieve it by setting its <code>height: 100vh</code>, and the second one containing one image that we want to move in from the left as soon as it comes into view. Our markup would look like this:</p>

            <div className="code-block">
              <pre><code>{codeSnippetThree}</code></pre>
            </div>

            <p>It's time to write our JavaScript code. First, we set the <code>options</code> object and pass in our custom element as <code>root</code>. Then, we write our callback function like this:</p>

            <div className="code-block">
              <pre><code>{codeSnippetFour}</code></pre>
            </div>
          
          <p>This will trigger our animation as soon as the API detects a change in our sectionScoll intersection.</p>
          <p><strong>Conclusion:</strong> the new IntersectionObserver API lets us to asynchronously observe for changes in a target element intersection and gives us full freedom to act accordingly. From lazy-loading images to trigger animations and more, relying on external plugins or frameworks is no longer needed.</p>

          </div>
            
        </section>
    );
}

export default Articles;