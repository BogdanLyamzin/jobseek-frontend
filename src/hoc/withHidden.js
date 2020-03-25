import React, { useState } from 'react';

import getDisplayName from '../utils/getDisplayName';

const withHidden = Component => {
	return function WithHidden(props) {
		const [hidden, setHidden] = useState(true);
		const updateHRinfo = () => {
			setHidden(!hidden);
		};

		WithHidden.displayName = `WithHidden(${getDisplayName(Component)})`;

		return <Component hidden={hidden} setHidden={updateHRinfo} {...props} />;
	};
};

export default withHidden;
