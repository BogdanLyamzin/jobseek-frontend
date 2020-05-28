import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UploadPhoto from 'shared/UploadPhoto';

const UpdatePhoto = ({ user, uploadPhoto }) => (
	<UploadPhoto user={user} uploadPhoto={uploadPhoto} />
);

UpdatePhoto.propTypes = {
	user: PropTypes.oneOfType([
		PropTypes.shape({
			avatar: PropTypes.string,
		}),
		PropTypes.oneOf([null]).isRequired,
	]),
	uploadPhoto: PropTypes.func.isRequired,
};

const mapStateToProps = ({ hr }) => ({
	user: hr.user,
});

export default connect(mapStateToProps)(UpdatePhoto);
