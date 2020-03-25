import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import getDisplayName from '../utils/getDisplayName';
import { getProfessionsByFilter } from '../store/admin/actions/professionActions';

const withProfession = Component => {
	const WithProfession = ({
		professionList,
		getProfessionsByFilter,
		...props
	}) => {
		const [id, setId] = useState(null);
		const [profession, setProfession] = useState(null);

		useEffect(() => {
			if (id) getProfessionsByFilter(`sphereId=${id}`);
		}, [getProfessionsByFilter, id]);

		useEffect(() => {
			setProfession(professionList);
		}, [professionList]);

		return <Component setId={setId} profession={profession} {...props} />;
	};

	WithProfession.displayName = `WithProfession(${getDisplayName(Component)})`;

	const mapStateToProps = ({ admin }) => ({
		professionList: admin.professionChange,
	});

	return connect(mapStateToProps, { getProfessionsByFilter })(WithProfession);
};

export default withProfession;
