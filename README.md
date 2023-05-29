# Frontend app "Range Viewer" for Jaka Coaching.
App displays poker charts depends of user subscribe status.


App in JavaScript/React is connected with backend Django Rest Framework and database,  everthing is deployed on DigitalOcean Cloud. 


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



