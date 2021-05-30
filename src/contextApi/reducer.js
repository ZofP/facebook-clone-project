export const initialState = {
 user: null,
 sessionId: sessionStorage.getItem("fb-clone-sessionId") ? sessionStorage.getItem("fb-clone-sessionId") : null
};

export const actionTypes = {
 SET_USER: "SET_USER",
 SET_SESSIONID: "SET_SESSIONID",

}

const reducer = (state, { type, payload }) => {


 switch (type) {
  case actionTypes.SET_USER:
   return {
    ...state,
    user: payload
   };
  case actionTypes.SET_SESSIONID:
   return {
    ...state,
    userId: payload
   };
  default: return state

 }
}

export default reducer