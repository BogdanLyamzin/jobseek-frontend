import React, {useState} from 'react'

export default props => {
  const [value, setValue] = useState('');
  const valueChangeHandler = event => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          className="form-control col-5"
          onChange={valueChangeHandler}
          value={value}
        />
        <div className="input-group-prepend">
          <button
            className="btn btn-success"
            onClick={() => props.onSearch(value)}
          >
            Пошук
          </button>
        </div>
      </div>
    </>
  );
};
