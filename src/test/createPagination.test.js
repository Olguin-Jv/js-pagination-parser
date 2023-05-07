const createPagination = require('../index')
const { cases, mockedCases } = require('./mocks/createPagination.mock')


describe('createPagination', () => {
    
    it('Should create pagination array correctly', () => {
        for(let testCaseName in cases) {
            expect(createPagination(cases[testCaseName])).toStrictEqual(mockedCases[testCaseName])
        }
    })

});
