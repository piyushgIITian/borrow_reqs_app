import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import axios from 'axios';
import { useAuth } from '../authcontext'

const Dashboard = ({ signOut }) => {
  const {currentUser} = useAuth()
  async function handleSubmit(e){
    e.preventDefault();
    console.log("you clicked submit");
   
    axios.post('https://borrow-req-app.herokuapp.com/borrow/',{
      "amount": e.target.amount.value,
      "reason": e.target.reason.value,
      "duration":e.target.duration.value,
      "upiId": e.target.upiId.value,
      "phoneNumber": currentUser.phoneNumber
   })
      .then((response)=>{
        console.log("hello"+response.data)
        if (response.data === 'done'){
            alert("Request Sent."); 
        }else {
            alert("Request failed to send.")
        }
      })
    }
  return (
    <div >
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
       <div className="d-flex my-3">
      <div >Welcome 👋, {currentUser.phoneNumber}</div>  <Button id="signOut" variant="outline-dark" style={{marginLeft:"90px"}} onClick={signOut}>
        Sign Out
      </Button>
      </div> 
      {
        currentUser && <div>
        <h2>Make your borrow request</h2><br/>
        
        <Card className="shadow p-3 mb-5 bg-white " style={{ borderRadius: "20px",textAlign:"center" }}>
          <Card.Body>
              <Form  id="borrowForm" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                 
                  <Form.Control type="name" name="amount" placeholder="Please Enter Borrow Amount" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                
                  <Form.Control type="name" name="reason" placeholder="Please Enter The Reason" />
                </Form.Group>
                <Form.Group className="mb-3">
                  
                  <Form.Control type="name" name="duration" placeholder="Please Enter Borrow Duration" />
                </Form.Group>
                <Form.Group className="mb-3">
                  
                  <Form.Control type="name" name="upiId" placeholder="Please Enter Your UPI Id" />
                </Form.Group>
  
                <Button  variant="outline-dark" type="submit" id="sign-in-button">
                  Request
                </Button>
              </Form>
          </Card.Body>
        </Card>
        
        </div>
      }
      
      
      </div>
      </Container>
    </div>
  );
};

export default Dashboard;
