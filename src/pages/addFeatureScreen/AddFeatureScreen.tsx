import { useState } from "react"
import MainLayout from '../../common/mainLayout'
import { Col, Form, Input, Row, Switch, Button, Alert, Tabs, Typography, Tooltip, Card, Select } from 'antd'
import leftArrow from "../../assets/icons/arrow-left.svg"
import depend_icon from "../../assets/icons/depend-icon.svg"
import PageHeaderIntro from '../../components/pageHeaderIntro/PageHeaderIntro'
import SelectTag from '../../components/selectTag/SelectTag'
import FeatureCard from '../../components/featureCard/FeatureCard'
import { featureCard, packages_cmd } from './data'
import { Link } from "react-router-dom"
import { HOME_SCREEN } from "../../router/routes"
import { CopyOutlined } from "@ant-design/icons"
import CopyField from "../../components/copyField/CopyField"
import share_icon from "../../assets/icons/share.svg"
// styles
import "./styles.scss"
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"

const { TabPane } = Tabs  //Antd Tabs
const { Paragraph } = Typography

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


  const teamChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  // filtered Tabs===========

  const onChange = (key: any) => {
    console.log(key);

  }

  const onSearch = (value: string) => console.log(value);




  if (featureAdded) {
    return (
      <MainLayout>
        <Alert
          message="New Feature Flag created."
          type="success"
          showIcon
          closable
          style={{ width: 387 }}
        />
        {/* Breadcrumb */}
        <Breadcrumb head={"Feature"} sub_head={"Feature Code"} />
        {/*  */}
        <Row gutter={[77, 0]} className="feature-created-section">
          <Col md={12}>
            <Row>
              <Col md={24}>
                <div className="feature-created-header">
                  <PageHeaderIntro title="SDK Integration" />
                  <Paragraph className="description">Use this detail pages to connect launchbees with your Application.</Paragraph>
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
                    <div className="packages-to-copy">
                      {
                        packages_cmd?.map((curElm, i) => {
                          return (
                            <CopyField key={i} title={curElm.package_title} cmdVal={curElm.code_cmd} className={curElm.className} />
                          )
                        })

                      }
                    </div>
                  </TabPane>
                  <TabPane tab="React Native" key="3">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </Col>
          <Col md={12}>
            <Row gutter={[0, 21]} className="share-card-container">
              <Col className='code-card'>
                <Card style={{ width: 385 }} extra={<img className='card-image' src={share_icon} alt="img" />} title="Invite your Engineering Team" className="my-card">
                  <Paragraph className="detail description">Share the invite to your enginering team.</Paragraph>
                  <div className="card-input">
                    <Input defaultValue={"ayush.prshr9@gmail.com"} />
                    <div className="team-select">
                      <Select
                        defaultValue="Admin"
                        style={{
                          width: 100,
                        }}
                        onChange={teamChange}
                        options={[
                          {
                            value: 'admin',
                            label: 'Admin',
                          },
                          {
                            value: 'user',
                            label: 'User',
                          },
                        ]}
                      />
                    </div>
                  </div>
                  <Button type="primary" className="btn- btn-invite">Invite</Button>
                </Card>
              </Col>
              <Col className='code-card'>
                <Card style={{ width: 385 }} extra={<img className='card-image' src={share_icon} alt="img" />} title="Invite your Engineering Team" className="my-card">
                  <Paragraph className="detail description">You can share the code snippet from here.</Paragraph>
                  <div className="card-input search-card">
                    <Input.Search
                      placeholder="Enter email"
                      allowClear
                      enterButton="Search"
                      size="large"
                      onSearch={onSearch}
                    />
                  </div>
                </Card>
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
                      <Input.Group compact>
                        <Input
                          defaultValue="advance_analytics"
                          className="field-input"
                        />
                        <Tooltip title="copy git url">
                          <Button icon={<CopyOutlined />} />
                        </Tooltip>
                      </Input.Group>
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
              <Row gutter={[0, 40]} className='feature-container'>
                {
                  featureCard?.map((curElm, i) => {
                    return (
                      <Col key={i} className="feature-card feature__flag-dependency">
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