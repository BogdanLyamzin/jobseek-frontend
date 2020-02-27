import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Translation } from 'react-i18next';
import Input from '../../../shared/Input/Input';
import UpdatePhotoDropzone from '../UpdatePhotoDropzone/UpdatePhotoDropzone';
import Button from '../../../shared/Button';

const FormCompanyInfo = ({ values, classes, handleChange, submitForm }) => {
	return (
		<Translation>
			{t => (
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<UpdatePhotoDropzone />
					</Grid>
					<Grid item container xs={8} spacing={2}>
						<Grid item container xs={12} direction="row" spacing={2}>
							<Grid item xs={6}>
								<div className={classes.vacancyKey}>{t('COMPANY_NAME')}</div>
								<Input
									type="text"
									name="companyName"
									className={classes.vacancyInput}
									onChange={handleChange}
									value={values.companyName}
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
						<Grid item container xs={12} direction="row" spacing={2}>
							<Grid item xs={6}>
								<div className={classes.vacancyKey}>{t('COUNTRY')}</div>
								<Input
									type="text"
									name="country"
									className={classes.vacancyInput}
									onChange={handleChange}
									value={values.country}
								/>
							</Grid>
							<Grid item xs={6}>
								<div className={classes.vacancyKey}>{t('CITY')}</div>
								<Input
									type="text"
									name="city"
									className={classes.vacancyInput}
									onChange={handleChange}
									value={values.city}
								/>
							</Grid>
						</Grid>
						<Grid item container xs={12} direction="row" spacing={2}>
							<Grid item xs={6}>
								<div className={classes.vacancyKey}>{t('ADD_SOCIAL_NET')}</div>
								<Input
									type="text"
									name="socialNet"
									className={classes.vacancyInput}
									onChange={handleChange}
									value={values.socialNet}
								/>
							</Grid>
							<Grid item xs={6}>
								<div className={classes.vacancyKey}>{t('WEB_SITE')}</div>
								<Input
									type="text"
									name="website"
									className={classes.vacancyInput}
									onChange={handleChange}
									value={values.website}
								/>
							</Grid>
						</Grid>
					</Grid>
					<hr className={classes.line} />
					<div className={classes.vacancyDescription}>
						<div className={classes.vacancyKey}>{t('COMPANY_DESCRIPTION')}</div>
						<textarea
							name="description"
							className={classes.vacancyDescriptionArea}
							onChange={handleChange}
							value={values.description}
						/>
						<div className={classes.alignCenter}>
							<Button text={t('UPDATE')} click={submitForm} />
						</div>
					</div>
				</Grid>
			)}
		</Translation>
	);
};

export default FormCompanyInfo;
