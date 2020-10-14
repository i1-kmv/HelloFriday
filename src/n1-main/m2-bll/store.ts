import {combineReducers, createStore} from "redux";
import {loginReducer} from "./reducers/login-reducer";
import {registrationReducer} from "./reducers/registration-reducer";
import {recoveryPasswordReducer} from "./reducers/recovery-password-reducer";
import {newPasswordReducer} from "./reducers/new-password-reducer";
import {profileReducer} from "./reducers/profile-reducer";



const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    recoveryPassword: recoveryPasswordReducer,
    newPassword: newPasswordReducer,
    profile: profileReducer
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;

