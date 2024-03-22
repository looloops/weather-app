import SearchBar from "./SearchBar";
// import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import NavDropdown from "react-bootstrap/NavDropdown";

const MainContent = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src="assets/image.png" width="30" height="30" className="d-inline-block align-top" />{" "}
            SimplyMeteo
          </Navbar.Brand>
        </Container>
      </Navbar>
      <SearchBar />
    </>
  );
};

export default MainContent;
