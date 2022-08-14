import { Button, Checkbox, Form, Input, Divider, Row, Col } from 'antd';
import { Typography } from 'antd';
import { AuthLayout } from '../../../common/authLayout/authLayout';
import { AppleIcon, GoogleIcon } from '../../../assets/logo';

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
			<div className='new-login-section'>

				<div className='head'>
					<Button className='btn-none' icon={<img src={ArrowLeft} alt='' />} />
					<Title level={1}>
						Login with email
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
						label="Email or mobile phone number"
						name="emailMobile"
						rules={[{ message: 'Please input your username!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[{ message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>

					<Button shape='round' type='primary'>
						Sign up
					</Button>

					<div className='text-sec'>
						<Paragraph>
							By continuing, you agree to the Terms of use and Privacy Policy.
						</Paragraph>

						<Button type="link">Forget your password</Button>
					</div>
				</Form>

				<div className="button-section-secondary">
					<Divider plain>OR</Divider>
				</div>
				<div className="button-section">
					<Button shape='round' className='btn-outline-primary' icon={<GoogleIcon />}>
						Sign up with Google
					</Button>
					<Button shape='round' className='btn-outline-primary' icon={<AppleIcon />}>
						Sign up with Apple
					</Button>

				</div>
			</div>
			{/* LoginScreen
            <Button onClick={onLogin} >Login</Button> */}
		</AuthLayout>
	)
}

export default NewLoginScreen;
