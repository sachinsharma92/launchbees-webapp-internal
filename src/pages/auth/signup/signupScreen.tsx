import { Button, Checkbox, Form, Input, Divider, Typography } from 'antd';
import get from 'lodash/get';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useSearchParams } from 'react-router-dom';
import { login } from '../../../redux/actions/userActions';
import { IAppState } from '../../../redux/reducers/indexReducer';
import { AuthLayout } from '../../../common/authLayout/authLayout';
import { AppleIcon, GoogleIcon } from '../../../assets/logo';
import { API_BASE_URL } from '../../../remote/axios';
import { LOGIN_WITH_GOOGLE } from '../../../remote/apis/apiRoutes';

// Styles
import './styles.scss';
import ROUTES from '../../../router';


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
		window.open(API_BASE_URL + LOGIN_WITH_GOOGLE, '_blank', 'noopener,noreferrer');
	}


	const dispatch = useDispatch();
	let [searchParams, setSearchParams] = useSearchParams();
	let isLoggedIn = useSelector((state: IAppState) => get(state, 'userState.accessToken'));

	const onLogin = () => {
		dispatch(login(987654321, '2932'));
	}

	if (isLoggedIn) {
		return <Navigate to={searchParams.get("redirect") || ROUTES.HOME_SCREEN} />;
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
						rules={[{ message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item name="remember" valuePropName="checked">
						<Checkbox>I agree to our Terms of use & Privacy Policy </Checkbox>
					</Form.Item>

				</Form>

				<div className="button-section-secondary">
					<Button shape='round' onClick={onLogin} type='primary'>
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
            */}
			<Button onClick={onLogin} >Login</Button>
		</AuthLayout>
	)
}

export default SignupScreen;
