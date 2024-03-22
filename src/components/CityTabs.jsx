import Nav from "react-bootstrap/Nav";

function CityTabs() {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Roma</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Milano">Milano</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Torino">Torino</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Bari">Bari</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default CityTabs;
