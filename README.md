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
- Feature - Aceept/Reject Connection Requests
- Send/ignore the user card from Feed
- Signup New User
- E2E Testing

Remaining:-
- Profile view when we click on the connections(by myself)
- bug bix


Body
    Navbar
    Route=/ => Feed
    Route=/login => Login
    Route=/connections => Connections
    Router=/profile => Profile


# Deployment

    -Signup on AWS
    - Launch instance
    - chmod 400 <secret>.pem (chmod 400 "devTinder-secret.pem")
    - ssh -i "devTinder-secret.pem" ubuntu@ec2-13-54-47-91.ap-southeast-2.compute.amazonaws.com
    - Install Node Version 24.11.1
    - Git clone
    - Frontend
        - npm install -> install the dependencies
        - npm run build
        - sudo apt update
        - sudo apt install nginx
        - sudo systemctl start nginx
        - sudo systemctl enable nginx
        - Copy code from dist(build file) to /var/www/html/
        - sudo scp -r dist/* /var/www/html/
        - Enable port :80 of our instance

    - Backend
        - updated DB password
        - allowed ec2 instance public IP on mongodb server
        - pm2 install pm2 -g
        - pm2 start npm --name "devtinder-backend" -- start ("devtinder-backend" - can be any name) , (behind the scene => npm start)
        - pm2 logs (to check if there is any error while running the pm2 command)
        - pm2 flush npm
        - pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
        - config nginx - etc/nginx/sites-available/default
        - restart nginx(sudo systemctl restart nginx)
        - Modify the BASE_URL in frontend project to "/api"




        Frontend = http://13.54.47.91/
        Backend = http://13.54.47.91:2501/

        Domain name = devtinder.com => 13.54.47.91

        Frontend = devtinder.com
        Backend = devtinder.com:2501 => devtinder.com/api

# nginx config:

            server_name 13.54.47.91;


            location /api/ {
                proxy_pass http://127.0.0.1:2501/;

                proxy_http_version 1.1;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;

                # Needed for auth, cookies, websockets, etc.
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
            }


# Adding a custom Domain Name

    - purchased domain name from godaddy
    - signup on cloudfare & add a new domain name
    - change the nameservers on godaddy and point it to cloudflare
    - wait for sometime till your nameservers are updated ~ 15 minutes
    - DNS record: A devtinder.in => 13.54.47.91
    - Enable SSl for website


# Sending Emails via SES

    - Create a IAM user
    - Give Access to AmazonSESFullAccess
    - Verify your domain name
    - Verify an email name
    - Install AWS SDK - V3
    


        

