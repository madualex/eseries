import classnames from 'classnames';
import { usePagination, DOTS } from '../Components/Hooks/usePagination';


const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    return (
        <ul
            className={classnames('pagination-container', { [className]: className })}
        >
            {paginationRange.map((pageNumber, index) => {
                return (
                    <li
                        key={index}
                        className={classnames('pagination-item', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
        </ul>
    );
};

export default Pagination;