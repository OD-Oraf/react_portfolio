import React from 'react'; 

// import From from 'react-bootstrap/Form'; 
import Hero from '../components/Hero';
import Content from '../components/Content';
// import Axios from 'axios'; 
// import Container from 'react-bootstrap/Container';  

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';            


class ContactPage extends React.Component{

    constructor(props) {
        super(props); 

        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    } 

    handleChange = (event) => {
        // console.log(event)

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value; 
        const name = target.name; 

        this.setState({
            [name]: value
        })
    }

    // Prevent default behavior (refresh page) 
    handleSubmit = (event) => {
        event.preventDefault(); 

        this.setState({
            disabled: true,
            // emailSent: false, 
        });

        // Axois
    }

    render() {
        return(   
            <div> 
                <Hero title={this.props.title} />

                <Content> 
                    <Form onSubmit = {this.handleSubmit}>  

                        <Form.Group>
                            <Form.Label htmlFor="full-name"> Full Name </Form.Label> 
                            <Form.Control id=" full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />                          
                            
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email"> Email </Form.Label>  
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />                          
                            
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="Message"> Message </Form.Label>  
                            <Form.Control id="Message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />                          
                            
                        </Form.Group>

                        <Button className= "d-inline-block" variant ="primary" type="submit" disabled={this.state.disabled}>Send</Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg"> Email Successfully Sent </p> } 
                        {this.state.emailSent === false && <p className="d-inline err-msg"> Error. Make sure you filled out all the fields</p> } 


                    </Form>  
                </Content> 
            </div>    
        );
    }
}

export default ContactPage; 