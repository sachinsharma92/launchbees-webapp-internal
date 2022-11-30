import { Col, Input, Row, Button, Alert, Tabs, Typography, Card, Select } from 'antd'
import PageHeaderIntro from '../../components/pageHeaderIntro/PageHeaderIntro'
import { packages_cmd } from './data'
import CopyField from "../../components/copyField/CopyField"
import share_icon from "../../assets/icons/share.svg"
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"
import { ArrowRightOutlined } from '@ant-design/icons'

// styles
import "./styles.scss"

const { TabPane } = Tabs  //Antd Tabs
const { Paragraph } = Typography

const FeatureCode = (props: any) => {
  const teamChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange = (key: any) => {
    console.log(key);
  }

  const onSearch = (value: string) => console.log(value);

  return (
    <>
      <Alert
        message="New Feature Flag created."
        type="success"
        showIcon
        closable
        style={{ width: 387 }}
      />
      <Breadcrumb head={"Feature"} sub_head={"Feature Code"} />
      <Row gutter={[77, 0]} className="feature-created-section">
        <Col md={14}>
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
                <TabPane tab="JavaScript" key="1">
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
              <Button type='primary' size="large" onClick={props.clickHandler}>Set Target <ArrowRightOutlined /></Button>
            </Col>
          </Row>
        </Col>
        <Col md={10}>
          <Row gutter={[0, 21]} className="share-card-container">
            <Col className='code-card'>
              <Card extra={<img className='card-image' src={share_icon} alt="img" />} title="Invite your Engineering Team" className="my-card">
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
              <Card extra={<img className='card-image' src={share_icon} alt="img" />} title="Share Code Snippet" className="my-card">
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
    </>
  )
}

export default FeatureCode