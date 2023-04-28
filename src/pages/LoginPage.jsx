import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import Spinner from "../components/Spinner";
import { login, reset } from "../features/auth/authSlice";
import backgroundImage from '../images/background.jpg';


const LoginPage= () =>{

    // hook for email set
    const [email, setEmail] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // unpacking state.auth 
    const {user, isLoading, isError, isSuccess, message} =
     useSelector((state)=> state.auth)


    useEffect(()=>{
        if (isError || message){
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate("/");
        }

        dispatch(reset());

    },[isError, isSuccess, message, user, navigate, dispatch]);


    const submitHandler = (e) => {
		e.preventDefault();
		if (!email) {
			toast.error("An email must be provided");
		}

		const userData = {
			email,
		};

		dispatch(login(userData));
	};

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

				{isLoading && <Spinner />}
				<Row className="mt-1">
					<Col className="justify-content-center mb-3">
						<h2>
							Write your email
						</h2>
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