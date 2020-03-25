import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import getDisplayName from '../utils/getDisplayName';
import { getAllSpheres } from '../store/admin/actions/sphereActions';

const withSpheres = Component => {
	return function WithSpheres(props) {
		const dispatch = useDispatch();
		const [spheres, setSphere] = useState(null);
		const sphereList = useSelector(state => state.admin.sphere);

		useEffect(() => {
			dispatch(getAllSpheres());
		}, [dispatch, getAllSpheres]);

		useEffect(() => {
			setSphere(sphereList);
		}, [sphereList]);

		WithSpheres.displayName = `WithSpheres(${getDisplayName(Component)})`;

		return <Component spheres={spheres} {...props} />;
	};
};

export default withSpheres;
