export class RouterLinkNav {
	static readonly Home = '/home';
	static readonly Product = '/product';
	static readonly COLOR_COMPARISON = '/color-comparison';
	static readonly COLOR_COMPARISON_GUIDELINE = '/color-comparison/guideline';

	static readonly COLOR_COMPARISON_CHOOSE = '/color-comparison/create/choose';
	static readonly COLOR_COMPARISON_MODE = '/color-comparison/create/mode';
	static readonly COLOR_COMPARISON_PAYMENT = '/color-comparison/create/payment';

	static readonly COLOR_COMPARISON_RESULT = '/color-comparison/result/:id';

	static readonly REVIEW_COLOR_COMPARISON_RESULT =
		'/review-color-comparison-result/:number';

	static readonly MY_PAGE = '/my-page';
	static readonly MY_ACCOUNT_PAGE = 'my-page/my-account';
	static readonly MY_PHOTO_GALLERY_PAGE = 'my-page/photo-gallery';
	static readonly MY_COLOR_COMPARISON_HISTORY_PAGE = 'my-page/comparison-history';
	static readonly MY_PAGE_HARDWARE_MANAGING = '/my-page/hardware-managing';
	static readonly HELP = '/help';

	static readonly DEFAULT = RouterLinkNav.Home;
}
