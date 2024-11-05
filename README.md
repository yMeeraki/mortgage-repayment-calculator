
# Frontend Mentor - Mortgage Repayment Calculator Solution

This is a solution to the [Mortgage Repayment Calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live Site URL: [Netlify](https://mrc-fem.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript for calculations and form validation

### What I learned

This project provided hands-on experience with form validation and calculation logic in JavaScript. Some key learnings included:

- Efficiently structuring a form for collecting numerical inputs
- Validating inputs to prevent errors in calculations
- Displaying real-time feedback based on user inputs

Here’s a sample of the code I’m proud of:

```html
<form id="mortgage-calculator">
  <!-- Form inputs for loan amount, interest rate, etc. -->
</form>```

```.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
```
```
const calculateRepayment = (principal, rate, term) => {
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = term * 12;
  const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
  return monthlyPayment.toFixed(2);
};

```
### Continued development

In future projects, I plan to focus on the following areas for continued growth and improvement:

1. **Advanced JavaScript Concepts**: I want to deepen my understanding of JavaScript, particularly concepts like asynchronous programming (promises, async/await) and higher-order functions. This will help me write more efficient and cleaner code.

2. **State Management in React**: As I continue to work with React, I aim to learn about state management libraries like Redux or Context API. Understanding how to manage state effectively will enhance the scalability and maintainability of my applications.

3. **Responsive Web Design**: While I have a basic grasp of responsive design principles, I want to explore more about CSS Grid and Flexbox to create complex layouts that are both responsive and user-friendly.

4. **Testing**: I plan to learn more about testing methodologies, especially unit testing and integration testing with frameworks like Jest or React Testing Library. Writing tests will help ensure my applications are robust and bug-free.

5. **Accessibility**: Improving the accessibility of my web applications is important to me. I want to learn more about ARIA roles, keyboard navigation, and other best practices to make my projects usable for everyone.

6. **Performance Optimization**: I want to focus on optimizing the performance of my applications by learning about techniques like code splitting, lazy loading, and optimizing images to enhance user experience.

7. **Version Control with Git**: I would like to become more proficient with Git, including branching strategies, pull requests, and collaboration workflows to improve my development process in team environments.

By focusing on these areas, I hope to build more effective, efficient, and accessible web applications in my future projects.


### Useful Resources

- [Scrimba - Learn JavaScript](https://v2.scrimba.com/learn-javascript-c0) - This platform helped me reinforce my understanding of JavaScript fundamentals through interactive coding exercises. I found the hands-on approach very effective for learning.

- [freeCodeCamp - Learn Form Validation by Building a Calorie Counter](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-form-validation-by-building-a-calorie-counter/step-10) - This article was instrumental in teaching me form validation techniques. The practical examples were particularly helpful for applying the concepts in real-world scenarios.

## Author

- Frontend Mentor - [@yMeeraki](https://www.frontendmentor.io/profile/yMeeraki)