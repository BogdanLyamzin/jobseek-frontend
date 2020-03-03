import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';

import Input from '../../../../shared/Input/Input';

const FormHRInfo = ({ classes, handleChange, values }) => {
	const { t } = useTranslation();
	return (
		<Grid container className={classes.form} spacing={2}>
			<Grid
				item
				container
				xs={12}
				lg={12}
				md={12}
				sm={12}
				direction="row"
				spacing={2}
			>
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<div className={classes.hrKey}>{t('FIRST_NAME')}</div>
					<Input
						type="text"
						name="name"
						className={classes.hrInput}
						onChange={handleChange}
						value={values.name}
					/>
				</Grid>
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<div className={classes.hrKey}>{t('LAST_NAME')}</div>
					<Input
						type="text"
						name="lastName"
						className={classes.hrInput}
						onChange={handleChange}
						value={values.lastName}
					/>
				</Grid>
			</Grid>
			<Grid item container xs={12} direction="row" spacing={2}>
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<div className={classes.hrKey}>{t('PHONE')}</div>
					<Input
						type="text"
						name="phone"
						className={classes.hrInput}
						onChange={handleChange}
						value={values.phone}
					/>
				</Grid>
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<div className={classes.hrKey}>{t('MAIL')}</div>
					<Input
						type="email"
						name="email"
						className={classes.hrInput}
						onChange={handleChange}
						value={values.email}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default FormHRInfo;
