import { Avatar, Col, Row, Typography } from 'antd';
import image1 from "../../assets/images/login-image1.svg"
import { Logo } from '../../assets/logo';

// Styles
import './styles.scss';

const { Title, Paragraph, Text, Link } = Typography;

interface AuthLayoutProps {
  children?: any,
}

export const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <div className='auth-layout-style'>
      <Row>
        <Col sm={12}>
          <div className='section-color'>
            <Logo className="logo" />
            <Paragraph className='description'>Release.Control.Measure</Paragraph>
            <Title level={2} className="title2-style">
              Efficient <span> Feature Management</span> <br />
              for Scalable Products!
            </Title>
            <img src={image1} alt="" className='img-style' />
          </div>
        </Col>
        <Col sm={12}>
          {props.children}
        </Col>
      </Row>
    </div>
  )
}
