import React from 'react';

class User extends React.Component {
    render() {
        const { id, avatar, name, phone, email } = this.props.user

        return (
            <tr>
                <td>{id}</td>
                <td className="py-1"><img src={avatar} alt={'face'+id}/></td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
            </tr>
        )
    }
}

export default User