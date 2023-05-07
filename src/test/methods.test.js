const {
    pagesToArray,
    getSubset
} = require('../utils/methods');

describe('pagesToArray', () => {
    const paginationLength = 5;
    const pages = pagesToArray(paginationLength);
    
    it('Should create a new array from a designed number to represent pagination length', () => {
        expect(pages.length).toBe(paginationLength);
    })

    it('The result of the new array should contain ascendant values', () => {
        let value = 0;
        pages.forEach((page) => {
            value += 1
            expect(page).toBe(value);
        })
    })

})

describe('getSubset', () => {
    const paginationLength = 20;
    const pagesArray = pagesToArray(paginationLength); 

    it('Should obtain a subset of elements from an array', () => {
        const range = 0;
        const pageIndex = 5;
        const subset = getSubset({
            pagesArray,
            pageIndex,
            range
        })

        expect(subset.length).toBe(range+1);
        expect(subset[range]).toBe(pageIndex);
    });

    describe('Sould set a correct number of surrounding elements based on the range config', () => {
        
        it('If range does not touch any start/end limit, pageIndex should be always in the middle', () => {
            let range = 2;
            let pageIndex = 5;
            let subset = getSubset({
                pagesArray,
                pageIndex,
                range
            })

            expect(subset[range]).toBe(pageIndex);
            
            range = 5;
            pageIndex = 10;
            subset = getSubset({
                pagesArray,
                pageIndex,
                range
            })

            expect(subset[range]).toBe(pageIndex);
        });

    });
    

    describe('Surrounding range should include the correct values', () => {
        const setRangeTestingCase = ({ paginationLength, pageIndex, range }) => {

            const pagesArray = pagesToArray(paginationLength); 
            
            let subset = getSubset({
                pagesArray,
                pageIndex,
                range
            })
    
            let testValue = pageIndex - range;
    
            expect(subset[range]).toBe(pageIndex);
            subset.forEach((val) => {
                expect(val).toBe(testValue)
                testValue += 1
            })
        }

        setRangeTestingCase({
            paginationLength: 20,
            pageIndex: 10,
            range: 6
        })

        setRangeTestingCase({
            paginationLength: 200,
            pageIndex: 123,
            range: 50
        })

    });

    describe('If range exceeds pagination limits', () => {
        const paginationLength = 20;
        const pagesArray = pagesToArray(paginationLength); 

        it('Range values exceeding array starging point should be added to the right', () => {
            expect(getSubset({
                pagesArray,
                pageIndex: 1,
                range: 1
            })).toStrictEqual([1, 2, 3 ])

            expect(getSubset({
                pagesArray,
                pageIndex: 2,
                range: 2
            })).toStrictEqual([ 1, 2, 3, 4, 5 ])

            expect(getSubset({
                pagesArray,
                pageIndex: 2,
                range: 3
            })).toStrictEqual([ 1, 2, 3, 4, 5, 6, 7 ])
        })

        it('Range values exceeding array starging point should be added to the left', () => {
            expect(getSubset({
                pagesArray,
                pageIndex: 20,
                range: 1
            })).toStrictEqual([18, 19, 20 ])

            expect(getSubset({
                pagesArray,
                pageIndex: 19,
                range: 2
            })).toStrictEqual([ 16, 17, 18, 19, 20 ])

            expect(getSubset({
                pagesArray,
                pageIndex: 18,
                range: 3
            })).toStrictEqual([ 14, 15, 16, 17, 18, 19, 20 ])
        });

        it('If range is bigger than pagination length should not return any incorrect values', () => {
            const config = {
                pagesArray,
                pageIndex: 10,
                range: 999
            }
            
            getSubset(config).forEach((el) => {
                expect(el > 0 && Boolean(el)).toBeTruthy()
            })

        })
        
    })

    
})
