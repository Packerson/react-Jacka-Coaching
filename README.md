# React App for Range views.

## Endpoitns: 
  - /  
  - /login  
  
 ### In Login page, 
 Input email. Request is send to backend,to check user in database or check him on uscreen. 
 If uesr on uscreen, create new user in database<br>
  Possible answers:
 - usere with details info (subscriber boolean)
 - or message to creat account on JackaCochaing
 
 ### / MainPage 
 After login, request with default values is send to backend, recive default charts with subscriber=false.
Every clikc on button send new request to backend, then backend check if the button combinations exists in database. <br>
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
