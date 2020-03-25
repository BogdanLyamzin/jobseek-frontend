const getDisplayName = Component => {
	return Component.displayName || Component.name || 'Component';
};

export default getDisplayName;
