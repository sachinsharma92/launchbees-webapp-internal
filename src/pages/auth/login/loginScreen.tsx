import { Button, Divider } from 'antd';
import get from 'lodash/get';
import { Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useSearchParams } from 'react-router-dom';
import { AuthLayout } from '../../../common/authLayout/authLayout';
import { login } from '../../../redux/actions/userActions';
import { IAppState } from '../../../redux/reducers/indexReducer';
import ROUTES from '../../../router';
import { AppleIcon, GoogleIcon } from '../../../assets/logo';

// Styles
import './styles.scss';

const { Title, Paragraph } = Typography;

/**
 * Props
 */
interface LoginScreenProps {

}

/**
 * 
 * @param props: LoginScreenProps
 * @returns JSX.Element
 */
function LoginScreen(props: LoginScreenProps) {

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
			<div className='login-page-section'>
				<Title level={1}>
					Sign Up
				</Title>

				<div className="button-section">
					<Button shape='round' className='btn-outline-primary' icon={<GoogleIcon />}>
						Sign up with Google
					</Button>

					<Button shape='round' className='btn-outline-primary' icon={<AppleIcon />}>
						Sign up with Apple
					</Button>

					<Divider plain>OR</Divider>

					<div className="signup-btn-style">

						<Button shape='round' type='primary'>
							Sign up with email
						</Button>

						<Paragraph className="description">
							By signing up, you agree to the Terms of Service and  Privacy Policy, including cookie use.
						</Paragraph>
					</div>
				</div>

				<div className="button-section-secondary">
					<Paragraph>Already have an account?</Paragraph>
					<Button shape='round' className='btn-outline-primary'>
						Log in
					</Button>
				</div>
			</div>
			LoginScreen
            <Button onClick={onLogin} >Login</Button>
		</AuthLayout>
	)
}

export default LoginScreen;
