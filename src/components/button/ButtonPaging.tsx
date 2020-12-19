import React, { MouseEvent } from 'react';

interface IRecipeProps {
    isCurrentPage:boolean;
    id: string;
    handleClick: (event: MouseEvent)=> void;
    text: string;
}

class ButtonPaging extends React.Component<IRecipeProps> {
    render() {
        const { isCurrentPage, id, handleClick, text } = this.props;
        const className = isCurrentPage ? 'btn btn-primary' : 'btn btn-outline-secondary';
        return (
            <button type="button" className={className} id={id} onClick={handleClick}>{text}</button>
        )
    }
}

export default ButtonPaging