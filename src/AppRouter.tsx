import { Spin } from 'antd';
import get from 'lodash/get';
import { lazy, Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSuccess from './pages/auth/loginSuccess/loginSuccess';
import TargetAudience from './pages/targetAudience/TargetAudience';
import * as ROUTES from './router/routes';

/**
 * Screens
 */
const HomeScreen = lazy(() => import(/* webpackChunkName: "HomeScreen" */ './pages/home/homeScreen'));
const AddFeature = lazy(() => import(/* webpackChunkName: "HomeScreen" */ './pages/addFeature/addFeature'));
const LoginScreen = lazy(() => import(/* webpackChunkName: "LoginScreen" */ './pages/auth/login/loginScreen'));
const SignupScreen = lazy(() => import(/* webpackChunkName: "LoginScreen" */ './pages/auth/signup/signupScreen'));
const NewLoginScreen = lazy(() => import(/* webpackChunkName: "LoginScreen" */ './pages/auth/newLogin/newLoginScreen'));
const ForgotScreen = lazy(() => import(/* webpackChunkName: "LoginScreen" */ './pages/auth/forgotPassword/forgotScreen'));
const OrganisationScreen = lazy(() => import(/* webpackChunkName: "LoginScreen" */ './pages/organisations/organisationScreen'));
const OrganisationActivity = lazy(() => import(/* webpackChunkName: "LoginScreen" */ './pages/organisations/activity'));

const AppRouter = () => {
	const isLoggedIn = useSelector((state) => get(state, 'auth.isLoggedIn'));
	const [isLoading, setIsLoading] = useState(false);

	return (
		<Spin spinning={isLoading}>
			<Suspense fallback={(<Spin spinning={true} />)} >
				<Router>
					<Routes>
						<Route path={ROUTES.HOME_SCREEN} element={<HomeScreen />} />
						<Route path={ROUTES.LOGIN_SCREEN} element={<SignupScreen />} />
						<Route path={"/target-audience"} element={<TargetAudience />} />
						<Route path={ROUTES.SIGNUP_SCREEN} element={<LoginScreen />} />
						<Route path={ROUTES.NEW_LOGIN_SCREEN} element={<NewLoginScreen />} />
						<Route path={ROUTES.FORGOT_SCREEN} element={<ForgotScreen />} />
						<Route path={ROUTES.LOGIN_SUCCESS} element={<LoginSuccess />} />
						<Route path={ROUTES.ADD_FEATURE_SCREEN} element={<AddFeature />} />
						<Route path={ROUTES.ORGANISATIONS_SCREEN} element={<OrganisationScreen />} />
						<Route path={ROUTES.ORGANISATION_ACTIVITY_SCREEN} element={<OrganisationActivity />} />
					</Routes>
				</Router>
			</Suspense>
		</Spin>
	);
};

export default AppRouter;
