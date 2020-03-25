import React from 'react';

const Text = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export default React.memo(Text);
