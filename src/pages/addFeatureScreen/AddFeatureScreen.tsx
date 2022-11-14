import { useState } from "react"
import MainLayout from '../../common/mainLayout'
import { Col, Form, Input, Row, Switch, Button, message, Alert, Tabs } from 'antd'
import leftArrow from "../../assets/icons/arrow-left.svg"
import copy_icon from "../../assets/icons/copy.svg"
import depend_icon from "../../assets/icons/depend-icon.svg"
import PageHeaderIntro from '../../components/pageHeaderIntro/PageHeaderIntro'
import SelectTag from '../../components/selectTag/SelectTag'
import FeatureCard from '../../components/featureCard/FeatureCard'
import { featureCard } from './data'
import { Link } from "react-router-dom"
import { HOME_SCREEN } from "../../router/routes"

// styles
import "./styles.scss"

const { TabPane } = Tabs  //Antd Tabs

const AddFeatureScreen = () => {

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

  const handleChange = (checked: any) => {
    console.log(`switch to ${checked}`);
  };

  // filtered Tabs===========

  const onChange = (key: any) => {
    console.log(key);

  }





  if (featureAdded) {
    return (
      <MainLayout>
        <Alert
          message="New Feature Flag created."
          type="success"
          closable
          style={{ width: 387 }}
        />
        <Row gutter={[82, 0]} className="feature-created-section">
          <Col md={12}>
            <Row gutter={[0, 16]}>
              <Col md={24}>
                <div className="breadcrumbs">

                </div>
                <div className="feature-created-header">
                  <PageHeaderIntro title="Copy code to create Feature Flag" />
                </div>
              </Col>
              <Col md={24} className="feature-tabs">
                <Tabs
                  defaultActiveKey="2"
                  onChange={onChange}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <TabPane tab="JavaScript" key="1" style={{ width: "50%" }}>
                    Content of Tab Pane 1
                  </TabPane>
                  <TabPane tab="React" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab="React Native" key="3">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </Col>
        </Row>
      </MainLayout>
    )
  } else {
    return (
      <MainLayout>
        <div className="add-feature-style">
          {/* Page-Header */}
          <div className='feature-header'>
            <Link to={HOME_SCREEN}>
              <img src={leftArrow} alt="left-arrow" />
            </Link>
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
                >
                  <span className="feature-input-title">Feature Name</span>
                  <Input placeholder='Advance analytics' className='field-input disabled-input' disabled />
                </Form.Item>
                <Form.Item
                  name="feature_ID"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please copy your id!',
                //   },
                // ]}
                >
                  <div className='feature-id'>
                    <div className="field-head">
                      <span className="feature-input-title">Feature ID</span>
                      <div className="feature-input-title">
                        <span>Copy this ID & use this in your code.</span>
                      </div>
                    </div>
                    <div className="analytics">
                      <Input type="button" value={"advance_analytics"} className='field-input' />
                      <img src={copy_icon} alt="copy-icon" />
                    </div>
                  </div>
                </Form.Item>
                <Form.Item
                  name="status_toggle"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please set your status!',
                //   },
                // ]}
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
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your description!',
                //   },
                // ]}
                >
                  <span className="feature-input-title">Description (optional)</span>
                  <Input placeholder='Fill in the label' className='field-input' />
                </Form.Item>
                <Form.Item
                  name="module"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your module!',
                //   },
                // ]}
                >
                  <span className="feature-input-title">Module</span>
                  <Input placeholder='Add Tags' className='field-input' />
                </Form.Item>
                <Form.Item
                  name="depends"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your depends!',
                //   },
                // ]}
                >
                  <div className='add-remove-input'>
                    <span className="feature-input-title">Depends On <img src={depend_icon} alt="depend-icon" className='warning-icons' /></span>
                    <div className="select-features">
                      <SelectTag />
                    </div>
                  </div>
                </Form.Item>
                <Form.Item>
                  <p className="instruction description">This will create the feature for all environments,
                    you can edit this feature per environment once the feature is created.</p>
                  <div className='create-feature'>
                    <Button type='primary' style={{ height: 44, width: 160 }} htmlType="submit">Create Feature</Button>
                  </div>
                </Form.Item>
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
}

export default AddFeatureScreen