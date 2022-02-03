import React from 'react';

const Form = ({
  setInputText,
  toDos,
  setToDos,
  inputText,
  toEdit,
  setEdit,
  isEditItem,
  setIsEditItem,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toEdit) {
      setToDos(
        toDos.map((item) => {
          if (item.id === isEditItem) {
            return { ...item, text: inputText };
          }
          return item;
        })
      );
      setIsEditItem(null);
      setEdit(false);
    } else {
      setToDos([
        ...toDos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
    }

    setInputText('');
  };
  return (
    <form>
      <div className="mb-5 mt-4 row justify-content-center">
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
            className="btn btn-primary font-weight-bold"
            onClick={handleSubmit}
          >
            {toEdit ? 'Edit' : 'Add'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
