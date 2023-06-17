# Frontend App "Range Viewer" for Jaka Coaching

The "Range Viewer" is a frontend application developed using JavaScript and React. It is connected to a backend built with Django Rest Framework, and the entire application is deployed on DigitalOcean Cloud. The purpose of this app is to display poker charts based on the user's subscription status.

## The app consists of two main pages:

### Login Page:
On this page, the user is required to input their email address. The app sends a query to the backend to check if the user exists in the production database. The following scenarios can occur: 
- If the user exists, the app checks their subscription status and redirects them to the MainPage.
- If the user does not exist in the production database, the app checks if the user exists in the publisher database connected with Jaka Coaching: 
    - If the user exists in the publisher database, the app creates a user in the production database using the data from the Jaka Coaching database and redirects them to the MainPage. 
    - If the user does not exist in the publisher database, the app displays a message instructing the user to create an account on Jaka Coaching. <br>

    The user's data and token are saved in the local storage.

### MainPage:
   When the page is reloaded, the user data is updated. The app fetches all poker charts with buttons representing combinations based on the user's subscription. Each button click reduces the list of allowed combinations. Each set of buttons is implemented as a separate component.

## Redux Reducers:

  - auth: This reducer fetches authentication data from the backend.
  - images: This reducer fetches button combinations with links to charts.

### Link.js:
This file contains links to the backend. Modify the comments if you want to use this setup locally.
