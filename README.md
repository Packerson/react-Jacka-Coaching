<<<<<<< HEAD
# Frontend App "Range Viewer" for Jaka Coaching
=======
# Frontend app "Range Viewer" for Jaka Coaching.
App displays poker charts depends of user subscribe status.
>>>>>>> a1f0873bef66d6adba7b1824394fe216b8e95e09

The "Range Viewer" is a frontend application developed using JavaScript and React. It is connected to a backend built with Django Rest Framework, and the entire application is deployed on DigitalOcean Cloud. The purpose of this app is to display poker charts based on the user's subscription status.

<<<<<<< HEAD
## The app consists of two main pages:
=======
App in JavaScript/React is connected with backend Django Rest Framework and database,  everthing is deployed on DigitalOcean Cloud. 
>>>>>>> a1f0873bef66d6adba7b1824394fe216b8e95e09

### Login Page:
On this page, the user is required to input their email address. The app sends a query to the backend to check if the user exists in the production database. The following scenarios can occur: 
- If the user exists, the app checks their subscription status and redirects them to the MainPage.
- If the user does not exist in the production database, the app checks if the user exists in the publisher database connected with Jaka Coaching: 
    - If the user exists in the publisher database, the app creates a user in the production database using the data from the Jaka Coaching database and redirects them to the MainPage. 
    - If the user does not exist in the publisher database, the app displays a message instructing the user to create an account on Jaka Coaching. <br>

<<<<<<< HEAD
    The user's data and token are saved in the local storage.

### MainPage:
   When the page is reloaded, the user data is updated. The app fetches all poker charts with buttons representing combinations based on the user's subscription. Each button click reduces the list of allowed combinations. Each set of buttons is implemented as a separate component.
=======
## Two pages:
    - login
    - mainPage

### Login Page:
    User need to input email. Next step- app is send querie to backend and check if user exists in database-production:
        - if yes check user subsribtion and redirect to MainPage
        - if no:
            - check if user exists in publisher database(connected with JakaCoaching)
                - yes, create user in production database with data from database JakaCoaching and redirect to MainPage
                - no, display message "Create account on JakaCoaching"

        save user and token data in localstorage

### MainPage:

    When page is reloded update user data
    Fetch all poker Charts with buttons combinations depends of user subscription to display them from database-production.

    Each pushed button reduce list of allowed combination. 

    Each buttons set is seperatly component. 


## Redux reducers:

    - auth - fetch authentication data from backend
    - images - fetch buttons combination with links to charts

 
Link.js 
    - Links to backend, change comment if want to use this up localy
>>>>>>> a1f0873bef66d6adba7b1824394fe216b8e95e09

## Redux Reducers:

  - auth: This reducer fetches authentication data from the backend.
  - images: This reducer fetches button combinations with links to charts.

### Link.js:
This file contains links to the backend. Modify the comments if you want to use this setup locally.
