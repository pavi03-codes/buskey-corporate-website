import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Carousel, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function App() {
  const [navbarColor, setNavbarColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust the scroll threshold as needed
        setNavbarColor('skyblue');
      } else {
        setNavbarColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar 
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="custom-navbar"
      style={{ backgroundColor: navbarColor }}
      >
       <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://validthemes.net/site-template/buskey/assets/img/logo.png"
              width="150"
              height="50"
              // className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
            <Nav.Link href="#home" style={{ marginLeft: '18px' }}> HOME </Nav.Link> 
            <Nav.Link href="#about" style={{ marginLeft: '18px' }}> ABOUT </Nav.Link> 
            <Nav.Link href="#services"style={{ marginLeft: '18px' }}> SERVICES </Nav.Link> 
            <NavDropdown title="BLOG" id="basic-nav-dropdown" style={{ marginLeft: '18px' }}>
              <NavDropdown.Item href="#action/3.1"> BLOG RIGHT SIDEBAR </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2"> BLOG LEFT SIDEBAR </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3"> SINGLE RIGHT SIDEBAR </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">  SINGLE LEFT SIDEBAR </NavDropdown.Item>
            </NavDropdown> 
            <Nav.Link href="#contact" style={{ marginLeft: '18px' }}> CONTACT </Nav.Link> 
            <Nav.Link href="#free" style={{ marginLeft: '18px' }}> FREE CONSULTATION </Nav.Link> 
            </Nav>   
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/6476255/pexels-photo-6476255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
           <Carousel.Caption>
            <h1>Start your future plan with Buskey </h1>
            <Button variant="light" className="btn-width"> LEARN MORE </Button> {' '} 
              <Button variant="primary" className="btn-width"> CONTACT US </Button>
          </Carousel.Caption>
              </Carousel.Item>
        <Carousel.Item> 
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <Carousel.Caption>
            <h1> Grow your business with Buskey </h1>
            <Button variant="light" className="btn-width"> LEARN MORE </Button> {' '} 
              <Button variant="primary" className="btn-width"> CONTACT US </Button>
          </Carousel.Caption>
          </Carousel.Item>  
          <Carousel.Item> 
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <Carousel.Caption>
            <h1> Get your business consultant </h1>
            <Button variant="light" className="btn-width"> LEARN MORE </Button> {' '} 
              <Button variant="primary" className="btn-width"> CONTACT US </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br/> <br/>
      <Container fluid>
        <Row> 
         <Col>
           <h1> Welcome to our <br/> consulting agency </h1>
          <p> 
             Both rest of know draw fond post as. It agreement defective to excellent. 
             Feebly do engage of narrow. Extensive repulsive belonging depending if promotion be zealously as. 
             Preference inquietude ask now are dispatched led appearance. Small meant in so doubt hopes.
          </p><br/>
          <p> Am if number no up period regard sudden better. Decisively surrounded all admiration and not you. 
             Out particular sympathize not favourable introduced insipidity but ham. Rather number can and set praise. 
             Distrusts an it contented perceived attending oh. Thoroughly estimating introduced stimulated why but motionless. 
             John way sir high than law who week. Surrounded prosperous introduced it if is up dispatched </p> <br/>
             <Button variant="primary" className="btn-width"> CONTACT US </Button> {''} 
          </Col>
          <Col lg={5}>
            <Image 
               src="https://images.pexels.com/photos/2041393/pexels-photo-2041393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='img-fluid rounded'  />
          </Col>
       </Row>
      </Container>
      <br/> <hr/> <br/>
      <div class="site-heading text-center">
        <h2> Our Services </h2>
        <p class="text-center"> Able an hope of body. Any nay shyness article matters own removal nothing his forming.
          Gay own additions <br/> education satisfied the perpetual. If he cause manor happy. 
          Without farther she exposed saw man led. Along on <br/> happy could cease green oh.</p>
      </div>
      <div> 
      <Container> 
      <Row>
        <Col >
          <h3> Budget Planing </h3>
          <p> Own partiality motionless was old <br/> 
            excellence she inquietude contrasted. 
            <br/> Sister giving so wicket cousin of an he 
            <br/>rather marked.</p>
        </Col>
        <Col>
         <h3> Market Research </h3>
         <p>  Own partiality motionless was old <br/> 
            excellence she inquietude contrasted. 
            <br/> Sister giving so wicket cousin of an he 
            <br/>rather marked.  </p>
        </Col>
        <Col> 
        <h3> Employee Benefits </h3>
         <p>  Own partiality motionless was old <br/> 
            excellence she inquietude contrasted. 
            <br/> Sister giving so wicket cousin of an he 
            <br/>rather marked.  </p>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <h3> Risk Management </h3>
          <p> Own partiality motionless was old <br/> 
            excellence she inquietude contrasted. 
            <br/> Sister giving so wicket cousin of an he 
            <br/>rather marked.</p>
        </Col>
        <Col>
         <h3> Growth strategies </h3>
         <p>  Own partiality motionless was old <br/> 
            excellence she inquietude contrasted. 
            <br/> Sister giving so wicket cousin of an he 
            <br/>rather marked.  </p>
        </Col>
        <Col> 
        <h3> Business analytics </h3>
         <p>  Own partiality motionless was old <br/> 
            excellence she inquietude contrasted. 
            <br/> Sister giving so wicket cousin of an he 
            <br/>rather marked.  </p>
        </Col>
      </Row>
      </Container>
      </div>
     <br/> <hr/> <br/>
      <div> 
        <Container>
          <Row>
            <Col>
            <h3> Request A Quote </h3>
            <FloatingLabel controlId="floatingName" label="Name">
        <Form.Control type="text" placeholder="Name" />
      </FloatingLabel> <br/>
            <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel> 
      <FloatingLabel controlId="floatingPhone" label="Phone Number">
        <Form.Control type="tel" placeholder="Phone Number" />
      </FloatingLabel> <br/> 
      <FloatingLabel controlId="floatingTextarea" label="Your Message">
        <Form.Control as="textarea" placeholder="Your Message" style={{ height: '100px' }} />
      </FloatingLabel>
      <br/> <br/> 
      <Button variant="primary" type="sendmessage" style={{ borderRadius: '20px' }}>
        SEND MESSAGE
      </Button> 
            </Col>
            <Col>
            <h3> Frequently Asked Questio (FAQ) </h3>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> Do I need a business plan? </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> How long do a business plan be? </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> What goes into a business plan? </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Where do I start? </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
      <br/> <hr/> <br/>
      <div class="site-heading text-center">
        <h2> Recent Blog </h2>
        <p class="text-center"> Able an hope of body. Any nay shyness article matters own removal nothing his forming.
          Gay own additions <br/> education satisfied the perpetual. If he cause manor happy. 
          Without farther she exposed saw man led. Along on <br/> happy could cease green oh.</p>
      </div>
      <Container>
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body>
        <Card.Title> Old Unsatiable Our Now </Card.Title>
        <Card.Text>
        Chicken no wishing waiting am. Say concerns 
        dwelling graceful six humoured. Whether mr 
        up savings talking an. Active mutual nor father
         mother exeter
        </Card.Text>
        <Button variant="primary" style={{ borderRadius: '20px' }}> Read More  </Button>
      </Card.Body>
    </Card>
          </Col> 
          <Col> 
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body>
        <Card.Title> Connection Preference </Card.Title>
        <Card.Text>
        Chicken no wishing waiting am. Say concerns 
        dwelling graceful six humoured. Whether mr 
        up savings talking an. Active mutual nor father
         mother exeter
        </Card.Text>
        <Button variant="primary" style={{ borderRadius: '20px' }}> Read More </Button>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/315658/pexels-photo-315658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body>
        <Card.Title> Decisively Advantages Nor </Card.Title>
        <Card.Text>
        Chicken no wishing waiting am. Say concerns 
        dwelling graceful six humoured. Whether mr 
        up savings talking an. Active mutual nor father
         mother exeter
        </Card.Text>
        <Button variant="primary" style={{ borderRadius: '20px' }}> Read More </Button>
      </Card.Body>
    </Card>
          </Col>
        </Row>
      </Container>
      <br/> <hr/> 
      <footer> 
      <div>
        <Container> 
          <Row> 
            <Col> 
            <br/>
            <h4> ABOUT US </h4> <br/>
            <h6> Excellence decisively nay man yet <br/> impression for 
              contrasted remarkably. <br/> There spoke happy for you
               are out. Fertile <br/> how old address did showing
                because <br/> sitting replied six. Had arose guest visit <br/>
                going off child she new.</h6>
            </Col>
            <Col>
            <br/>
              <h4> OUR SUPPORT </h4> <br/>
              <ul>
                <li> Financial Planning </li>
                <li> Investment Planning </li>
                <li> Mutual Funds </li>
                <li> Saving & Investment </li>
                <li> Retirements </li>
                <li> Business Services </li>
                <li> Market Research </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      </footer>
    </div>
  );
}

export default App;
