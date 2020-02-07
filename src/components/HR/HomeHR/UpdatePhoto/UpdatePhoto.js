import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone';

import UploadPhoto from '../../../../shared/UploadPhoto';

const UpdatePhoto = ({ user, uploadPhoto }) => {
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

const mapStateToProps = ({ hr }) => {
	return {
		user: hr.user,
	};
};

export default connect(mapStateToProps)(UpdatePhoto);
