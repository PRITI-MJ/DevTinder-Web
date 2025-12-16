#devTinderUI

- Create a vite + react application
- Remove unnecessary code and create a Hello World app
- install daisyUI
- Add NavBar component to App.jsx
- Create a NavBar.jsx separate Component file
- Install react router dom
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create a outlet in Bosy component to render all the children routes inside the body component which was initialized in app.jsx
- Create a footer using daisy UI
- Create a login page using daisy UI
- Install axios
- CORS - install cors in backend => Add middleware to frontend with configurations: origin and credentials: true
- Whenever we are making API call so pass axios => {withCredentials: true}
- Install react-redux + @reduxjs/toolkit => configureStore(appstore) => provider(in app.js) => createSlice(adding actions like addUser, removeUser) => add reducer to store
- Add redux devtools in chrome
- Login and see if our data is coming properly in the store
- Navbar should update as soon as user logs in
- Refactor our code to add constants file  + create a components folder
- We should not be access other routes without login
- if token is not present, redirect user to login page
- Logout (in production, while raising PRs, we can add feat: logout and bug: logout as commit message)
- Profile Page
- Get the feed and add the feed in the store
- Build the user card on feed
- Edit Profile Feature
- Show Toast Message on save of profile
- See all my connections
- New Page - See all my connection Requests


Body
    Navbar
    Route=/ => Feed
    Route=/login => Login
    Route=/connections => Connections
    Router=/profile => Profile