import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const SignIn = ({ loginSubmit, otpSubmit, viewOtpForm }) => {
  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center " style={{ minHeight: "100vh", flexDirection:"column" }}>
      <h2>Please Sign in to make your borrow request</h2><br/>
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card className="shadow p-3 mb-5 bg-white " style={{ borderRadius: "20px",}}>
        <Card.Body>
          {!viewOtpForm ? (
            <Form onSubmit={loginSubmit} id="loginForm">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" name="name" placeholder="Please Enter Your Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select>
                  <option value="none" selected disabled hidden>Select an Option</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="name" name="phone" placeholder="Please Enter Your Phone Number"/>
              </Form.Group>
              <div style={{ textAlign:"center" }}>
              <Button variant="outline-dark" type="submit" id="sign-in-button">
                SIGN IN
              </Button>

              </div>
            </Form>) : (

            <Form id="otpForm" onSubmit={otpSubmit}>
              <Form.Group>
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="One time password"
                  name="otp_value"
                  
                />
              </Form.Group>
              <div style={{ textAlign:"center",marginTop:"15px" }}>
              <Button type="submit" variant="outline-dark">
                Verify OTP
              </Button>

              </div>

            </Form>
          )}
        </Card.Body>
      </Card>
      </div>
      </Container>
    </div>
  )
}

export default SignIn;