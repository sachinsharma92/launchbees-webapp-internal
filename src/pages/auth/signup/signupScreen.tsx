import { Button, Checkbox, Form, Input, Divider, Row, Col } from 'antd';
import { Typography } from 'antd';
import { AuthLayout } from '../../../common/authLayout/authLayout';
import { AppleIcon, GoogleIcon } from '../../../assets/logo';

// Styles
import './styles.scss';
import { API_BASE_URL } from '../../../remote/axios';
import { LOGIN_WITH_GOOGLE } from '../../../remote/apis/apiRoutes';

const { Title, Paragraph } = Typography;

/**
 * Props
 */
interface SignupScreenProps {

}

function SignupScreen(props: SignupScreenProps) {
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	const onLoginWithGoogle = () => {
		window.open(API_BASE_URL+LOGIN_WITH_GOOGLE, '_blank', 'noopener,noreferrer');
	}

	return (
		<AuthLayout>
			<div className='signup-page-section'>
				<Title level={1}>
					Log in
				</Title>

				<Form
					name="basic"
					layout='vertical'
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					{/* <Row gutter={16}>
						<Col sm={12}>
							<Form.Item
								label="First name"
								name="firstname"
								rules={[{ message: 'Please input your username!' }]}
							>
								<Input />
							</Form.Item>
						</Col>
						<Col sm={12}>
							<Form.Item
								label="Last Name"
								name="lastname"
								rules={[{ message: 'Please input your username!' }]}
							>
								<Input />
							</Form.Item>
						</Col>
					</Row> */}

					<Form.Item
						label="Email Address"
						name="emailaddress"
						rules={[{ message: 'Please input your username!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[{message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item name="remember" valuePropName="checked">
						<Checkbox>I agree to our Terms of use & Privacy Policy </Checkbox>
					</Form.Item>

				</Form>

				<div className="button-section-secondary">
					<Button shape='round' type='primary'>
						Login
					</Button>
					<Paragraph>
						Already have an account? Log in
					</Paragraph>
					<Divider plain>OR</Divider>
				</div>
				<div className="button-section">
					<Button shape='round' className='btn-outline-primary' icon={<GoogleIcon />} onClick={onLoginWithGoogle}>
						Login with Google
					</Button>
					<Button shape='round' className='btn-outline-primary' icon={<AppleIcon />}>
						Login with Apple
					</Button>

				</div>
			</div>
			{/* LoginScreen
            <Button onClick={onLogin} >Login</Button> */}
		</AuthLayout>
	)
}

export default SignupScreen;
