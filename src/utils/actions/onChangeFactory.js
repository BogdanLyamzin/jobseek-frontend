export const onChangeFactory = (state, setState) => event => {
	setState({ ...state, [event.target.name]: event.target.value });
};

export const onChangeNameFactory = (state, setState) => (name, value) => {
	setState({ ...state, [name]: value });
};

export const changeSliderFactory = (state, setState) => (name, id) => (
	e,
	value,
) => {
	setState({
		...state,
		[name]: {
			name,
			id,
			experience: value,
		},
	});
};
