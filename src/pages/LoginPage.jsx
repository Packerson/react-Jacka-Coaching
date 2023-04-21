import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import Spinner from "../components/Spinner";
import { login, reset } from "../features/auth/authSlice";


const LoginPage= () =>{

    // hook for email set
    const [email, setEmail] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // unpacking state.auth 
    const {user, isLoading, isError, isSuccess, message} =
     useSelector((state)=> state.auth)


    useEffect(()=>{
        if (isError){
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

    return(
        <>
			<Container>
				<Row>
					<Col className="mg-top text-center">
						<section>
							<h1>
								Login
							</h1>
							<hr className="hr-text" />
						</section>
					</Col>
				</Row>

				{isLoading && <Spinner />}
				<Row className="mt-3">
					<Col className="justify-content-center">
						<Form onSubmit={submitHandler}>
							<Form.Group controlId="email">
								<Form.Label>Email Addrss</Form.Label>
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
                <img src={require("../images/background.jpg")} alt="background" />
			</Container>
		</>
       
    )

}

export default LoginPage;