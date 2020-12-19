import React from 'react';
import ButtonPaging from './ButtonPaging';

class ButtonGroup extends React.Component {
    render() {        
        const { length, recordsPerPage, currentPage, handleClick } = this.props;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(length / recordsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            const isCurrentPage = currentPage === number;
          return (
              <ButtonPaging key={number} id={number} handleClick={handleClick} isCurrentPage={isCurrentPage} text={number}/>
          );
        });

        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                {renderPageNumbers}
            </div>
        )
    }
}

export default ButtonGroup;