import { useMemo } from "react";

export const DOTS = '...';

const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
    totalCount, // the total amount of questions fetched = 15
    pageSize,
}) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize); // the number of pages from the first question to the last

        const totalPageNumbers = totalCount;

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

    }, [totalCount, pageSize]);

    return paginationRange;
};