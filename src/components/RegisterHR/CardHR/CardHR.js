import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';

import CardHRItem from '../CardHRItem/CardHRItem';
import { getAllHR } from '../../../store/hr/actions';

function CardHR({ user, companyId, getAllHR }) {
	let cardList = [];

	useEffect(() => {
		window.addEventListener('load', () => {
			getAllHR(companyId);
		});
	}, [companyId, getAllHR]);

	cardList = user
		? user.map((elem, index) => {
				return <CardHRItem {...elem} key={elem._id} />;
		  })
		: null;
	return <Container>{cardList}</Container>;
}

const mapDispatchToProps = {
	getAllHR,
};

const mapStateToProps = ({ company, hr }) => {
	return {
		companyId: company.companyId,
		user: hr.hrList,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CardHR);
