import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import getDisplayName from 'utils/getDisplayName';
import { getSkillsByFilter } from 'store/admin/actions/skillActions';

const withSkills = Component => {
	const WithSkills = ({ skill, skillList, getSkillsByFilter, ...props }) => {
		const [skills, setSkills] = useState(null);

		useEffect(() => {
			if (skill.category) getSkillsByFilter(`categoryId=${skill.category._id}`);
		}, [getSkillsByFilter, skill.category]);

		useEffect(() => {
			setSkills(skillList);
		}, [skillList]);

		return <Component skillList={skills} {...props} />;
	};

	WithSkills.displayName = `WithSkills(${getDisplayName(Component)})`;

	const mapStateToProps = ({ admin }) => ({
		skillList: admin.skillChange,
	});

	return connect(mapStateToProps, { getSkillsByFilter })(WithSkills);
};

export default withSkills;
