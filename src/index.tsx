import { CircularProgress } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import { AuthProvider } from './app/utils/context/AuthProvider';
import NotFound from './app/views/404';
import GuideLine from './app/views/color-comparison/guide-line-comparison/GuideLine';
import Home from './app/views/home/Home';
import LayoutMainFullScreen from './app/views/layouts/layout-main-fullpage/LayoutMainFullScreen';
import LayoutMyPage from './app/views/layouts/layout-mypage/LayoutMyPage';
import MyAccount from './app/views/my-page/my-account/MyAccount';
import MyPage from './app/views/my-page/MyPage';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route
				index
				element={
					<LayoutMainFullScreen>
						<Home />
					</LayoutMainFullScreen>
				}
			/>
			<Route path='color-comparison' element={<LayoutMyPage />}
			>
				<Route path='guideline' element={<GuideLine />} />
			</Route>
			<Route path='my-page' element={<LayoutMyPage />}>
				<Route
					path='my-account'
					element={
						<MyPage>
							<MyAccount />
						</MyPage>
					}
				/>
			</Route>
			<Route path='*' element={<NotFound />} />
		</Route>
	)
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<AuthProvider>
				<RouterProvider router={router} fallbackElement={<CircularProgress />} />
			</AuthProvider>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
