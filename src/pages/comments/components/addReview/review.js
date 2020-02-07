import React, {useState} from "react";
import PropTypes from 'prop-types';


function Review({ onCancel, onCreate }) {
const [value, setValue] = useState('');

    function submitHandler(event) {
        event.preventDefault();

        if (value.trim()) {
            onCreate(value);
            setValue('')
        }
    }

return (
    <div className='review'>
        <div className='review-header'>
            <p className='review-header__comment'>Ваш коментар</p>
         <div className='review-header__icons'>
             <p className='review-header__icons-icon review-header__icons-icon__edit'><span role='img' aria-label='jsx-a11y/accessible-emoji'>🖊</span></p>
             <p className='review-header__icons-icon'><span role='img' aria-label='jsx-a11y/accessible-emoji'>🗑</span></p>
         </div>
        </div>
        <div className='review-body'>
            <textarea className='review-body__text' name="review" id="comment" value={value} onChange={event => setValue(event.target.value)} rows="10"></textarea>
        </div>
        <div className="review-footer">
            <p className='review-footer__cancelBtn' onClick={() => onCancel()}>Відмінити</p>
          <div className='review-footer__Btn' onClick={submitHandler}><p className='review-footer__saveBtn'>Зберегти</p></div>
        </div>
    </div>
)
}

Review.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
};

export default Review
