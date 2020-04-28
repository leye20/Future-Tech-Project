![Image description](https://app.slack.com/client/TTBL33AK0/C011V6F4K70)


Group Name: Future-Tech 

Group Members:Leye(leye20), Taiwo(taiwoadeniji), Linshia(Linshian), Kounandi(Ouatarak), Jacob(sijosiji) 

GitHub: https://github.com/leye20/Future-Tech-Project.git

Trello: https://trello.com/b/yoOsYNPF/goup8-milestone-2

Requirement file: https://drive.google.com/drive/u/2/folders/19gc32aum7dsAU6KOn6_yPPrYeRhPEGYT

Project Documentation: 

Sign Up Page
The signup page has an input filed for Username, Password and Interests. On successful sign up, it displays a welcome alert but if an already existing username is entered, it displays an error message saying username already exists. For every new sign up, users information are stored.

Newsfeed
The page is meant to display a news feed every 10 seconds, the requirement was to do it every 15 seconds, but for the sake of our presentation the timer was adjusted downward to ensure we don't wait forever while the posts displays on the page.
Steps to achieve the requirements.
First was to create the actions that would be required of the page. This can be found in the newsfeed_actions file in the newsfeed folder seated in the store folder.
Then a set of posts was created that would be displayed on the page, housed in a mini database called the reducer and the main purpose of the reducer is to take the current state of the page, combined with an action as declared or stated in our action file and pushes the new state to the user interface.
In the types file we have documented the expected action for the User interface.
Once you navigate to the page, that serves as a trigger for the page to start to render posts.
It renders the first post based on a random ID picked from a set of IDs in the reducer.
Then a timer was set to delay the interval the posts would display on the.

Profile Page
Profile page is a user search page. By entering a user id, our user will be able to view the profile of themselves as well as other registered users.

Installation Instructions:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).









