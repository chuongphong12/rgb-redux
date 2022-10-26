import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Login = () => {
	return (
		<>
			<Box className=''>
				<Typography variant='h4' className='sign-in-title text-dark-blue mb-4'>Sign in to H2ND</Typography>

				<form className='w-100'>
					<Box className='form-group w-100'>
						<label className='has-float-label'>
							<input className='form-control m-0' placeholder='Email' type='email' />
							<span className='fl-label'>
                    <img src='assets/images/icons/email.svg' alt={'email'} /> Email
                </span>
							<div className='invalid-feedback'>
								<div>Email is required</div>
								<div>
									Email must be a valid email address
								</div>
								<div>
								</div>
							</div>
						</label>
						<label className='has-float-label'>
							<input className='form-control m-0' placeholder='Password'
										 type='password' />
							<span className='fl-label'>
                    <img src='assets/images/icons/lock.svg' /> Password
                </span>
							<div className='invalid-feedback'>
								<div>Password is required</div>
								<div></div>
							</div>

						</label>
					</Box>
					<div className='w-100'>
						<button className='btn btn-dark-blue' id='btn' type='submit'>
							Sign in
						</button>
					</div>
				</form>

				<Box className='mt-3 text-center'>
					<a className='text-link'>Forgot your password?</a>
					<Typography variant={'body1'} className='mt-2'>
						<span>Don’t have an account?&nbsp;</span>
						<a className='text-red-link c-pointer'>Register now</a>
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default Login;