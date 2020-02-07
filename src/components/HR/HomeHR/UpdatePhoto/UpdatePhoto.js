import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const UpdatePhoto = ({ user, selectFile }) => {
	const onDrop = useCallback(
		photo => {
			selectFile(photo);
		},
		[selectFile],
	);

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<>
			{user && user.result.avatar && (
				<img
					className="hr-img"
					src={user.result.avatar}
					{...getRootProps()}
					alt="avatar"
				/>
			)}
			{((user && !user.result.avatar) || !user) && (
				<div className="hr-img hr-notimg" {...getRootProps()}>
					<div className="hr-addphoto-container">
						<AddCircleOutlineIcon />
						<span className="hr-addphoto">Додати фото</span>
					</div>
				</div>
			)}
			<input {...getInputProps()} />
		</>
	);
};

const mapStateToProps = ({ hr }) => {
	return {
		user: hr.user,
	};
};

export default connect(mapStateToProps)(UpdatePhoto);
