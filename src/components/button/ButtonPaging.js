import React from 'react';

class ButtonPaging extends React.Component {
    render() {
        const { isCurrentPage, id, handleClick, text } = this.props;
        const className = isCurrentPage ? 'btn btn-primary' : 'btn btn-outline-secondary';
        return (
            <button type="button" className={className} id={id} onClick={handleClick}>{text}</button>
        )
    }
}

export default ButtonPaging