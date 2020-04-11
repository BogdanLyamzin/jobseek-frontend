import React from 'react';
import { connect } from 'react-redux';

import UploadPhoto from 'shared/UploadPhoto';

const UpdatePhoto = ({ user, uploadPhoto }) => (
	<UploadPhoto user={user} uploadPhoto={uploadPhoto} />
);

const mapStateToProps = ({ hr }) => ({
	user: hr.user,
});

export default connect(mapStateToProps)(UpdatePhoto);
