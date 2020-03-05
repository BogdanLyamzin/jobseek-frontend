import React from 'react';
import { connect } from 'react-redux';

import UploadPhoto from '../../../shared/UploadPhoto';

const UpdatePhoto = ({ user, uploadPhoto }) => {
	return <UploadPhoto user={user} uploadPhoto={uploadPhoto} />;
};

const mapStateToProps = ({ company }) => {
	return {
		user: company.company,
	};
};

export default connect(mapStateToProps)(UpdatePhoto);
