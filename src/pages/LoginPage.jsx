import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Button, Col, Container, Form, Row} from "react-bootstrap";

import Spinner from "../components/Spinner";
import { login, reset } from "../features/auth/authSlice";
import backgroundImage from '../images/background.jpg';


// LoginPage
const LoginPage= () =>{

    // hook for email set
    const [email, setEmail] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // unpacking state.auth 
    const {user, isLoading, isError, isSuccess, message} =
     useSelector((state)=> state.auth)


    useEffect(()=>{
		// if error or message display on screen in toast container
        if (isError || message){
            toast.error(message);
        }
		
		// if user os isSucces=True redirect to MainPage
        if (isSuccess || user) {
            navigate("/");
        }

		// listening on change one of these elements 
    	},[isError, isSuccess, message, user]);


	// submit function if everthing ok dispatch login action
    const submitHandler = (e) => {
		
		e.preventDefault();
		// set email
		const userData = {
			email,
		};
		// if message display in toast container
		if (message){
			toast.error(message);
		}
		// if not email display error message
		if (!email) {
			toast.error("An email must be provided");
		} else 

		// if everthing ok dispatch login action
		{
			dispatch(login(userData));
		}
	};

	// Main style for Container
	const ContainerBox = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
		maxWidth: "100%",
		maxHeight: "130%",
		color: "white",
	}


    return(
        <>
			<Container style={ContainerBox} >

			{/* display toast messages/erros */}
			<ToastContainer theme='dark'/>

				{/* is loading display spinner component */}
				{isLoading && <Spinner />}

				<Row className="mt-1">
					<Col className="justify-content-center mb-3">
						
						{/* if message, display link to registration */}
						{message
							?
								(
									<a href="https://www.jakacoaching.com/">{message}</a>
								):
									false 
						}

						<h2>
							Write your email:
						</h2>

						{/* Submit Form, set email value  */}
						<Form onSubmit={submitHandler}>
							<Form.Group controlId="email">
								<Form.Control
									type="email"
									placeholder="Enter Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>

							<Button
								type="submit"
								variant="primary"
								className="mt-3"
							>
								Sign In
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
       
    )

}

export default LoginPage;