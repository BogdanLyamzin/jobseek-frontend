import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import Input from '../../../../shared/Input';
import Button from '../../../../shared/Button';
import { getOneHR } from '../../../../store/hr/actions';

const FormHR = ({
	values,
	hidden,
	classes,
	getOneHR,
	submitForm,
	updateHRinfo,
	handleChange,
}) => {
	useEffect(() => {
		getOneHR('5e3c361c657e122a841e88e4');
	}, [getOneHR]);

	return (
		<div className={classes.hrForm}>
			<div className={`${classes.hrFlex} ${classes.hrValue}`}>
				<div>
					{hidden && (
						<div className={classes.formItem}>
							<Input
								onChange={handleChange}
								type="text"
								name="name"
								value={values ? values.name : ''}
								className={classes.hrFormInput}
							/>
							<Input
								onChange={handleChange}
								type="text"
								name="lastName"
								value={values ? values.lastName : ''}
								className={classes.hrFormInput}
							/>
						</div>
					)}
					{!hidden && (
						<div className={classes.hrName}>
							{values ? values.name : ''} {values ? values.lastName : ''}
						</div>
					)}
				</div>
				<CreateOutlinedIcon
					className={`${classes.iconPenLrg} ${classes.iconPen}`}
					onClick={updateHRinfo}
				/>
			</div>

			<div className={`${classes.hrFlex} ${classes.hrValue}`}>
				<div>
					{hidden && (
						<div className={classes.formItem}>
							<div>
								<div className={classes.hrKey}>Телефон*</div>
								<Input
									onChange={handleChange}
									type="text"
									name="phone"
									value={values ? values.phone : ''}
									className={classes.hrFormInput}
								/>
							</div>
							<div>
								<div className={classes.hrKey}>Пошта*</div>
								<Input
									onChange={handleChange}
									type="email"
									name="email"
									value={values ? values.email : ''}
									className={classes.hrFormInput}
								/>
							</div>
						</div>
					)}
					{!hidden && (
						<>
							<div className={classes.hrKey}>Телефон:</div>
							<div className={classes.hrProp}>{values ? values.phone : ''}</div>
						</>
					)}
				</div>
				<div>
					{!hidden && (
						<>
							<div className={classes.hrKey}>Пошта:</div>
							<div className={classes.hrProp}>{values ? values.email : ''}</div>
						</>
					)}
				</div>
			</div>
			{hidden && <Button text="Зберегти" click={submitForm} />}
		</div>
	);
};

const mapDispatchToProps = {
	getOneHR,
};

export default connect(null, mapDispatchToProps)(FormHR);
