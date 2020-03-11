import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import Input from '../../../shared/Input/Input';
import UpdatePhotoDropzone from '../UpdatePhotoDropzone/UpdatePhotoDropzone';
import Button from '../../../shared/Button';
import validation from '../../../utils/validation/hrCompany';

const FormCompanyInfo = ({
	values,
	classes,
	handleChange,
	submitForm,
	uploadPhoto,
}) => {
	const { t } = useTranslation();

	const validationStatus = () => {
		return (
			validation('email', values.email, t) &&
			validation('country', values.country, t) &&
			validation('city', values.city, t) &&
			validation('facebookLink', values.facebookLink, t) &&
			validation('website', values.website, t) &&
			validation('description', values.description, t)
		);
	};
	const handleClick = event => {
		event.preventDefault();
		if (validationStatus()) {
			submitForm();
		}
	};

	return (
		<Grid container>
			<Grid item className={classes.logo} md={4}>
				<UpdatePhotoDropzone uploadPhoto={uploadPhoto} />
			</Grid>
			<Grid item container md={8}>
				<Grid item container md={12}>
					<Grid item md={6}>
						<div className={classes.companyKey}>{t('COMPANY_NAME')}</div>
						<Input
							type="text"
							name="companyName"
							className={classes.companyInput}
							onChange={handleChange}
							value={values.companyName}
						/>
					</Grid>
					<Grid item md={6}>
						<div className={classes.companyKey}>{t('MAIL')}</div>
						<Input
							type="email"
							name="email"
							className={classes.companyInput}
							onChange={handleChange}
							value={values.email}
						/>
					</Grid>
				</Grid>
				<Grid item container md={12}>
					<Grid item md={6}>
						<div className={classes.companyKey}>{t('COUNTRY')}</div>
						<Input
							type="text"
							name="country"
							className={classes.companyInput}
							onChange={handleChange}
							value={values.country}
						/>
					</Grid>
					<Grid item md={6}>
						<div className={classes.companyKey}>{t('CITY')}</div>
						<Input
							type="text"
							name="city"
							className={classes.companyInput}
							onChange={handleChange}
							value={values.city}
						/>
					</Grid>
				</Grid>
				<Grid item container md={12}>
					<Grid item md={6}>
						<div className={classes.companyKey}>{t('SOCIAL_LINK')}</div>
						<Input
							type="text"
							name="facebookLink"
							className={classes.companyInput}
							onChange={handleChange}
							value={values.facebookLink}
						/>
					</Grid>
					<Grid item md={6}>
						<div className={classes.companyKey}>{t('WEB_SITE')}</div>
						<Input
							type="text"
							name="website"
							className={classes.companyInput}
							onChange={handleChange}
							value={values.website}
						/>
					</Grid>
				</Grid>
			</Grid>
			<hr className={classes.line} />
			<div className={classes.companyDescription}>
				<div className={classes.companyKey}>{t('COMPANY_DESCRIPTION')}</div>
				<textarea
					name="description"
					className={classes.companyDescriptionArea}
					onChange={handleChange}
					value={values.description}
				/>
				<div className={classes.btnAlignCenter}>
					<Button click={e => handleClick(e)}>{t('UPDATE')}</Button>
				</div>
			</div>
		</Grid>
	);
};

export default FormCompanyInfo;
