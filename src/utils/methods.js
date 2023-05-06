const pagesToArray = length => Array.from({ length }, (_, index) => index + 1);

const getSubset = ({ pagesArray, pageIndex, range }) => {
    const arrIdx = pageIndex - 1;

    let start = arrIdx - range;
    let end = arrIdx + range;

    if (start < 0) {
      end += Math.abs(start);
      start = 0;
    }
    
    if (end >= pagesArray.length) {
      start -= (end - (pagesArray.length - 1));
      end = pagesArray.length - 1;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => pagesArray[start + i]);
}

module.exports = {
    pagesToArray,
    getSubset
}