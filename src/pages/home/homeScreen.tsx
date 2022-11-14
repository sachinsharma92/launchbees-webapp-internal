import { Space, Table, Tag, Button, Col, Row, Card } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch } from 'react-redux';
import MainLayout from '../../common/mainLayout';
import requireAuth from '../../hocs/requireAuth'
import { logout } from '../../redux/actions/userActions';
import { PlusCircleOutlined } from '@ant-design/icons';

// Styles
import './styles.scss';
import { Link } from 'react-router-dom';


interface DataType {
	key: string;
	name: string;
	tags: string[];
	targetUsers: string;
	createdOn: number;
}


const columns: ColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: text => <a>{text}</a>,
	},
	{
		title: 'Tags',
		key: 'tags',
		dataIndex: 'tags',
		render: (_, { tags }) => (
			<>
				{tags.map(tag => {
					let color = tag.length > 5 ? 'geekblue' : 'green';
					if (tag === 'loser') {
						color = 'volcano';
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</>
		),
	},
	{
		title: 'Target users',
		dataIndex: 'targetUsers',
		key: 'targetUsers',
	},
	{
		title: 'Action',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<a>Invite {record.name}</a>
				<a>Delete</a>
			</Space>
		),
	},
	{
		title: 'Created on',
		dataIndex: 'createdOn',
		key: 'createdOn',
	},
];

const data: DataType[] = [
	{
		key: '1',
		name: 'John Brown',
		createdOn: 32,
		targetUsers: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		createdOn: 42,
		targetUsers: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		createdOn: 32,
		targetUsers: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
];

function HomeScreen() {
	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(logout());
	}

	return (
		<MainLayout>
			<div className="homepage-style">
				<div className="head-section">
					<Row align='middle'>
						<Col sm={14}>
							<div className="info-section">
								<h3 className="title3">
									Feature Flags
								</h3>
								<p className="description">
									Use this page to see all feature flags in this Environment. You can select a feature flag to manage environment specific targeting & roll-out rules.
								</p>
							</div>
						</Col>
						<Col sm={10}>
							<div className="btn-right">
								<Link to="/add-feature">
									<Button type="primary" className='btn-plus'>
										Add Feature <PlusCircleOutlined />
									</Button>
								</Link>
							</div>
						</Col>
					</Row>
				</div>

				<div className="guide-sec">
					<div className='alert-info'>SDK is not installed. Follow our <span> integration Guide</span></div>
				</div>

				<div className="table-data">
					<Card>
						<Table columns={columns} dataSource={data} />
					</Card>
				</div>
			</div>
			{/* HomeScreen */}
			<Button onClick={onLogout}>Logout</Button>
		</MainLayout>
	)
}

export default requireAuth(HomeScreen);
