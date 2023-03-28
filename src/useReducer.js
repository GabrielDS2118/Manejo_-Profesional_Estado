const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const reducerIf = (state, action) => {
  if (action.type === 'ERROR') {
    return {
      ...state,
      error: true,
      loading: false,
    };
  } else if (action.type == 'LOADING') {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === 'CONFIRMED') {
    return {
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    };
  } else {
    return {
      ...state,
    };
  }
};

const reducerSwitch = (state, action) => {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
        error: true,
        loading: false,
      };

    case 'CONFIRM':
      return {
        ...state,
        error: false,
        loading: false,
        confirm: true,
      };

    default:
      return {
        ...state,
      };
  }
};

const reduceObject = (state) => ({
  CHECK: {
    ...state,
    error: false,
    loading: true,
  },
  ERROR: {
    ...state,
    error: true,
    loading: false,
  },

  CONFIRM: {
    ...state,
    error: false,
    loading: false,
    confirm: true,
  },
});

const reducer = (state, action) => {
  if (reduceObject(state)[action]) {
    return reduceObject(state)[action];
  } else {
    return {
      ...state,
    };
  }
};
