import {  Container, Row, Col, Carousel} from 'react-bootstrap';
export default function CarouselDefault(){
    return(
        <>
        <Container fluid>
            <Row>
                <Col sm={8}>
                    <Carousel fade variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://cache.marieclaire.fr/data/photo/w1000_ci/53/patron-tricot-coussins.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://cache.marieclaire.fr/data/photo/w1000_ci/1bi/tricoter-avec-une-seule-pelote.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://cache.marieclaire.fr/data/photo/w1000_ci/4y/faire-un-echantillon-tricot.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm={4}>
                <img
                        className="d-block w-100 rounded"
                        src="https://theeasydesign.com/wp-content/uploads/2017/01/IMG_8253-Copy-600x600.jpg"
                        alt="second column"
                        />
                </Col>
            </Row>
        </Container>
        </>
    )
}