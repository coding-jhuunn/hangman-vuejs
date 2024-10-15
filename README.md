# Hangman Game with Vue JS

#### by coding-jhuunn

## About

This document discussed how I made this project possible and how creating a project can significantly improve your learning / studying about a framework used for web development. I know this project will be simple but from doing this project , my knowledge in Vue js grew and I understand how it works.

## Development Stages

### 1. **How does it work?**

Simple, I just applied the logic of how a hang-man game works on this project. In this section, you will know more about how I work on this project.

### 2. **Tool & Resources Used?**

I used Vue Js as my main framework for this project and meanwhile I used vanilla CSS for implementing my design.

![Design View](/test/DesignViewofTheProj.PNG)

This image shows how my design will effects on user’s devices.

### 3. **Problems Encounter?**

**Words to be guessed by the viewer?**

> After making components in Vue Js, I need random things/sentences to be displayed and used for this. That’s why I used a thing called API and found this API to randomly call quotes from different movies/tv shows. Thanks to this, my first problem was solved.

**Return object by the API Call to display in components to be guessed?**

> I made a script that turned the object from the [API](https://github.com/well300/quotes-api) into a guessing game. This script is applied so that every letter from the object turns into empty spaces except from the special characters. That’s why you can find a test folder in this repo. But through trial and error, I made the script possible and these following bugs I encountered.
>
> > 1. Avoid guess letters to be repeated
> > 2. Capital letter
> > 3. What if user accidentally reload the page ( the fetch api method will automatically apply, the test will repeat )

**Applying CSS design**

> You can see the commits I made in this repo are mostly problems that I encountered in CSS. That’s why I always retest it from mobile view to desktop view.

## Lesson Learned

Vue Js was a great framework to study. I learned how components, props and its scripts work with each other. Implementing how Vue handles/fetches API to display with their significant components.

###### _You can message me if you have comments or tips that you will suggest for me. Happy coding!_
