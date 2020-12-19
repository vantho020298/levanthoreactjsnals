import React from 'react';
import { connect } from 'react-redux';
import { isLogin } from '../../common/common';
import User from './User';
import Footer from '../common/Footer';
import ButtonGroup from '../button/ButtonGroup';
import { getUsers } from '../../actions';

const mapStateToProps = state => {
    return {
        isLogin: isLogin(),
        listUsers: state.listUsers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers())
    };
};

class ListUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentPage: 1,
          recordsPerPage: 5
        };

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }

    render() {
        const { listUsers, isLogin, getUsers } = this.props;
        if (!isLogin) {
            window.location.href = '/';
        }

        if(listUsers.length === 0) {
            getUsers();
            return null;
        }

        const { currentPage, recordsPerPage } = this.state;
        const indexOfLastTodo = currentPage * recordsPerPage;
        const indexOfFirstTodo = indexOfLastTodo - recordsPerPage;
        const currentRecords = listUsers.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderUsers = currentRecords.map((user, index) => {
            return <User key={index} user={user}/>
        });

        return (
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Striped Table</h4>
                                <p className="card-description">
                                    Add class <code>.table-striped</code>
                                </p>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                            <th>
                                                ID
                                            </th>
                                            <th>
                                                User
                                            </th>
                                            <th>
                                                First name
                                            </th>
                                            <th>
                                                Phone
                                            </th>
                                            <th>
                                                Email
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderUsers}
                                        </tbody>
                                    </table>
                                </div>
                                <ButtonGroup length={listUsers.length} recordsPerPage={recordsPerPage} currentPage={currentPage} handleClick={this.handleClick}/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);