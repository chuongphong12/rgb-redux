const MyAccount = () => {
	return (
		<>
			<div className="card">
				<div className='my-account'>
					<div className='my-account__title mc-title-sm'>
						<p className='title'>My Account</p>
					</div>
				</div>
			</div>
			<div className='bottom-btn'>
				<button className='btn btn-light-text-dark' type='button'>
					Cancel
				</button>
				<button className='btn btn-dark-blue' type='submit'>
					Save
				</button>
			</div>
		</>
	);
};

export default MyAccount;
