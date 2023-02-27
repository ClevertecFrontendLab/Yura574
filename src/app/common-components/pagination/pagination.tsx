/* eslint-disable */
import classnames from "classnames";
import { usePagination } from "./usePagination";
import { useAppDispatch } from "../../../store/store";
import { setCurrentPage } from "../../../store/reducers/pagination-reducers";

type PaginationType = {
    totalCount: number
    pageSize: number
    siblingCount: number
    currentPage: number
}

export const Pagination = (props: PaginationType) => {
    const dispatch = useAppDispatch()
    const {totalCount,siblingCount,pageSize, currentPage} = props
    const paginationRange = usePagination({
        currentPage,
        pageSize,
        siblingCount,
        totalCount
    });

    // if (currentPage === 0 || paginationRange && paginationRange.length < 2) {
    //     return null;
    // }

    const onNext = () => {
        dispatch(setCurrentPage(currentPage + 1))
    };

    const onPrevious = () => {
        dispatch(setCurrentPage(currentPage - 1));
    };
    const lastPage = paginationRange && paginationRange[paginationRange.length - 1];

    return (
        <div>
            <ul
                className={classnames("pagination-container")}
            >
                <li
                    className={classnames("pagination-item", {
                        disabled: currentPage === 1
                    })}
                    onClick={onPrevious}
                >
                    <div className="arrow left" />
                </li>
                {paginationRange && paginationRange.map((pageNumber, index) => {

                    // If the pageItem is a DOT, render the DOTS unicode character
                    if (pageNumber === "...") {
                        return <li className="pagination-item dots" key={index}>&#8230;</li>;
                    }

                    return (
                        <li key={index}
                            className={classnames("pagination-item", {
                                selected: pageNumber === currentPage
                            })}
                            onClick={() => dispatch(setCurrentPage(+pageNumber))}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
                <li
                    className={classnames("pagination-item", {
                        disabled: currentPage === lastPage
                    })}
                    onClick={onNext}
                >
                    <div className="arrow right" />
                </li>
            </ul>
        </div>
    );
};
