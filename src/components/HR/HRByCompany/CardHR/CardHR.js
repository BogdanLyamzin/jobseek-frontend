import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { getHrByFilter } from '../../../../store/hr/actions';

import CardHRItem from '../CardHRItem/CardHRItem';

function CardHR({ hrList, user, getHrByFilter }) {
	let cardList = [];
	useEffect(() => {
		if (user) getHrByFilter(`companyId=${user._id}`);
	});

	cardList = hrList
		? hrList.map((elem, index) => {
				return <CardHRItem elem={elem} list={hrList} key={elem._id} index={index} />;
		  })
		: null;
	return <Container>{cardList}</Container>;
}

const mapStateToProps = ({ company, hr }) => {
	return {
		user: company.company,
		hrList: hr.hrList,
	};
};

export default connect(mapStateToProps, { getHrByFilter })(CardHR);
