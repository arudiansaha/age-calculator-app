# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

- [Mobile Version](./assets/images/screenshots/screenshot-mobile-image.png)
- [Desktop Version](./assets/images/screenshots/screenshot-desktop-image.png)

### Links

- Solution URL: [Click here](https://github.com/arudiansaha/age-calculator-app/)
- Live Site URL: [Click here](https://age-calculator-app-indol.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- CSS Grid
- Mobile-first workflow
- SEO Friendly
- Accessability
- HTML Custom Element

### What I learned

I learned how make code on efficient way and try to avoid any error. Here some code of mine:

```html
<p class="birth__text">
  <span class="birth__number" id="yearNumber">- -</span> years
</p>
<p class="birth__text">
  <span class="birth__number" id="monthNumber">- -</span> months
</p>
<p class="birth__text">
  <span class="birth__number" id="dayNumber">- -</span> days
</p>
```
```css
.birth {
  width: min(100% - 2rem, 70ch);
  height: fit-content;
  margin-inline: auto;
  padding: 1.5rem;
  border-radius: 2rem;
  border-bottom-right-radius: 5rem;
  background-color: $color-neutral-00;
  color: $color-neutral-04;

  &__input,
  &__output {
    display: block;
    margin-block: 1.5rem;
  }

  &__text {
    @include font-size('5xl');

    font-weight: 800;
    font-style: italic;
  }

  &__number {
    color: $color-primary-00;
  }
}
```
```ts
private renderOutput() {
  const date = this.calculateDate();
  document.querySelector<HTMLSpanElement>('#yearNumber')!.innerText = date.year;
  document.querySelector<HTMLSpanElement>('#monthNumber')!.innerText = date.month;
  document.querySelector<HTMLSpanElement>('#dayNumber')!.innerText = date.day;
}
```

### Continued development

Can make animated age when submitted and adding test on utils function.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - All you need about website is in here.
- [SASS Guidelines](https://sass-guidelin.es/) - Great way to learn SASS for efficiency.

## Author

- [Frontend Mentor](https://www.frontendmentor.io/profile/arudiansaha)
- [Twitter](https://www.twitter.com/arudiansaha)
- [GitHub](https://www.github.com/arudiansaha)
- [LinkedIn](https://www.linkedin.com/in/ky-ardiansyah)
