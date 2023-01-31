import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/img/logo.png'
import { SocialIcons } from './SocialIcons'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <SocialIcons/>
            <p>Get in touch with me!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
