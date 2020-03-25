import React, { useState } from 'react';

import getDisplayName from '../utils/getDisplayName';

const withHidden = Component => {
	return function WithHidden(props) {
		const [hidden, setHidden] = useState(true);
		WithHidden.displayName = `WithHidden(${getDisplayName(Component)})`;
		const updateHRinfo = () => {
			setHidden(!hidden);
		};

		return <Component hidden={hidden} setHidden={updateHRinfo} {...props} />;
	};
};

export default withHidden;
