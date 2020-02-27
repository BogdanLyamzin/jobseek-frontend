import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';

import CardHRItem from '../CardHRItem/CardHRItem';
import { getHrByFilter } from '../../../../store/hr/actions';

function CardHR({ user, hrList, companyId, getHrByFilter }) {
	let cardList = [];

	useEffect(() => {
		if (user) getHrByFilter(`companyId=${user._id}`);
	}, [user, getHrByFilter]);

	cardList = hrList
		? hrList.map((elem, index) => {
				return <CardHRItem elem={elem} key={elem._id} index={index} />;
		  })
		: null;
	return <Container>{cardList}</Container>;
}

const mapDispatchToProps = {
	getHrByFilter,
};

const mapStateToProps = ({ company, hr }) => {
	return {
		user: company.company,
		hrList: hr.hrList,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CardHR);
