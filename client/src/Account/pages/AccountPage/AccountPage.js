import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import SignInWidget from '../../components/SignInWidget';
import {addUserRequest, signInRequest} from '../../AccountActions';
import SignUpWidget from "../../components/SignUpWidget";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    action: {
        color: '#1ecde2',
        cursor: 'pointer'
    },
}));

const AccountPage = () => {

    const dispatch = useDispatch();
    const [signInView, setSignInView] = useState(true);
    const classes = useStyles();


    const handleAddUser = (user) => {
        dispatch(addUserRequest(user));
    };

    const handleSignIn = (user) => {
        dispatch(signInRequest(user));
    };

    const handleChangeView = () => {
        setSignInView(!signInView);
    };

    return (
        <div className="col-12 mt-4">
            {signInView ?
                <div className={"row"}>
                    <div className={"ml-2"}>
                        <h3>SignIn to start creating your own posts</h3>
                        <div>or <span className={`${classes.action}`} onClick={handleChangeView}>register</span> if you are not a member yet</div>
                    </div>
                    <SignInWidget signIn={handleSignIn}/>
                </div>
                :
                <div className={"row"}>
                    <div className={"ml-2"}>
                        <h3>Register to contribute to the community</h3>
                        <div>or <span className={`${classes.action}`} onClick={handleChangeView}>signIn</span> if you are already a member</div>
                    </div>
                    <SignUpWidget addUser={handleAddUser}/>
                </div>
            }
        </div>
    );
};

export default AccountPage;
