import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles(theme => ({
	img: {
		minHeight: '190px',
		maxHeight: '200px',
		borderRadius: '8px',
		cursor: 'pointer',
		outline: '0',
	},

	notimg: {
		width: '195px',
		height: '200px',
		borderRadius: '8px',
		background: 'linear-gradient(180deg, rgb(245, 247, 252) 0%, #E6EBFF 100%)',
		position: 'relative',
		cursor: 'pointer',
		outline: '0',
	},

	addphotoContainer: {
		position: 'absolute',
		left: '10px',
		bottom: '10px',
		display: 'flex',
		alignItems: 'center',
		color: '#3D3B69',
	},

	addphoto: {
		marginLeft: '8px',
		fontFamily: '"Open Sans", sans-serif',
		fontSize: '14px',
	},
}));

const UploadPhoto = ({ user, getRootProps, getInputProps }) => {
	const classes = useStyles();
	const { t } = useTranslation();
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

export default UploadPhoto;
