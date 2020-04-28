
Group Name: Future-Tech 

Group Members:Leye(leye20), Taiwo(taiwoadeniji), Linshia(Linshian), Kounandi(Ouatarak), Jacob(sijosiji) 

GitHub: https://github.com/leye20/Future-Tech-Project.git

Trello: https://trello.com/b/yoOsYNPF/goup8-milestone-2

Project Requirememt:
Your project must fulfill the following coding criteria:

⦁	Demonstrates use of Semantic UI React
⦁	Demonstrates the use of Redux to manage states
⦁	Demonstrates the ability to get user input and process data before output
⦁	Demonstrates understanding of the lifecycle methods
⦁	Demonstrates the use of props
⦁	Demonstrates the use of React Router to display multiple pages
⦁	Code must pass validator test (HTML, CSS, WCAG, if you are making custom content)
⦁	Code must use TSX (Not JSX)

Your project must fulfill the following coding best practices criteria:

⦁	Break down all functionality into reusable components
⦁	Project must be error free
⦁	Project must be warning free
⦁	Demonstrate use of project management skills (group meetings, use of Trello is required)
⦁	Demonstrate concise and meaningful use of commenting
⦁	Demonstrate concise and meaningful commit messages and active use of GitHub for version control as well as collaboration from multiple users
⦁	Create a functionality document (intention of each page, explanation of features, think of it as a design and operating manual)
⦁	Main GitHub page should be set up with a proper project name, project banner, and basic installation instructions (assume the user has no idea on how to run the application) Example: https://github.com/tensorflow/tensorflow

Your project must fulfill the following design criteria:

⦁	Demonstrates CARP design principles
⦁	Demonstrates knowledge of color theory/correct colors are chosen
⦁	No in-line styles
⦁	Avoids Divs if developing custom content (semantic-ui-react will use divs, this is acceptable)

All members of each group are expected to attend a daily morning stand up with their assigned TA/Instructor:

⦁	Day 1
⦁	Day 2
⦁	Day 3
⦁	Day 4
⦁	Day 5
Due Dates:

⦁	Morning stand up on Monday, April 20: Wireframe, Trello board (populated with tasks and assigned to group members).
⦁	Monday, April 27: Assignment is due at 9 AM.

Sample Project Description:

We will be creating a social media app consisting of three pages. Page one will be our home page, this will use Semantic UI React to create a signup page and login page. The sign up page section will also take in user data such as age, gender, and favorite activities. Once the user is signed in, it will lead to a newsfeed page. We will be using the jsonplaceholder.typicode.com API to populate the newsfeed with random posts from other users. Our third page will be a user search page. By entering a user id, our user will be able to view the profile of themselves as well as other registered users!

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









