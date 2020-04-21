import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { useTranslation } from 'react-i18next';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

import Button from '../Button';
import useStyles from './styles';

const DeleteIconWithModal = ({ handleDelete, text }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<DeleteForeverOutlinedIcon className={classes.deleteIcon} onClick={handleOpen} />
			<Modal aria-labelledby="simple-modal-title" open={open} onClose={handleClose}>
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

DeleteIconWithModal.propTypes = {
	text: PropTypes.string.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default DeleteIconWithModal;
