import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';

import CardHRItem from '../CardHRItem/CardHRItem';

function CardHR({ hrList }) {
	let cardList = [];

	cardList = hrList
		? hrList.map((elem, index) => {
				return <CardHRItem elem={elem} key={elem._id} index={index} />;
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

export default connect(mapStateToProps)(CardHR);
