import { Box, Fade, Modal } from '@mui/material';
import React from 'react';
import Login from '../components/Login/Login';
import { ModeAuthenticateEnum } from '../enums/app.enum';

interface ModalProps {
	open: boolean,
	onClose: (b: boolean) => void,
	onSetOpen: (b: boolean) => void,
	mode: ModeAuthenticateEnum,
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 560,
	bgcolor: 'background.paper',
	borderRadius: '8px',
	boxShadow: 24,
	padding: '24px',
};


const AuthenModal = ({ open, onClose, mode = ModeAuthenticateEnum.Login, onSetOpen }: ModalProps) => {
	const modalMode = ModeAuthenticateEnum;

	const handleClickRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		onSetOpen(false);
	};

	const onModeSwitch = (mode: ModeAuthenticateEnum) => {
		switch (mode) {
			case modalMode.Login:
				return <Login />;
		}
	};

	return (
		<Modal open={open} onClose={onClose} closeAfterTransition>
			<Fade in={open}>
				<Box sx={style}>
					<Box className='modal-header p-0'>
						<button onClick={(event) => handleClickRemove(event)} className='btn-close-modal'>
							<i className='bx bx-x'></i>
						</button>
					</Box>

					<Box className='modal-body'>
						{onModeSwitch(mode)}
					</Box>
				</Box>
			</Fade>
		</Modal>
	);
};

export default AuthenModal;