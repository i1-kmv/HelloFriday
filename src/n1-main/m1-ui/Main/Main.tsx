import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from "../Header/Header";
import classes from "./Main.module.css";
import ProfileContainer from "../Profile/ProfileContainer";
import LoginContainer from "../../../n2-features/f1-auth/a1-login/LoginContainer";
import RegisterContainer from "../../../n2-features/f1-auth/a2-register/RegisterContainer";
import RestoreContainer from "../../../n2-features/f1-auth/a3-restore/RestoreContainer";
import NewPasswordContainer from "../../../n2-features/f1-auth/a4-new-password/NewPasswordContainer";
import {Button} from "../common/Button/Button";
import {Input} from "../common/Input/Input";

const Main: React.FC = () => {
    return (
        <div className={classes.main}>
            <Header/>

            <Switch>
                <Route path={"/profile"} render={() => <ProfileContainer/>}/>
                <Route path={"/login"} render={() => <LoginContainer/>}/>
                <Route path={"/register"} render={() => <RegisterContainer/>}/>
                <Route path={"/restore"} render={() => <RestoreContainer/>}/>
                <Route path={"/newPassword"} render={() => <NewPasswordContainer/>}/>
                <Route path={"*"} render={() => <ProfileContainer/>}/>
            </Switch>

            <div>
                <Button btnName={'Test'} btnType={'green'} onClick={() => alert('test')}/>
            </div>

        </div>
    );
};

export default Main;