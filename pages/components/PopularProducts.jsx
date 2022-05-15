import {  Container, Row, Col, Carousel, Card} from 'react-bootstrap';
export default function PopularProducts(){
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <p className="h2 text-dark pt-5">
                        Popular Products
                    </p>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                <Card>
                    <Card.Img variant="top" src="https://www8.magfc.org/small/Nibesser-moda-2017-yaz-kad%C4%B1n-elbise-parti-ak%C5%9Fam-zarif-kolsuz-straplez-casual-patchwork-kat-uzunluk-uzun-elbise_1107-1.jpeg" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={3}>
                <Card>
                    <Card.Img variant="top" 
                    src="https://i.pinimg.com/474x/f8/34/dc/f834dc1708213c325fa990e2c2efd9cc--mens-shoes-trendy.jpg" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={3}>
                <Card>
                    <Card.Img variant="top" 
                    src="https://i.pinimg.com/736x/c2/3f/06/c23f065fea324764ac05b5c658358705--crochet-ideas-skirts.jpg" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={3}>
                <Card>
                    <Card.Img variant="top" 
                    src="https://img0.liveinternet.ru/images/attach/c/6/93/673/93673860_large_b121.jpg" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}