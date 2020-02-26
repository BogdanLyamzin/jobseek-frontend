import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone';

import UploadPhoto from '../../../shared/UploadPhoto';

const UpdatePhotoDropzone = ({ user, uploadPhoto }) => {
	const onDrop = useCallback(
		photo => {
			uploadPhoto(photo);
		},
		[uploadPhoto],
	);

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<UploadPhoto
			user={user}
			getRootProps={getRootProps}
			getInputProps={getInputProps}
		/>
	);
};

const mapStateToProps = ({ company }) => {
	return {
		user: company.company,
	};
};

export default connect(mapStateToProps)(UpdatePhotoDropzone);
