import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks';
import { login } from '../../../redux/userSlice';
import { LoginCredentials, LoginYup } from '../../models/userModel';

const Login = () => {
	const dispatch = useAppDispatch();
	const {
		control,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm<LoginCredentials>({
		mode: 'onSubmit',
		resolver: yupResolver(LoginYup),
	});
	const [showPassword, setShowPassword] = useState(false);

	const onSubmit: SubmitHandler<LoginCredentials> = (data) => {
		console.log(data);
		dispatch(login(data));

		// reset();
	};
	return (
		<>
			<Box>
				<Typography variant='h4' className='sign-in-title text-dark-blue mb-9 font-bold'>
					Sign in to H2ND
				</Typography>

				<form className='w-full'>
					<Box className='w-full'>
						<Controller
							name={'email'}
							control={control}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<TextField
									variant='outlined'
									type={'text'}
									value={value || ''}
									onChange={(e) => onChange(e.target.value)}
									label='Email'
									error={error !== undefined ? true : false}
									helperText={error?.message}
									className='w-full mb-6'
								/>
							)}
						/>
						<Controller
							name={'password'}
							control={control}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<TextField
									type={showPassword ? 'text' : 'password'}
									value={value || ''}
									onChange={(e) => onChange(e.target.value)}
									className='mb-6 w-full'
									error={error !== undefined ? true : false}
									InputProps={{
										endAdornment: (
											<InputAdornment position='end'>
												<IconButton
													aria-label='toggle password visibility'
													onClick={() => setShowPassword(!showPassword)}
													edge='end'
												>
													{showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										),
									}}
									helperText={error?.message}
									label='Password'
								/>
							)}
						/>
					</Box>
				</form>

				<button className='btn btn-dark-blue w-full mb-10' onClick={handleSubmit(onSubmit)}>
					Sign in
				</button>

				<Box className='mt-3 text-center'>
					<p className='text-link'>Forgot your password?</p>
					<Typography component={'span'} variant={'body1'} className='mt-2 flex justify-center'>
						<span>Don’t have an account?&nbsp;</span>
						<p className='text-red-link c-pointer'>Register now</p>
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default Login;
