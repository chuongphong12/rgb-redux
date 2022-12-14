import { Autocomplete, Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { UserModel } from '../../../core/models/userModel';
import CountryRepository, { ICountry } from '../../../core/repository/countryRepository';
import AuthContext from '../../../utils/context/AuthProvider';
import './MyAccount.scss';

const MyAccount = () => {
	const { user } = useContext(AuthContext);
	const [countries, setCountries] = useState<ICountry[] | undefined>([]);
	const countryService = new CountryRepository();
	let currentCountry: ICountry | undefined;

	const schema = yup.object().shape({
		password: yup.string().required(),
		newPassword: yup.string().required(),
	});

	let initialValues = {
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
		setValue,
		handleSubmit,
		control,
		reset,
		formState: { errors, defaultValues },
	} = useForm({
		mode: 'onChange',
		defaultValues: initialValues,
		// resolver: yupResolver(schema),
	});
	const onSubmit = (data: any) => console.log(data);

	const fetchCountry = async () => {
		const res = await countryService.getAllCountry();
		setCountries(res);
		if (countries !== undefined) {
			currentCountry = countries?.find((ele) => (ele.code = user.country_code));
		}
	};

	const fetchCurrentUserToForm = (user: UserModel) => {
		if (!user) {
			return;
		}
		reset({
			email: user.email,
			firstName: user.first_name,
			lastName: user.last_name,
			companyName: user.company_name,
			countryCode: user.country_code,
		});
	};

	useEffect(() => {
		fetchCountry();
		fetchCurrentUserToForm(user);
	}, [user]);

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
							<Grid container rowSpacing={5} direction={'row'} className='mt-3'>
								<Grid item xs={6}>
									<label>First Name</label>
								</Grid>
								<Grid item xs={6}>
									<Controller
										control={control}
										name='firstName'
										render={({ field: { value } }) => (
											<TextField
												sx={{ width: '100%' }}
												value={value}
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
										render={({ field: { value } }) => (
											<TextField
												sx={{ width: '100%' }}
												size='small'
												value={value}
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
										render={({ field: { value } }) => (
											<TextField
												value={value}
												sx={{ width: '100%' }}
												size='small'
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
							<Grid container rowSpacing={5} direction={'row'} className='mt-3'>
								<Grid item xs={6}>
									<label>Current Password</label>
								</Grid>
								<Grid item xs={6}>
									<Controller
										control={control}
										name='password'
										render={({ field: { value } }) => (
											<TextField
												sx={{ width: '100%' }}
												value={value}
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
												value={value}
												size='small'
												id='outlined-basic'
												variant='outlined'
												onChange={(e) => onChange(e.target.value)}
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
							<Grid container rowSpacing={5} direction={'row'} className='mt-3'>
								<Grid item xs={6}>
									<label>Country</label>
								</Grid>
								<Grid item xs={6}>
									<Controller
										control={control}
										name='countryCode'
										render={({ field: { onChange, value } }) => (
											<Autocomplete
												id='country-select'
												sx={{ width: '100%' }}
												options={countries!}
												autoHighlight
												isOptionEqualToValue={(option) => option.code === value}
												getOptionLabel={(option) => option.name}
												value={currentCountry}
												onChange={(e, value) => onChange(value?.code)}
												renderOption={(props, option) => (
													<Box
														component='li'
														sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
														{...props}
													>
														<img
															loading='lazy'
															width='20'
															src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
															srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
															alt=''
														/>
														{option.name} ({option.code})
													</Box>
												)}
												renderInput={(params) => (
													<TextField
														{...params}
														size={'small'}
														variant={'outlined'}
														inputProps={{
															...params.inputProps,
															autoComplete: 'new-password', // disable autocomplete and autofill
														}}
													/>
												)}
											/>
										)}
									/>
								</Grid>
							</Grid>
						</Box>

						<Box className='company'>
							<Typography variant='body1' className='section-label'>
								Company
							</Typography>
							<hr />
							<Grid container rowSpacing={5} className='mb-4 mt-3'>
								<Grid item xs={6}>
									<label>Company</label>
								</Grid>

								<Grid item xs={6}>
									<Controller
										control={control}
										name='companyName'
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
