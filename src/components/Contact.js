import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function AppContact() {
    return (
        <section id='contact' className='block contact-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Contact Us</h2>
                    <div className='subtitle'>
                        Get Contact With Us
                    </div>
                </div>

                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                            <Form.Control type='text' placeholder="Enter your full name" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='email' placeholder="Enter your email address" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='tel' placeholder="Enter your contact number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as='textarea' placeholder="Enter your message" required />
                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type='submit'>Submit</Button>
                    </div>
                </Form>
            </Container>
            <div className='google-map'>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.01522834547!2d90.33688076344392!3d23.780771678668046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1683160237420!5m2!1sen!2sbd"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className='contact-info'>
                <ul>
                    <li>
                        <i class="fas fa-envelope"></i>
                        hello@domain.com
                    </li>
                    <li>
                        <i class="fas fa-phone"></i>
                        000-000-0000
                    </li>                    
                    <li>
                        <i class="fas fa-map-marker-alt"></i>
                        Dhaka, Bangladesh.
                    </li>
                </ul>
            </div>
        </section>
    )
}