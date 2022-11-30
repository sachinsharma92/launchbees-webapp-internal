import { useState } from 'react';
import { Card, Col, Row, Table, Input, Button, Tag, Avatar, Space, Switch, Modal } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import MainLayout from '../../common/mainLayout';
import { FilterOutlined } from '@ant-design/icons';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"

// Styles
import './styles.scss';
const { Search } = Input;
const onSearch = (value: string) => console.log(value);
interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  arr: any;
  dependencies: any;
  accountManager: string;
  productOwner: string;
  tags: string[];
  created: string;
  status: any;
}


function OrganisationActivity() {
  const [statusModal, setStatusModal] = useState(false);
  const enableChange = (checked: boolean) => {
    setStatusModal(!statusModal)
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <div className='name-section'>
        <h5 className="title5 title-semibold">Advanced analytics</h5>
        {text}
      </div>,
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (_, { tags }) => (
        <div className='tag-sec'>
          {tags.map(tag => {
            return (
              <Tag key={tag} className='tag-default'>
                {tag}
              </Tag>
            );
          })}
        </div>
      ),
    },
    {
      title: 'Dependencies',
      dataIndex: 'dependencies',
    },
    {
      title: 'Product Owner',
      dataIndex: 'productOwner',
    },
    {
      title: 'created',
      dataIndex: 'created',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: text => <div className='status'>
        {text}
      </div>,
    },
    {
      title: 'Enable',
      dataIndex: 'accountManager',
      render: () => (
        <Space size="middle">
          <Switch defaultChecked onChange={enableChange} />
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'Advanced analytics',
      chinese: 20,
      arr: '$ 15800',
      dependencies: '---',
      tags: ['Beta'],
      productOwner: 'Sukirti',
      accountManager: 'Ayush',
      created: '22/11/2022',
      status: 'Inavitve'
    },
    {
      key: '2',
      name: 'Advanced analytics',
      chinese: 20,
      arr: '$ 15800',
      dependencies: 'Chrome version > 107',
      tags: ['Open'],
      productOwner: 'Sukirti',
      accountManager: 'Ayush',
      created: '22/11/2022',
      status: 'Active'
    },
  ];

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <MainLayout>
      <div className="organisation-style">
        <div className="head-section">
          <Breadcrumb head={"Feature"} sub_head={"Feature Code"} />
        </div>

        <Card className='info-card'>
          <div className='flex-section'>
            <div>
              <h4 className="title4 title-semibold">Microsoft</h4>
              <Button className='btn-outline btn-sm'>Activity Log</Button>
            </div>
            <div className='primary-sec'>
              <p className="subtitle">
                Primary AM
              </p>

              <div className='account-manager'>
                <Avatar size={24} src="https://joeschmoe.io/api/v1/random" />
                <p className='name'>Ayush</p>
              </div>
            </div>

            <div className='primary-sec'>
              <p className="subtitle">
                Secondary AM
              </p>

              <div className='account-manager'>
                <Avatar size={24} src="https://joeschmoe.io/api/v1/random" />
                <p className='name'>Ayush</p>
              </div>
            </div>

            <div className='doller-sec'>
              <div>
                <h4 className="title4">
                  $ 1366.6
                </h4>
                <div>MRR</div>
              </div>

              <div>
                <h4 className="title4">
                  $ 15800
                </h4>
                <div>ARR</div>
              </div>
            </div>

            <div className='features-sec'>
              <div className='item'>
                <p className="subtitle">
                  Total Features
                </p>
                <div className='blue'>7</div>
              </div>

              <div className='item'>
                <p className="subtitle">
                  Features Active
                </p>
                <div className='green'>6</div>
              </div>
              <div className='item'>
                <p className="subtitle">
                  Features Trials
                </p>
                <div className='error'>1</div>
              </div>
            </div>
          </div>
        </Card>

        <div className='table-card-design'>
          <Card>
            <div className="head-section">
              <Row align='middle'>
                <Col sm={18}>
                  <div className="info-section">
                    <h3 className="title3 title-semibold">
                      Features
                    </h3>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="search-section">
                    <Search placeholder="input search text" allowClear onSearch={onSearch} />
                    <Button className='filter-btn'>
                      <FilterOutlined />
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>

            <Table pagination={false} columns={columns} dataSource={data} onChange={onChange} />
          </Card>
        </div>
      </div>

      <Modal
        centered
        className="feature-status-modal"
        visible={statusModal}
        onCancel={() => setStatusModal(false)}
        footer={null}
        closable={false}
      >
        <div className="modal-card">
          <h4 className="title4">Sure the type of enablement</h4>
          <div className="button-section">
            <Button size="large" className='btn-outline' onClick={() => setStatusModal(false)}>Start trial</Button>
            <Button type="primary" size="large">Enable Directly</Button>
          </div>
        </div>
      </Modal>
    </MainLayout>
  )
}

export default OrganisationActivity;
