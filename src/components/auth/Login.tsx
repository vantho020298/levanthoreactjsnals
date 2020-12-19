import React from 'react';
import { connect } from 'react-redux';
import FormLogin from './FormLogin';
import { removeItem } from '../../localStorage/localStorage';
import StoreStageType from '../../types/storeStage';

interface IRecipeProps {
    removeItem: (token: string) => void;
}

class Login extends React.Component<IRecipeProps> {
    render() {
        this.props.removeItem('token')
        return (
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                <div className="brand-logo">
                                    <img src="../../images/logo.svg" alt="logo"/>
                                </div>
                                <h4>Hello! let's get started</h4>
                                <h6 className="font-weight-light">Sign in to continue.</h6>
                                <FormLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: StoreStageType) => {
    return {
        removeItem
    };
};

export default connect(mapStateToProps)(Login);