import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import getDisplayName from '../utils/getDisplayName';
import { getProfessionsByFilter } from '../store/admin/actions/professionActions';

const withProfession = Component => {
	return function WithProfession(props) {
		const dispatch = useDispatch();
		const [id, setId] = useState(null);
		const [profession, setProfession] = useState(null);
		const professionList = useSelector(state => state.admin.professionChange);

		useEffect(() => {
			if (id) dispatch(getProfessionsByFilter(`sphereId=${id}`));
		}, [dispatch, getProfessionsByFilter, id]);

		useEffect(() => {
			setProfession(professionList);
		}, [professionList]);

		WithProfession.displayName = `WithProfession(${getDisplayName(Component)})`;

		return <Component setId={setId} profession={profession} {...props} />;
	};
};

export default withProfession;
