import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';

const Footer = (props: any) => {
	const [toggleSupport, setToggleSupport] = useState(true);

	return (
		<>
			<footer>
				<div className='ft-grid-top'>
					<div className='ft-rgb'>
						<h4>AI Color Confirmation System</h4>
					</div>
					<div className='ft-sc-content'>
						<p>
							상호명 : 주식회사 에이치세컨드 | 도로명주소 : 서울특별시 강동구 천호대로 1139 강동그린타워 209호 | 전화 : 070-8879-0726 | 사업자등록번호 :
							788-88-02033 | 통신판매업신고 : 2022-서울강동-0538 | 대표자:함충민
						</p>
					</div>
					<div className='ft-ab-ser-sup'>
						{/* Support */}
						<div className='ft-ab-ser-sup-item d-inline d-md-none'>
							<h6 onClick={() => setToggleSupport(!toggleSupport)}
									className='d-flex align-items-center justify-content-between arrow-cus arrow-right-cus d-inline'>
								EMAIL
							</h6>
							<Collapse in={toggleSupport} unmountOnExit>
								<ul>
									<li>
										<p style={{ cursor: 'default' }}>ai.color.confirm@gmail.com</p>
									</li>
								</ul>
							</Collapse>

							<div className='ft-ab-ser-sup-item d-none d-md-inline'>
								<h6>
									EMAIL
								</h6>
								<ul>
									<li>
										<p style={{ cursor: 'default' }}>ai.color.confirm@gmail.com</p>
									</li>
								</ul>
							</div>
						</div>

						{/* About */}
						<div className='ft-ab-ser-sup-item d-none d-md-inline'>
							<h6>
								ABOUT
							</h6>
							<ul>
								<li>
									<p>Color Comparison
									</p>
								</li>
								<li>
									<p>Help
									</p>
								</li>
							</ul>
						</div>
						<div className='ft-ab-ser-sup-item d-inline d-md-none'>
							<h6 className='d-flex align-items-center justify-content-between arrow-cus arrow-right-cus d-inline'>
								ABOUT
							</h6>
							<ul>
								<li>
									<p>Color Comparison</p>
								</li>
								<li>
									<p>Help</p>
								</li>
							</ul>
						</div>

						{/*// <!-- Services -->*/}
						<div className='ft-ab-ser-sup-item d-none d-md-inline'>
							<h6>
								SERVICES
							</h6>
							<ul>
								<li>
									<p>Terms of service</p>
								</li>
								<li>
									<p>Privacy Policy</p>
								</li>
								<li>
									<p>Personal Information</p>
								</li>
							</ul>
						</div>
						<div className='ft-ab-ser-sup-item d-inline d-md-none'>
							<h6

								className='d-flex align-items-center justify-content-between arrow-cus arrow-right-cus d-inline'>
								SERVICES
							</h6>
							<ul>
								<li>
									<p>Terms of service</p>
								</li>
								<li>
									<p>Privacy Policy</p>
								</li>
								<li>
									<p>Personal Information</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr />
				<div className='ft-grid-bottom'>
					<p>© AI color confirmation system. All rights reserved</p>
					<p>English</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;