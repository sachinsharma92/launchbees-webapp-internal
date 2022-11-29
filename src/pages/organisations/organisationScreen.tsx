import { Card, Col, Row, Table, Input, Button, Image, Avatar } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import MainLayout from '../../common/mainLayout';
import { FilterOutlined } from '@ant-design/icons';

// Styles
import './styles.scss';
import { Link } from 'react-router-dom';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);


interface DataType {
	key: React.Key;
	name: string;
	arr: any;
	mrr: any;
	accountManager: string;
	features: string;
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
		render: text => <Link to="/organisations/activity" className='link-style'>{text}</Link>,
		sorter: {
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
		title: 'Secondary AM',
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
		arr: '$ 15800',
		mrr: '$1366.60',
		features: '2 in Trial',
		accountManager: 'Ayush',
	},
	{
		key: '2',
		name: 'Jim Green',
		arr: '$ 15800',
		mrr: '$1366.60',
		features: '2 in Trial',
		accountManager: 'Ayush',
	},
	{
		key: '3',
		name: 'Joe Black',
		arr: '$ 15800',
		mrr: '$1366.60',
		features: '2 in Trial',
		accountManager: 'Ayush',
	},
	{
		key: '4',
		name: 'Jim Red',
		arr: '$ 15800',
		mrr: '$1366.60',
		features: '2 in Trial',
		accountManager: 'Ayush',
	},
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
	console.log('params', pagination, filters, sorter, extra);
};

function OrganisationScreen() {
	return (
		<MainLayout>
			<div className="organisation-style">
				<div className="head-section">
					<Row align='middle'>
						<Col sm={12}>
							<div className="info-section">
								<h3 className="title3">
									Organisations
								</h3>
								<p className="description">
									Use this page to see all the features enabled for oragnisation.
								</p>
							</div>
						</Col>
					</Row>
				</div>

				<div className='table-card-design'>
					<Card>
						<div className="head-section">
							<Row align='middle'>
								<Col sm={18}>
									<div className="info-section">
										<h4 className="title4">
											Enable features for customers
										</h4>
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

export default OrganisationScreen;
