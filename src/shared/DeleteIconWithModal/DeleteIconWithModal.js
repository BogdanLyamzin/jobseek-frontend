import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		top: '100px',
		left: '50%',
		transform: 'translate(-50%)',
		width: 320,
		backgroundColor: '#F6F9FF',
		border: '2px solid #000',
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
	btn: {
		fontFamily: '"Open Sans", sans-serif',
		fontSize: '16px',
		color: '#3D3B69',
		padding: '5px 20px',
		background: 'linear-gradient(0.03deg, #00F2C9 0%, #FDFDFD 226.41%)',
		boxShadow: '0px 4px 10px rgba(0, 242, 201, 0.5)',
		borderRadius: '28px',
		border: '0',
		cursor: 'pointer',
	},
}));

const DeleteIconWithModal = ({ handleDelete, text }) => {
	const classes = useStyles();
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
						<button
							className={classes.btn}
							onClick={() => {
								handleDelete();
								handleClose();
							}}
						>
							Delete
						</button>
						<button onClick={handleClose} className={classes.btn}>
							Сancel
						</button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default DeleteIconWithModal;
