import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import getDisplayName from 'utils/getDisplayName';
import { getAllSpheres } from 'store/admin/actions/sphereActions';

const withSpheres = Component => {
	const WithSpheres = ({ getAllSpheres, sphereList, ...props }) => {
		const [spheres, setSphere] = useState(null);

		useEffect(() => {
			getAllSpheres();
		}, [getAllSpheres]);

		useEffect(() => {
			setSphere(sphereList);
		}, [sphereList]);

		return <Component spheres={spheres} {...props} />;
	};

	WithSpheres.displayName = `WithSpheres(${getDisplayName(Component)})`;

	const mapStateToProps = ({ admin }) => ({ sphereList: admin.sphere });

	return connect(mapStateToProps, { getAllSpheres })(WithSpheres);
};

export default withSpheres;
