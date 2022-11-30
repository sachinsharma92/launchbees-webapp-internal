import { Space, Table, Tag, Button, Col, Row, Card, Input, Switch, Menu, Dropdown } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import MainLayout from '../../common/mainLayout';
import requireAuth from '../../hocs/requireAuth'
import { ArrowRightOutlined, FilterOutlined, MoreOutlined, PlusCircleOutlined, SmileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);
const onChange = (checked: boolean) => {
	console.log(`switch to ${checked}`);
};
interface DataType {
	key: string;
	name: string;
	tags: string[];
	targetUsers: any;
	createdOn: string;
}


const menu = (
	<Menu
		items={[
			{
				key: '1',
				label: (
					<div className='menu-bg-style item-custom'>
						Feature Code
					</div>
				),
				disabled: true,
			},
			{
				key: '2',
				label: (
					<a className='item-custom' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
						Edit Feature
					</a>
				),
			},
		]}
	/>
);

const columns: ColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: text => <div>
			<h5 className="title5">Feature name</h5>
			{text}
		</div>,
		sorter: {
			multiple: 3,
		},
	},
	{
		title: 'Tags',
		key: 'tags',
		dataIndex: 'tags',
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
		title: 'Target users',
		dataIndex: 'targetUsers',
		key: 'targetUsers',
		render: text => <div>
			<Button type="primary" shape="round">Define <ArrowRightOutlined /></Button>
			<div className='target-users'>
				5 Enterprise
				<small>{text}</small>
			</div>

		</div>,
	},
	{
		title: 'Created on',
		dataIndex: 'createdOn',
		key: 'createdOn',
	},
	{
		title: 'Status',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Switch defaultChecked onChange={onChange} />
				<Dropdown overlay={menu} overlayClassName="status-dropdown">
					<Button type="link" className='dropdown-btn-link' onClick={e => e.preventDefault()}>
						<MoreOutlined />
					</Button>
				</Dropdown>
			</Space>
		),
	},
];

const data: DataType[] = [
	{
		key: '1',
		name: 'chat_feature',
		targetUsers: '20 Individual Users',
		createdOn: '5/12/2022',
		tags: ['Tag 1', 'Tag 2'],
	},
	{
		key: '2',
		name: 'chat_feature',
		targetUsers: '20 Individual Users',
		createdOn: '5/12/2022',
		tags: ['Tag 1', 'Tag 2'],
	},
	{
		key: '3',
		name: 'chat_feature',
		targetUsers: '20 Individual Users',
		createdOn: '5/12/2022',
		tags: ['Tag 1', 'Tag 2'],
	},
];

function HomeScreen() {
	// const dispatch = useDispatch();
	// const onLogout = () => {
	// 	dispatch(logout());
	// }

	return (
		<MainLayout>
			<div className="homepage-style">
				<div className="head-section">
					<Row align='middle'>
						<Col sm={14}>
							<div className="info-section">
								<h3 className="title3 title-semibold">
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

				<div className="table-data table-card-design">
					<Card>
						<div className="head-section">
							<Row align='middle'>
								<Col sm={18}>
									<div className="info-section">
										<h4 className="title4">
											Flags
										</h4>
									</div>
								</Col>
								<Col sm={6}>
									<div className="search-section">
										<Search placeholder="Search" allowClear onSearch={onSearch} />
										<Button className='filter-btn'>
											<FilterOutlined />
										</Button>
									</div>
								</Col>
							</Row>
						</div>
						<Table columns={columns} dataSource={data} />
					</Card>
				</div>
			</div>
			{/* HomeScreen */}
			{/* 			<Button onClick={onLogout}>Logout</Button> */}
		</MainLayout>
	)
}

export default requireAuth(HomeScreen);
