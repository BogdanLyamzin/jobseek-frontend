import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';

import Input from '../../../shared/Input/Input';

const FormHRInfo = ({ classes, handleChange, values }) => {
	const { t } = useTranslation();
	return (
		<Grid container spacing={2}>
			<Grid item xs={3}>
				<div>ID 123456</div>
			</Grid>
			<Grid item container xs={9} spacing={2}>
				<Grid item container xs={12} direction="row" spacing={2}>
					<Grid item xs={6}>
						<div className={classes.vacancyKey}>{t('FIRST_NAME')}</div>
						<Input
							type="text"
							name="name"
							className={classes.vacancyInput}
							onChange={handleChange}
							value={values.name}
						/>
					</Grid>
					<Grid item xs={6}>
						<div className={classes.vacancyKey}>{t('LAST_NAME')}</div>
						<Input
							type="text"
							name="lastName"
							className={classes.vacancyInput}
							onChange={handleChange}
							value={values.lastName}
						/>
					</Grid>
				</Grid>
				<Grid item container xs={12} direction="row" spacing={2}>
					<Grid item xs={6}>
						<div className={classes.vacancyKey}>{t('PHONE')}</div>
						<Input
							type="text"
							name="phone"
							className={classes.vacancyInput}
							onChange={handleChange}
							value={values.phone}
						/>
					</Grid>
					<Grid item xs={6}>
						<div className={classes.vacancyKey}>{t('MAIL')}</div>
						<Input
							type="email"
							name="email"
							className={classes.vacancyInput}
							onChange={handleChange}
							value={values.email}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default FormHRInfo;
