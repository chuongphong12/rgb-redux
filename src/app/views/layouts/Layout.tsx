import React from 'react';
import LayoutMain from './layout-main/LayoutMain';
import LayoutDefault from './layout-default/LayoutDefault';
import LayoutMainFullScreen from './layout-main-fullpage/LayoutMainFullScreen';
import LayoutReviewComparison from './layout-review-comparison/LayoutReviewComparison';
import LayoutMyPage from './layout-mypage/LayoutMyPage';

export enum ELayouts {
	Default = 'default-layout',
	Main = 'main-layout',
	MainFullScreen = 'main-full-screen-layout',
	ReviewComparison = 'review-comparison',
	MyPage = 'my-page'
}

const Layout = (useLayout: any) => {
	const layout = ELayouts;

	return (
		<>
			<div>
				{(() => {
					switch (useLayout) {
						case layout.Main:
							return <LayoutMain template={layout.Main} />;
						case layout.MainFullScreen:
							return <LayoutMainFullScreen />;
						case layout.ReviewComparison:
							return <LayoutReviewComparison />;
						case layout.MyPage:
							return <LayoutMyPage />;
						default:
							return <LayoutDefault />;
					}
				})()}
			</div>
		</>
	);
};

export default Layout;