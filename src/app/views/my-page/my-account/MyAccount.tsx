import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import './MyAccount.scss';

const MyAccount = () => {
	const schema = yup
		.object({
			password: yup.string().required(),
			newPassword: yup.string().required(),
		})
		.required();

	const defaultValues = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		newPassword: '',
		passwordConfirmed: '',
		countryCode: '',
		companyName: '',
	};

	const {
		getValues,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(schema),
	});
	const onSubmit = (data: any) => console.log(data);

	return (
		<>
			<Box className='card'>
				<Box className='my-account'>
					<Box className='my-account__title mc-title-sm'>
						<Typography variant='body1' className='title'>
							My Account
						</Typography>
					</Box>
					<form className='my-account__form mc-content-sm'>
						<Box className='account-info'>
							<Typography variant='body1' className='section-label'>
								Account Information
							</Typography>
							<hr />
							<Grid container rowSpacing={5} direction={'row'}>
								<Grid item xs={6}>
									<label>First Name</label>
								</Grid>
								<Grid item xs={6}>
									<Controller
										control={control}
										name='firstName'
										render={({ field: { onChange, value } }) => (
											<TextField
												sx={{ width: '100%' }}
												size='small'
												id='outlined-basic'
												variant='outlined'
												inputProps={{ readOnly: true }}
											/>
										)}
									/>
								</Grid>

								<Grid item xs={6}>
									<label>Last Name</label>
								</Grid>
								<Grid item xs={6}>
									<Controller
										control={control}
										name='lastName'
										render={({ field: { onChange, value } }) => (
											<TextField
												sx={{ width: '100%' }}
												size='small'
												id='outlined-basic'
												variant='outlined'
												inputProps={{ readOnly: true }}
											/>
										)}
									/>
								</Grid>

								<Grid item xs={6}>
									<label>Email</label>
								</Grid>
								<Grid item xs={6}>
									<Controller
										control={control}
										name='email'
										render={({ field: { onChange, value } }) => (
											<TextField
												value={value}
												sx={{ width: '100%' }}
												size='small'
												onChange={(e) => onChange(e.target.value)}
												id='outlined-basic'
												variant='outlined'
											/>
										)}
									/>
								</Grid>
							</Grid>
						</Box>
						<Box className='change-password'>
							<Typography variant='body1' className='section-label'>
								Change password
							</Typography>
							<hr />
							<Grid container rowSpacing={5} direction={'row'}>
								<Grid item xs={6}>
									<label>Current Password</label>
								</Grid>
								<Grid item xs={6}>
									<Controller
										control={control}
										name='password'
										render={({ field: { onChange, value } }) => (
											<TextField
												sx={{ width: '100%' }}
												size='small'
												id='outlined-basic'
												variant='outlined'
												inputProps={{ readOnly: true }}
											/>
										)}
									/>
								</Grid>

								<Grid item xs={6}>
									<label>New Password</label>
								</Grid>
								<Grid item xs={6}>
									<Controller
										control={control}
										name='newPassword'
										render={({ field: { onChange, value } }) => (
											<TextField
												sx={{ width: '100%' }}
												size='small'
												id='outlined-basic'
												variant='outlined'
												inputProps={{ readOnly: true }}
											/>
										)}
									/>
								</Grid>

								<Grid item xs={6}>
									<label>Confirm Password</label>
								</Grid>
								<Grid item xs={6}>
									<Controller
										control={control}
										name='passwordConfirmed'
										render={({ field: { onChange, value } }) => (
											<TextField
												value={value}
												sx={{ width: '100%' }}
												size='small'
												onChange={(e) => onChange(e.target.value)}
												id='outlined-basic'
												variant='outlined'
											/>
										)}
									/>
								</Grid>
							</Grid>
						</Box>
						<Box className='country'>
							<Typography variant='body1' className='section-label'>
								Country
							</Typography>
							<hr />
							<Grid container rowSpacing={5} direction={'row'}>
								<Grid item xs={6}>
									<label>Current Password</label>
								</Grid>
								<Grid item xs={6}>
									<Controller
										control={control}
										name='password'
										render={({ field: { onChange, value } }) => (
											<Select
												labelId='demo-simple-select-standard-label'
												id='demo-simple-select-standard'
												label='Age'
											>
												<MenuItem value=''>
													<em>None</em>
												</MenuItem>
												<MenuItem value={10}>Ten</MenuItem>
												<MenuItem value={20}>Twenty</MenuItem>
												<MenuItem value={30}>Thirty</MenuItem>
											</Select>
										)}
									/>
								</Grid>
							</Grid>
						</Box>
					</form>
				</Box>
			</Box>
			<Box className='bottom-btn'>
				<Button variant='contained' color='secondary' className='btn btn-light-text-dark'>
					Cancel
				</Button>
				<Button
					variant='contained'
					color='primary'
					className='btn btn-dark-blue'
					onClick={handleSubmit(onSubmit)}
				>
					Save
				</Button>
			</Box>
		</>
	);
};

export default MyAccount;
