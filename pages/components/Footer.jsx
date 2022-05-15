import {  Container, Row, Col, } from 'react-bootstrap';
export default function Footer(){
    return(
        <>
        <Container fluid className="bg-dark mt-5">
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <figure class="text-center pt-3">
                                    <blockquote class="blockquote text-white">
                                        <p>Lustore </p>
                                    </blockquote>
                                    <figcaption class="blockquote-footer">
                                        created by:  <cite title="Source Title">Fabiano Moraes</cite>
                                    </figcaption>
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        </>
    )
}