import React from 'react';
import { connect } from 'react-redux';

const CheckStatus = ({ children, cv, cvID, vacancyID }) => (
	<>
		{cv &&
			(cv.sent.find(
				e => e.cvId === cvID && e.vacancyId === vacancyID && e.status === true,
			) ||
				cv.received.find(
					e =>
						e.cvId === cvID && e.vacancyId === vacancyID && e.status === true,
				)) && <div>{children}</div>}
	</>
);

const mapStateToProps = ({ cv }) => ({
	cv: cv.cv,
});

export default connect(mapStateToProps)(CheckStatus);
