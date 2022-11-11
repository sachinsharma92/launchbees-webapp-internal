import MainLayout from '../../common/mainLayout'
import { Col, Form, Input, Row, Switch, Button } from 'antd'
import leftArrow from "../../assets/icons/arrow-left.svg"
import { GrCircleAlert } from "react-icons/gr" //React-icons
import copy_icon from "../../assets/icons/copy.svg"
import PageHeaderIntro from '../../components/pageHeaderIntro/PageHeaderIntro'
import SelectTag from '../../components/selectTag/SelectTag'
import FeatureCard from '../../components/featureCard/FeatureCard'
import { featureCard } from './data'

// styles
import "./styles.scss"

const AddFeatureScreen = () => {


  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (value: any) => {
    console.log('Failed:', value);
  };

  const handleChange = (checked: any) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <MainLayout>
      <div className="add-feature-style">

        {/* Page-Header */}
        <div className='feature-header'>
          <img src={leftArrow} alt="left-arrow" />
          <PageHeaderIntro title={"Add Feature Flag"} />
        </div>

        <Row className='feature-form' gutter={[82, 0]}>
          <Col className="feature-form-data" md={12}>
            <Form
              name="basic"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="advance_analytics"
                rules={[
                  {
                    required: true,
                    message: 'Please input your advance analytics!',
                  },
                ]}
              >
                <span className="feature-input-title">Feature Name</span>
                <Input placeholder='Advance analytics' className='field-input disabled-input' disabled />
              </Form.Item>
              <Form.Item
                name="feature_ID"
                rules={[
                  {
                    required: true,
                    message: 'Please copy your id!',
                  },
                ]}
              >
                <div className='feature-id'>
                  <div className="field-head">
                    <span className="feature-input-title">Feature ID</span>
                    <div className="feature-input-title">
                      <span>Copy this ID & use this in your code.</span>
                    </div>
                  </div>
                  <Button className='field-copy'>
                    <span>advance_analytics.</span>
                    <img
                      width={12}
                      src={copy_icon}
                      alt="copy-img"
                    />
                  </Button>
                </div>
              </Form.Item>
              <Form.Item
                name="status_toggle"
                rules={[
                  {
                    required: true,
                    message: 'Please set your status!',
                  },
                ]}
              >

                <div className='status-toggle'>
                  <span className="feature-input-title">Default Status at the start</span>
                  <div className="status-check">
                    <Switch defaultChecked onChange={handleChange} className='check-input' />
                    <span>Default</span>
                  </div>
                </div>
              </Form.Item>
              <Form.Item
                name="description"
                rules={[
                  {
                    required: true,
                    message: 'Please input your description!',
                  },
                ]}
              >
                <span className="feature-input-title">Description (optional)</span>
                <Input placeholder='Fill in the label' className='field-input' />
              </Form.Item>
              <Form.Item
                name="module"
                rules={[
                  {
                    required: true,
                    message: 'Please input your module!',
                  },
                ]}
              >
                <span className="feature-input-title">Module</span>
                <Input placeholder='Add Tags' className='field-input' />
              </Form.Item>
              <Form.Item
                name="depends"
                rules={[
                  {
                    required: true,
                    message: 'Please input your depends!',
                  },
                ]}
              >
                <div className='add-remove-input'>
                  <span className="feature-input-title">Depends On <GrCircleAlert className='warning-icons' /></span>
                  <div className="select-features">
                    <SelectTag />
                  </div>
                </div>
              </Form.Item>


              <p className="instruction description">This will create the feature for all environments,
                you can edit this feature per environment once the feature is created.</p>

              <div className='create-feature'>
                <Button type='primary' style={{ height: 44, width: 160 }}>Create Feature</Button>
              </div>
            </Form>
          </Col>
          {/* Featured-cards */}
          <Col md={12}>
            <Row className='feature-container'>
              {
                featureCard?.map((curElm, i) => {
                  return (
                    <Col md={12} sm={12} key={i}>
                      <FeatureCard title={curElm.title} para={curElm.description} para1={curElm.description2} img_url={curElm.icon} />
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </div>
    </MainLayout>
  )
}

export default AddFeatureScreen