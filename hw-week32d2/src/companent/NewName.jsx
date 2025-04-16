import React, { useReducer, useEffect } from 'react';

const initialState = {
  name: '',
  savedName: '',
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SAVE_START':
      return { ...state, loading: true };
    case 'SAVE_SUCCESS':
      return {
        ...state,
        loading: false,
        savedName: action.payload,
        name: '',
      };
    case 'LOAD_SAVED_NAME':
      return { ...state, savedName: action.payload };
    default:
      return state;
  }
}

export default function NewName() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedName = localStorage.getItem('username');
    if (storedName) {
      dispatch({ type: 'LOAD_SAVED_NAME', payload: storedName });
    }
  }, []);

  const handleSave = () => {
    dispatch({ type: 'SAVE_START' });

    setTimeout(() => {
      localStorage.setItem('username', state.name);
      dispatch({ type: 'SAVE_SUCCESS', payload: state.name });
    }, 1000)
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Сохранить имя</h2>

      <input
    type="text"
    placeholder="Введите свое имя"
    value={state.name}
    onChange={(e) =>
        dispatch({ type: 'SET_NAME', payload: e.target.value })
             }
        onKeyDown={(e) => {
            if (e.key === 'Enter' && state.name && !state.loading) {
                handleSave();
            }
            }}
        />

      <button onClick={handleSave} disabled={state.loading || !state.name}>
      Сохранить
      </button>

      {state.loading && <p>Сохраняется...</p>}

      {state.savedName && !state.loading && (
        <p>Последнее сохраненное имя: <strong>{state.savedName}</strong></p>
      )}
    </div>
  );
}

