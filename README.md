# React App for Range views.

## Endpoints: 
  - /  
  - /login  
  
 ### In Login page, 
  Input email. Request is sent to the backend,to check the user in the database or check him on uscreen. If uesr on uscreen, create new user in database<br>
  Possible answers:
 - users with details info (subscriber boolean)
 - or message to create account on JackaCochaing
 
 ### / MainPage 
After login, a request with default values is sent to the backend, receiving default charts with subscriber=false. 
Every click on the button sends a new request to the backend, then the backend checks if the button combinations exist in the database. <br>
  Possible answers:
  - two links to images 
  - or info no charts in DB
  
 ## Redux , Store
  
 ### Init State:
 - Auth 
 ```
 const initialState = {
	user: user ? user : null,
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: "",
};
```
- Images
```
const initialState = {
    images: {},
    isError: false,
    isLoading: false,
    isSuccess:false,
    message: '',
}

```
