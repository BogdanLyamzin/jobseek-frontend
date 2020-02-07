import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import { getOneHR } from '../../../../store/hr/actions';

const FormHR = ({ values, hidden, getOneHR, updateHRinfo, handleChange }) => {
	useEffect(() => {
		getOneHR('5dfba763a638d31fcc1921de');
	}, [getOneHR]);

	return (
		<div className="hr-form">
			<div className="hr-flex" style={{ marginBottom: '50px' }}>
				<div>
					{hidden && (
						<>
							<input
								onChange={handleChange}
								type="text"
								className="hr-form-input"
								name="name"
								defaultValue={values ? values.name : ''}
							/>
							<input
								onChange={handleChange}
								type="text"
								className="hr-form-input"
								name="lastName"
								defaultValue={values ? values.lastName : ''}
							/>
						</>
					)}
					{!hidden && (
						<div className="hr-name">
							{values ? values.name : ''} {values ? values.lastName : ''}
						</div>
					)}
				</div>
				<a href="nothing" onClick={updateHRinfo}>
					<CreateOutlinedIcon className="icon-pen" />
				</a>
			</div>

			<div className="hr-flex" style={{ marginBottom: '135px' }}>
				<div>
					{hidden && (
						<>
							<div className="hr-key">Телефон*</div>
							<input
								onChange={handleChange}
								type="text"
								className="hr-form-input"
								name="phone"
								defaultValue={values ? values.phone : ''}
							/>
						</>
					)}
					{!hidden && (
						<>
							<div className="hr-key">Телефон:</div>
							<div className="hr-prop">{values ? values.phone : ''}</div>
						</>
					)}
				</div>
				<div>
					{hidden && (
						<>
							<div className="hr-key">Пошта*</div>
							<input
								onChange={handleChange}
								type="email"
								className="hr-form-input"
								name="email"
								defaultValue={values ? values.email : ''}
							/>
						</>
					)}
					{!hidden && (
						<>
							<div className="hr-key">Пошта:</div>
							<div className="hr-prop">{values ? values.email : ''}</div>
						</>
					)}
				</div>
			</div>
			{hidden && (
				<input type="submit" value="Зберегти" className="hr-form-btn" />
			)}
		</div>
	);
};

const mapDispatchToProps = {
	getOneHR,
};

export default connect(null, mapDispatchToProps)(FormHR);
