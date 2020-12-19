import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import Account from '../../types/account';

interface IRecipeProps {
    login: (account: Account ) => void;
}
  
interface IRecipeState {
    username?: string;
    password?: string;
}

class FormLogin extends React.Component<IRecipeProps, IRecipeState> {
    constructor(props: any) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event: ChangeEvent) {
      const target = event.target as HTMLInputElement;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleSubmit() {
        let username = this.state.username === undefined ? '': this.state.username;
        let password = this.state.password === undefined ? '': this.state.password;
        this.props.login({username, password})
    }
    render() {
        return (
            <form className="pt-3">
                <div className="form-group">
                    <input type="email" className="form-control form-control-lg" name="username" value={this.state.username}
                    onChange={this.handleInputChange} placeholder="Username"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control form-control-lg" name="password" value={this.state.password}
                    onChange={this.handleInputChange} placeholder="Password"/>
                </div>
                <div className="mt-3">
                    <button type="button" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={this.handleSubmit}>SIGN IN</button>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                        <label className="form-check-label text-muted">
                            <input type="checkbox" className="form-check-input"/>
                            Keep me signed in
                        </label>
                    </div>
                    <a href="/forgotpassword" className="auth-link text-black">Forgot password?</a>
                </div>
                <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                        <i className="ti-facebook mr-2"></i>Connect using facebook
                    </button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <a href="register.html" className="text-primary">Create</a>
                </div>
            </form> 
        )
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: ({username, password}: Account): void=> dispatch(login({username, password}))
    };
};

export default connect(null, mapDispatchToProps)(FormLogin);