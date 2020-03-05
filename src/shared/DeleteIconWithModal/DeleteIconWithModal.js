import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

import Button from '../Button';

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		top: '100px',
		left: '50%',
		transform: 'translate(-50%)',
		width: 320,
		backgroundColor: theme.palette.paper,
		border: '2px solid #000',
		color: theme.palette.textColor,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-around',
	},
	deleteIcon: {
		color: theme.palette.textColor,
		fontSize: '22px',
		cursor: 'pointer',
		'&:hover': {
			color: 'black',
		},
	},
}));

const DeleteIconWithModal = ({ handleDelete, text }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<DeleteForeverOutlinedIcon
				className={classes.deleteIcon}
				onClick={handleOpen}
			/>
			<Modal
				aria-labelledby="simple-modal-title"
				open={open}
				onClose={handleClose}
			>
				<div className={classes.paper}>
					<h4 id="simple-modal-title">{text}</h4>
					<div className={classes.flex}>
						<Button
							click={() => {
								handleDelete();
								handleClose();
							}}
						>
							{t('DELETE')}
						</Button>
						<Button click={handleClose}>{t('CANCEL')}</Button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default DeleteIconWithModal;
