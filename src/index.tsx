import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import NotFound from './app/views/404';
import GuideLine from './app/views/color-comparison/guide-line-comparison/GuideLine';
import Home from './app/views/home/Home';
import LayoutMainFullScreen from './app/views/layouts/layout-main-fullpage/LayoutMainFullScreen';
import LayoutMyPage from './app/views/layouts/layout-mypage/LayoutMyPage';
import MyAccount from './app/views/my-page/my-account/MyAccount';
import MyPage from './app/views/my-page/MyPage';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './app/utils/AuthProvider';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: (
					<LayoutMainFullScreen>
						<Home />
					</LayoutMainFullScreen>
				),
			},
			{
				path: 'color-comparison',
				children: [
					{
						path: 'guideline',
						element: (
							<LayoutMyPage>
								<GuideLine />
							</LayoutMyPage>
						),
					},
				],
			},
			{
				path: 'my-page',
				element: (
					<LayoutMyPage>
						<MyPage />
					</LayoutMyPage>
				),
				children: [
					{
						index: true,
						path: 'my-account',
						element: <MyAccount />,
					},
				],
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
