import {  Navbar, Container, Nav, NavDropdown, Row, Col, Form} from 'react-bootstrap';

export default function MenuTop(){
    return(
        <>
        <Container fluid>
            <Row >
                <Col className="mt-3 d-flex justify-content-between">
                <Navbar.Brand href="#home">
                    Lustore
                </Navbar.Brand>
                <div>
                    facebbok | Instagram | twitter
                </div>
                </Col>
                <hr />
            </Row>
            
            <Row>
                <Col>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <form class="row row-cols-lg-auto g-3 align-items-center">
                        <div class="col-12">
                            <label class="visually-hidden" for="inlineFormInputGroupUsername">busca</label>
                            <div class="input-group">
                            <div class="input-group-text">
                                <select class="form-select" id="inlineFormSelectPref">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Make your Search" />
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Buscar</button>
                        </div>
                        </form>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <strong>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Artes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Moda</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Lançamento</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            </strong>
                            <Nav.Link href="#link">Vestuario</Nav.Link>
                            <Nav.Link href="#link">Moda</Nav.Link>
                            <strong>
                            <NavDropdown title="Categorias 02" id="basic-nav-dropdown2">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            </strong>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
        </>
    )
}