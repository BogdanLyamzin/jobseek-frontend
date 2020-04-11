import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import Button from 'shared/Button';
import getDate from 'utils/getDate';
import useStyles from '../../styles';
import DeleteIcon from 'shared/DeleteIconWithModal';
import { deleteComment, updateComment } from 'store/comment/actions';

const userID = '5e3c361c657e122a841e88e4'; //TEST

const ReviewsItem = ({ element, deleteComment, updateComment }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [hidden, setHidden] = React.useState(true);
	const [form, setform] = React.useState(element.reviewTxt);

	const removeReview = id => {
		deleteComment(id);
		document.getElementById(id).remove();
	};

	const updateReview = id => {
		updateComment(id, { reviewTxt: form });
		setHidden(!hidden);
	};

	return (
		<div className={classes.reviewItem} id={element._id}>
			<div className={classes.reviewListUser}>
				<div className={classes.reviewListName}>{element.candidateName}</div>
				<div className={classes.flex}>
					<div className={classes.reviewListDate}>{getDate(element.date)}</div>
					{userID === element.candidateId && (
						<>
							<CreateOutlinedIcon
								className={classes.icon}
								onClick={() => setHidden(!hidden)}
							/>
							<DeleteIcon
								handleDelete={() => removeReview(element._id)}
								text={t('DELETE_COMMENT')}
							/>
						</>
					)}
				</div>
			</div>
			{hidden && <div className={classes.text}>{element.reviewTxt}</div>}
			{!hidden && (
				<>
					<textarea
						className={classes.textarea}
						value={form}
						onChange={e => {
							setform(e.target.value);
						}}
					/>
					<Button text={t('UPDATE')} click={() => updateReview(element._id)} />
				</>
			)}
			<hr className={classes.divider} />
		</div>
	);
};

export default connect(null, { deleteComment, updateComment })(ReviewsItem);
