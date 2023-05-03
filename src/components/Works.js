import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AppWorks() {
    return (
        <section id='works' className='block works-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Works</h2>
                    <div className='subtitle'>
                        our awesome works
                    </div>
                </div>
                <Row>
                    <Col>1 of 1</Col>
                </Row>
            </Container>
        </section>
    )
}