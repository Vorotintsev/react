import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "post 1", likesCount: 11 },
        { id: 4, message: "post 4", likesCount: 11 },
      ],
      newPostText: "itkamasutra",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Alex" },
        { id: 4, name: "John" },
        { id: 5, name: "Kristi" },
        { id: 6, name: "Jeyson" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Okay" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("changed");
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;
