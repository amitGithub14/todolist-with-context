import React from 'react';

const Form = ({ setInputText, toDos, setToDos, inputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDos([
      ...toDos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText('');
  };
  return (
    <form>
      <div className="mb-3 mt-5 row justify-content-center">
        <div className="col-sm-7 ">
          <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            className="form-control "
            placeholder="New Task"
          />
        </div>
        <div className="col-sm-2">
          <button
            className="add btn btn-primary font-weight-bold"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
