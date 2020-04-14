import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import useStyles from './styles';

const UploadPhoto = ({ user, uploadPhoto }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const onDrop = useCallback(photo => uploadPhoto(photo), [uploadPhoto]);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<>
			{user && user.avatar && (
				<img
					className={classes.img}
					src={user.avatar}
					{...getRootProps()}
					alt="avatar"
				/>
			)}
			{((user && !user.avatar) || !user) && (
				<div className={classes.notimg} {...getRootProps()}>
					<div className={classes.addphotoContainer}>
						<AddCircleOutlineIcon />
						<span className={classes.addphoto}>{t('ADD_FOTO')}</span>
					</div>
				</div>
			)}
			<input {...getInputProps()} />
		</>
	);
};

UploadPhoto.propTypes = {
	user: PropTypes.oneOfType([
		PropTypes.shape({
			avatar: PropTypes.string,
		}),
		PropTypes.oneOf([null]).isRequired,
	]),
	uploadPhoto: PropTypes.func.isRequired,
};

export default UploadPhoto;
