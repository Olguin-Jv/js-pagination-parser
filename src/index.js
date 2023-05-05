const DEFAULT_PAGINATION_RANGE = 5

const pagesToArray = length => Array.from({ length }, (_, index) => index + 1);

const getSubset = ({ arr, pageIndex, range }) => {
    const arrIdx = pageIndex - 1;

    let start = arrIdx - range;
    let end = arrIdx + range;

    if (start < 0) {
      end += Math.abs(start);
      start = 0;
    }
    
    if (end >= arr.length) {
      start -= (end - (arr.length - 1));
      end = arr.length - 1;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => arr[start + i]);
}

const createPages = ({
    totalPages,
    pageIndex,
    range,
    pageLink,
    pageQueryKey,
    resultsLimitQueryKey,
    resultsLimitNumber,
    setArrows
}) => {
    
    let subset = getSubset({
        arr: pagesToArray(totalPages),
        pageIndex,
        range
    })

    let leftSpacing = []
    let rightSpacing = []
    let leftArrow = []
    let rightArrow = []

    const setLink = idx => `${pageLink}?${new URLSearchParams({
        [pageQueryKey]: idx,
        [resultsLimitQueryKey]: resultsLimitNumber
    })}`

    /** Start spacing left and right */
    if (subset[0] - 2 > 0) {
        leftSpacing = [1, null]
    } else if (subset[0] - 1 === 1) {
        leftSpacing = [1]
    }

    if (subset[subset.length - 1] + 2 < totalPages) {
        rightSpacing = [null, `${totalPages}`]
    } else if (subset[subset.length - 1] + 1 === totalPages) {
        rightSpacing = [`${totalPages}`]
    }
    /** End spacing left and right */

    /** Start setting arrows */
    if (setArrows) {
        const isLeftEnabled = pageIndex > 1 //?
        const prevPage = isLeftEnabled ? pageIndex - 1 : null
        leftArrow.push({
            page: prevPage,
            label: '<-',
            link: isLeftEnabled ? setLink(prevPage) : null,
            isLink: true,
            enabled: isLeftEnabled,
            type: 'arrowLeft'
        })

        const isRightEnabled = pageIndex + 1 <= totalPages //?
        const nextPage = isRightEnabled ? pageIndex + 1 : null //?
        rightArrow.push({
            page: nextPage,
            label: '->',
            link: isRightEnabled ? setLink(nextPage) : null,
            isLink: true,
            enabled: isRightEnabled,
            type: 'arrowRight'
        })
    }
    /** End setting arrows */

    let pagination = [...leftSpacing, ...subset, ...rightSpacing].map(idx => ({
        page: idx,
        label: idx ? idx.toString() : '...',
        link: idx && `${pageLink}?${new URLSearchParams({
            [pageQueryKey]: idx,
            [resultsLimitQueryKey]: resultsLimitNumber
        })}`,
        isLink: Boolean(idx),
        enabled: idx === pageIndex,
        type: idx ? 'link' : 'space'
    }))

    return [...leftArrow, ...pagination, ...rightArrow]
}

createPages({
    totalPages:20,
    pageIndex: 1,
    range: 2,
    pageLink: 'google.com',
    pageQueryKey: '_page',
    resultsLimitQueryKey: '_limit',
    resultsLimitNumber: 9,
    setArrows: true
}) //?
