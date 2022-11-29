import { Card, Col, Row, Table, Input, Button, Image, Avatar } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import MainLayout from '../../common/mainLayout';
import { FilterOutlined } from '@ant-design/icons';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"

// Styles
import './styles.scss';
import Meta from 'antd/lib/card/Meta';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  arr: any;
  mrr: any;
  accountManager: string;
  features: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <div className='name-section'>
      <Avatar size={30} shape="square" src="https://joeschmoe.io/api/v1/random" />
      {text}
    </div>,
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: '$ ARR',
    dataIndex: 'arr',
  },
  {
    title: '$ MRR',
    dataIndex: 'mrr',
  },
  {
    title: 'Features',
    dataIndex: 'features',
    render: text => <div className='features-section'>
      <p>4 enabled</p>
      <p>{text}</p>
    </div>,
  },
  {
    title: 'Primary AM',
    dataIndex: 'accountManager',
    render: text => <div className='account-manager-section'>
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      {text}
    </div>,
  },
  {
    title: 'Primary AM',
    dataIndex: 'accountManager',
    render: text => <div className='account-manager-section'>
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      {text}
    </div>,
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 20,
    arr: '$ 15800',
    mrr: '$1366.60',
    features: '2 in Trial',
    accountManager: 'Ayush',
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 20,
    arr: '$ 15800',
    mrr: '$1366.60',
    features: '2 in Trial',
    accountManager: 'Ayush',
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 20,
    arr: '$ 15800',
    mrr: '$1366.60',
    features: '2 in Trial',
    accountManager: 'Ayush',
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 20,
    arr: '$ 15800',
    mrr: '$1366.60',
    features: '2 in Trial',
    accountManager: 'Ayush',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

function OrganisationActivity() {
  return (
    <MainLayout>
      <div className="organisation-style">
        <div className="head-section">
          <Breadcrumb head={"Feature"} sub_head={"Feature Code"} />
        </div>

        <Card className='info-card'>
          <div className='flex-section'>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Gitlab"
              description="admin@gitlab.com"
            />

            <div className='account-manager-sec'>
              <p className="subtitle">
                Account Manager
              </p>

              <div className='account-manager'>
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <p>Ayush</p>
              </div>
            </div>

            <div className='doller-sec'>
              <div>
                <p className="subtitle">
                  $ 1366.6
                </p>
                <div>MRR</div>
              </div>

              <div>
                <p className="subtitle">
                  $ 15800
                </p>
                <div>ARR</div>
              </div>
            </div>

            <div className='features-sec'>
              <div className='item'>
                <p className="subtitle">
                  Total Features
                </p>
                <div>7</div>
              </div>

              <div className='item'>
                <p className="subtitle">
                  Features Active
                </p>
                <div>6</div>
              </div>
              <div className='item'>
                <p className="subtitle">
                  Features Trials
                </p>
                <div>1</div>
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
                    <h3 className="title3">
                      Features by Users
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

            <Table columns={columns} dataSource={data} onChange={onChange} />
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}

export default OrganisationActivity;
