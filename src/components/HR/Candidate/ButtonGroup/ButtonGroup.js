import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import API from '../../../../services/api';
import Button from '../../../../shared/Button';
import toastr from '../../../../utils/toastr/toastrAction';

const BtnList = ({ path, cv, cvID, vacancyID }) => {
	const { t } = useTranslation();
	const postSent = () => {
		API.post('sentVacancies', {
			cvId: cvID,
			vacancyId: vacancyID,
		}).then(data => toastr(data, 'Запрос відправлено'));
	};

	const deleteSent = () => {
		API.delete('sentVacancies', {
			cvId: cvID,
			vacancyId: vacancyID,
		}).then(data => toastr(data, 'Запрос видалено'));
	};

	const updateSent = () => {
		API.put('sentVacancies', {
			cvId: cvID,
			vacancyId: vacancyID,
			status: true,
		}).then(data => toastr(data, 'Запрос підтверджено'));
	};

	return (
		<>
			{path === 'common' &&
				cv &&
				!cv.received.find(
					e => e.cvId === cvID && e.vacancyId === vacancyID,
				) && <Button click={postSent}>{t('RESPOND')}</Button>}

			{path === 'sent' && <Button click={deleteSent}>{t('CANCEL')}</Button>}

			{path === 'received' &&
				cv &&
				cv.sent.find(
					e =>
						e.cvId === cvID && e.vacancyId === vacancyID && e.status === false,
				) && <Button click={updateSent}>{t('CONFIRM')}</Button>}
		</>
	);
};

const mapStateToProps = ({ cv }) => ({
	cv: cv.cv,
});

export default connect(mapStateToProps)(BtnList);
