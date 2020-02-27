import React from 'react';
import ReduxToastr from 'react-redux-toastr';

const Toastr = () => {
	return (
		<ReduxToastr
			timeOut={4000}
			newestOnTop={false}
			preventDuplicates
			position="top-left"
			getState={state => state.toastr}
			transitionIn="fadeIn"
			transitionOut="fadeOut"
			progressBar
			closeOnToastrClick
		/>
	);
};

export default Toastr;
