import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useAuth } from '../authcontext'

const Home = () => {
    const {currentUser} = useAuth()
    return (
        <div>
            <Container className="d-flex align-items-center  " style={{ minHeight: "100vh", flexDirection: "column" }}>
                
                {
                    !currentUser && <div style={{textAlign:"center"}}>
                        <div style={{marginTop:"150px",fontSize:"38px",fontWeight:"500"}}>Welcome 👋</div><br />
                        <div style={{marginTop:"45px",fontSize:"52px",fontWeight:"500"}}>This is a borrow request app.</div>
                        <div style={{marginTop:"45px",marginBottom:"20px",fontSize:"32px"}}>Sign in to proceed</div>
                        <Button variant="outline-dark"  type="submit" id="sign-in-button" href="/signin">
                            SIGN IN
                        </Button>
                    </div>
                }
                {
                    currentUser && <div>
                        <br/><br/>
                        <div style={{marginTop:"150px",fontSize:"38px",fontWeight:"500"}}>Welcome 👋,{currentUser.phoneNumber}</div><br />
                        <div style={{marginTop:"45px",marginBottom:"20px",fontSize:"32px"}}>Go to dashboard to make request</div>
                        <Button variant="outline-dark"  type="submit" id="sign-in-button" href="/dashboard">
                            DASHBOARD
                        </Button>
                    </div>
                }
            </Container>
        </div>
    )
}
export default Home