import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/Button';
import Logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <container id="main-container" className="cape-grid h-100">
    <Form id="sign-in-form" className= "text-center w-100">
       <img 
        className="mb-2 capewood-logo" 
        src={Logo} 
        alt="logo"/>
        
        {/* body text */}
       <h1 className="mb-5 fs-4 fw-normal"> Sign in here</h1>
       
       {/* email address */}

       <Form.Group controlId="sign-in-email-address">
        <Form.Control type="email" size="lg" placeholder="Enter Email Here" autocomplete="username" className="position-relative"/> 
       </Form.Group>


       {/* password */}

       <Form.Group controlId="sign-in-password" className='mb-3'>
        <Form.Control type="password" size="lg" placeholder="Password" autocomplete="current-password" className="position-relative"/> 
       </Form.Group>

       <Form.Group controlId="forgot-your-password" className="d-flex justify-content center mb-4">
        <Form.Check label="Forgot your password? "/>
       </Form.Group>


       {/* signin button  */}

       <div className="d-grid">
       <Button variant="primary" size="lg"> Sign in </Button>
       </div>
       <p className="mt-5 text-muted">&copy; 2022-2023</p>
   
    </Form>
    
    </container>
  );
}

export default App;
