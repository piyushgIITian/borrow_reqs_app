import React from 'react'
import axios from 'axios';
import { Button, Card, Container } from 'react-bootstrap';


export default function BorrowRequests() {
    const [responses, setResponses] = React.useState()
    if(!responses){
        axios.get('http://borrow-req-app.herokuapp.com/borrow').then((res) => {
            setResponses(res.data)
        })

    }
    // async function handleClick(id){
    //     const api = "http://borrow-req-app.herokuapp.com/borrow/"
    //     const finalApi = api + id
    //     console.log(finalApi)
    //    await axios.delete(finalApi).then((res)=>{
    //        console.log(res)
    //    })
    //    await axios.get('http://borrow-req-app.herokuapp.com/borrow/').then((res) => {
    //     setResponses(res.data)
    // })
    // }

    return (
        <div>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    
                    {
                        responses?.map((data, key) => {
                            return (
                                <div key={key}>
                                    <Card className="m-2 shadow p-3 bg-white borrow">
                                        <Card.Body>
                                            <Card.Title>Request Queue:{key}</Card.Title>
                                            <Card.Text>
                                                Amount Requested: {data.amount}
                                            </Card.Text>
                                            <Card.Text>
                                                Reason for borrowing: {data.reason}
                                            </Card.Text>
                                            <Card.Text>
                                                Duration for borrow: {data.duration}
                                            </Card.Text>
                                            <Card.Text>
                                                Upi id of borrower: {data.upiId}
                                            </Card.Text>
                                        </Card.Body>
                                        {/* <Button variant="dark" onClick={handleClick(data._id)}>Delete Request</Button> */}
                                    </Card>
                                </div>
                            );
                        }
                        )
                    
                    }
                    
                </div>
            </Container>

        </div>
    )
}
