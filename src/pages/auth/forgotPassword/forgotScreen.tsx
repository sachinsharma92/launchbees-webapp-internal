import { Button, Form, Input } from 'antd';
import { Typography } from 'antd';
import { AuthLayout } from '../../../common/authLayout/authLayout';
import ArrowLeft from "../../../assets/icons/arrow-left.svg"

// Styles
import './styles.scss';

const { Title, Paragraph } = Typography;

/**
 * Props
 */
interface NewLoginScreenProps {

}

function NewLoginScreen(props: NewLoginScreenProps) {
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<AuthLayout>
			<div className='forgot-section-style'>
				<div className='head'>
					<Button className='btn-none' icon={<img src={ArrowLeft} alt='' />} />
					<Title level={1}>
						Password Reset
					</Title>
				</div>

				<Form
					name="basic"
					layout='vertical'
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="Registered Email"
						name="emailMobile"
						rules={[{ message: 'Please input your username!' }]}
					>
						<Input />
					</Form.Item>

					<Button shape='round' type='primary'>
						Sign up
					</Button>

					<div className='text-sec'>
						<Paragraph>
							By continuing, you agree to the Terms of use and Privacy Policy.
						</Paragraph>
					</div>
				</Form>
			</div>
		</AuthLayout>
	)
}

export default NewLoginScreen;
