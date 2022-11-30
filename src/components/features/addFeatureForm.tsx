import { useState } from "react"
import MainLayout from '../../common/mainLayout'
import { Col, Form, Input, Row, Button, Tabs, Typography } from 'antd'
import leftArrow from "../../assets/icons/arrow-left.svg"
import PageHeaderIntro from '../pageHeaderIntro/PageHeaderIntro'
import SelectTag from '../selectTag/SelectTag'
import FeatureCard from '../featureCard/FeatureCard'
import { featureCard } from './data'
import { Link } from "react-router-dom"
import { HOME_SCREEN } from "../../router/routes"
// styles
import "./styles.scss"

const AddFeatureForm = (props: any) => {

  const [featureAdded, setFeatureAdded] = useState<boolean>(false);

  // Created-Feature-Success
  const onFinish = (values: any) => {
    console.log('Success:', values);
    setFeatureAdded(true)
  };

  // Created-Feature-Failed
  const onFinishFailed = (value: any) => {
    console.log('Failed:', value);
    // setFeatureAdded(true)

  };

  return (
    <div className="add-feature-style">
      {/* Page-Header */}
      <div className='feature-header'>
        <Link to={HOME_SCREEN}>
          <img src={leftArrow} alt="left-arrow" />
        </Link>
        <PageHeaderIntro title={"Add Feature Flag"} />
      </div>

      <Row className='feature-form' gutter={[70, 0]}>
        <Col className="feature-form-data" md={14}>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="advance_analytics"
              label="Feature Name"
            >
              <Input placeholder='Advance analytics' className='field-input disabled-input' disabled />
            </Form.Item>
            <Form.Item
              name="feature_ID"
              className="label-full"
              label={<div className="field-head">Feature ID <span>Copy this ID & use this in your code.</span></div>}
            >
              <Input
                defaultValue="advance_analytics"
                className="field-input"
              />
            </Form.Item>
            <Form.Item
              name="description"
              label={<>Description (optional)</>}
            >
              <Input placeholder='Fill in the label' className='field-input' />
            </Form.Item>
            <Form.Item
              name="module"
              label="Product Owner"
            >
              <Input placeholder='Add Tags' className='field-input' />
            </Form.Item>
            <Form.Item
              name="module"
              label="Status"
            >
              <Input placeholder='Add Tags' className='field-input' />
            </Form.Item>
            <Form.Item
              name="module"
              label="Type of feature"
            >
              <Input placeholder='Add Tags' className='field-input' />
            </Form.Item>
            <Form.Item
              name="depends"
              label="Depends On"
            >
              <div className='add-remove-input'>
                <div className="select-features">
                  <SelectTag />
                </div>
              </div>
            </Form.Item>
            <Form.Item>
              <p className="instruction description">This will create the feature for all environments,
                you can edit this feature per environment once the feature is created.</p>
              <div className='create-feature'>
                <Button type='primary' size="large" onClick={props.clickHandler}>Create Feature</Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
        {/* Featured-cards */}
        <Col md={10}>
          <div className='feature-container'>
            {
              featureCard?.map((curElm, i) => {
                return (
                  <div key={i} className="feature-card feature__flag-dependency">
                    <FeatureCard title={curElm.title} para={curElm.description} para1={curElm.description2} img_url={curElm.icon} />
                  </div>
                )
              })
            }
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default AddFeatureForm