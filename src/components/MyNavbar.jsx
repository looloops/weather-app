import { Col, InputGroup, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

const MyNavbar = () => {
  return (
    <Container>
      <Row>
        <Col class="col-xs-8 col-xs-offset-2">
          <InputGroup>
            <div className="input-group-btn search-panel">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                <span id="search_concept">
                  <span className="glyphicon glyphicon-align-justify"></span> All
                </span>{" "}
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <a href="#contains">
                    {" "}
                    <span className="glyphicon glyphicon-envelope text-danger"></span> Email
                  </a>
                </li>
                <li>
                  <a href="#its_equal">
                    {" "}
                    <span className="glyphicon glyphicon-music text-warning"></span> Music
                  </a>
                </li>
                <li>
                  <a href="#greather_than">
                    {" "}
                    <span className="glyphicon glyphicon-user text-success"></span> Users
                  </a>
                </li>
                <li>
                  <a href="#less_than">
                    <span className="glyphicon glyphicon-book text-primary"></span> Books{" "}
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#all">
                    {" "}
                    <span className="glyphicon glyphicon-picture text-info"></span> Pictures
                  </a>
                </li>
              </ul>
            </div>
            <input type="hidden" name="search_param" value="all" id="search_param" />
            <input type="text" className="form-control" name="x" placeholder="Search term..." />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">
                <span class="glyphicon glyphicon-search"></span>
              </button>
            </span>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MyNavbar;

{
  /* { <Navbar expand="lg" className="bg-body-tertiary">
     <Container fluid>
       <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
       <Navbar.Toggle aria-controls="navbarScroll" />
       <Navbar.Collapse id="navbarScroll">
         <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
           <Nav.Link href="#action1">Home</Nav.Link>
           <Nav.Link href="#action2">Link</Nav.Link>
           <NavDropdown title="Link" id="navbarScrollingDropdown">
             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
             <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
           </NavDropdown>
           <Nav.Link href="#" disabled>
             Link
           </Nav.Link>
         </Nav>
         <Form className="d-flex">
           <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
           <Button variant="outline-success">Search</Button>
         </Form>
       </Navbar.Collapse>
     </Container>
   </Navbar>}  */
}
