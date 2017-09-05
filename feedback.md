# Project 1 Evaluation
## Deployment:

### 3: Excelling

Did you successfully deploy your project to github pages? Is the app's functionality the same deployed as it is locally?

## Technical Requirements:

### 3: Excelling

Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

## Code Quality:

### 2: Performing

Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code?

## Creativity/Interface:

### 2: Performing

Is your user interface easy to use and understand? Does it make sense for the problem you're solving? Does your interface demonstrate creative design?

## Notes

Overall great job with your project! Nice implementation of the Hangman game!
* Your CSS and HTML pass the validator! I had a couple stylistic comments, like using kebab case instead of camel case for selectors, and adding spacing between the selector and the bracket in your CSS.

* Overall, your code looks really good so I was pretty nitpicky with my JS changes. See the inline comments.

* I think that the addClass and removeClass as well as prop 'disabled' code could be reduced significantly by moving the code to functions and selecting items by class instead of by id. 

* As far as the interface goes, great job! I would potentially work on making sure that the bottom stays on the page (Think a flexbox footer would work well here). I would also rely less on alerts and have an in HTML message box.

* The multiple levels idea was very creative! Good to see that you had extra time to add additional features.

* There are a couple "magic numbers" in your code (5 and 10), these should probably be constants declared at the top so they could be easily changed and so its a bit more clear where they are coming from or what they are doing.

* I would challenge you to also try more ES6 syntax like string interpolation, classes, and arrow functions. 

## Things you'd like specific feedback on:
* how to make my code cleaner: 
    * Your code is pretty clean, I would be consistent on spacing, single quotation marks, and removing console.logs() in production code
    * You could also focus on keeping your functions a bit shorter and more specific so your code will be a bit more DRY.