export const InitialState = {
    hamburgerMenu: false,
  };
  
  export const actionTypes = {
    SET_HAMBURGER_MENU: "SET_HAMBURGER_MENU",
  };
  
  export const Reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_HAMBURGER_MENU:
        if (document) {
          action.payload && document.body.classList.add('no-scroll');
          !action.payload && document.body.classList.remove('no-scroll');
        }
        return {
          ...state,
          hamburgerMenu: action.payload,
        };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };
  