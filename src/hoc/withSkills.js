import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import getDisplayName from '../utils/getDisplayName';
import { getSkillsByFilter } from '../store/admin/actions/categoryActions';

const withSkills = Component => {
	const WithSkills = ({ skillList, getSkillsByFilter, ...props }) => {
		const [id, setId] = useState(null);
		const [skills, setSkills] = useState(null);

		useEffect(() => {
			if (id) getSkillsByFilter(`parentId=${id}`);
		}, [getSkillsByFilter, id]);

		useEffect(() => {
			setSkills(skillList);
		}, [skillList]);

		return <Component setId={setId} skills={skills} {...props} />;
	};

	WithSkills.displayName = `WithSkills(${getDisplayName(Component)})`;

	const mapStateToProps = ({ admin }) => ({
		skillList: admin.skillChange,
	});

	return connect(mapStateToProps, { getSkillsByFilter })(WithSkills);
};

export default withSkills;
