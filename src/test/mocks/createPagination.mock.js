module.exports = {
    cases: {
        pageInTheCenterNoArrows: {
            totalPages: 20,
            pageIndex: 10,
            range: 2,
            pageLink: 'google.com',
            pageQueryKey: '_page',
            resultsLimitQueryKey: '_limit',
            resultsLimitNumber: 9,
            setArrows: false
        },
        pageInTheCenterWithArrows: {
            totalPages: 20,
            pageIndex: 10,
            range: 2,
            pageLink: 'google.com',
            pageQueryKey: '_page',
            resultsLimitQueryKey: '_limit',
            resultsLimitNumber: 9,
            setArrows: true
        },
        pageWithFirstIndexNoArrows: {
            totalPages: 20,
            pageIndex: 1,
            range: 2,
            pageLink: 'google.com',
            pageQueryKey: '_page',
            resultsLimitQueryKey: '_limit',
            resultsLimitNumber: 9,
            setArrows: false
        },
        pageWithFirstIndexWithArrows: {
            totalPages: 20,
            pageIndex: 1,
            range: 2,
            pageLink: 'google.com',
            pageQueryKey: '_page',
            resultsLimitQueryKey: '_limit',
            resultsLimitNumber: 9,
            setArrows: true
        },
        pageWithLastIndexNoArrows: {
            totalPages: 20,
            pageIndex: 1,
            range: 2,
            pageLink: 'google.com',
            pageQueryKey: '_page',
            resultsLimitQueryKey: '_limit',
            resultsLimitNumber: 9,
            setArrows: true
        },
        pageWithLastIndexWithArrows: {
            totalPages: 20,
            pageIndex: 1,
            range: 2,
            pageLink: 'google.com',
            pageQueryKey: '_page',
            resultsLimitQueryKey: '_limit',
            resultsLimitNumber: 9,
            setArrows: true
        },
    },
    mockedCases: {
        pageInTheCenterNoArrows: [{
            page: 1,
            label: '1',
            link: 'google.com?_page=1&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: null,
            label: '...',
            link: null,
            isLink: false,
            enabled: false,
            type: 'space'
        },
        {
            page: 8,
            label: '8',
            link: 'google.com?_page=8&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 9,
            label: '9',
            link: 'google.com?_page=9&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 10,
            label: '10',
            link: 'google.com?_page=10&_limit=9',
            isLink: true,
            enabled: true,
            type: 'link'
        },
        {
            page: 11,
            label: '11',
            link: 'google.com?_page=11&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 12,
            label: '12',
            link: 'google.com?_page=12&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: null,
            label: '...',
            link: null,
            isLink: false,
            enabled: false,
            type: 'space'
        },
        {
            page: '20',
            label: '20',
            link: 'google.com?_page=20&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        }],
        pageInTheCenterWithArrows: [{
            page: 9,
            label: '<-',
            link: 'google.com?_page=9&_limit=9',
            isLink: true,
            enabled: true,
            type: 'arrowLeft'
        },
        {
            page: 1,
            label: '1',
            link: 'google.com?_page=1&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: null,
            label: '...',
            link: null,
            isLink: false,
            enabled: false,
            type: 'space'
        },
        {
            page: 8,
            label: '8',
            link: 'google.com?_page=8&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 9,
            label: '9',
            link: 'google.com?_page=9&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 10,
            label: '10',
            link: 'google.com?_page=10&_limit=9',
            isLink: true,
            enabled: true,
            type: 'link'
        },
        {
            page: 11,
            label: '11',
            link: 'google.com?_page=11&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 12,
            label: '12',
            link: 'google.com?_page=12&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: null,
            label: '...',
            link: null,
            isLink: false,
            enabled: false,
            type: 'space'
        },
        {
            page: '20',
            label: '20',
            link: 'google.com?_page=20&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 11,
            label: '->',
            link: 'google.com?_page=11&_limit=9',
            isLink: true,
            enabled: true,
            type: 'arrowRight'
        }],
        pageWithFirstIndexNoArrows: [{
            page: 1,
            label: '1',
            link: 'google.com?_page=1&_limit=9',
            isLink: true,
            enabled: true,
            type: 'link'
        },
        {
            page: 2,
            label: '2',
            link: 'google.com?_page=2&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 3,
            label: '3',
            link: 'google.com?_page=3&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 4,
            label: '4',
            link: 'google.com?_page=4&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 5,
            label: '5',
            link: 'google.com?_page=5&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: null,
            label: '...',
            link: null,
            isLink: false,
            enabled: false,
            type: 'space'
        },
        {
            page: '20',
            label: '20',
            link: 'google.com?_page=20&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        }],
        pageWithFirstIndexWithArrows: [{
            page: null,
            label: '<-',
            link: null,
            isLink: true,
            enabled: false,
            type: 'arrowLeft'
        },
        {
            page: 1,
            label: '1',
            link: 'google.com?_page=1&_limit=9',
            isLink: true,
            enabled: true,
            type: 'link'
        },
        {
            page: 2,
            label: '2',
            link: 'google.com?_page=2&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 3,
            label: '3',
            link: 'google.com?_page=3&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 4,
            label: '4',
            link: 'google.com?_page=4&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 5,
            label: '5',
            link: 'google.com?_page=5&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: null,
            label: '...',
            link: null,
            isLink: false,
            enabled: false,
            type: 'space'
        },
        {
            page: '20',
            label: '20',
            link: 'google.com?_page=20&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 2,
            label: '->',
            link: 'google.com?_page=2&_limit=9',
            isLink: true,
            enabled: true,
            type: 'arrowRight'
        }],
        pageWithLastIndexNoArrows: [{
            page: null,
            label: '<-',
            link: null,
            isLink: true,
            enabled: false,
            type: 'arrowLeft'
        },
        {
            page: 1,
            label: '1',
            link: 'google.com?_page=1&_limit=9',
            isLink: true,
            enabled: true,
            type: 'link'
        },
        {
            page: 2,
            label: '2',
            link: 'google.com?_page=2&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 3,
            label: '3',
            link: 'google.com?_page=3&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 4,
            label: '4',
            link: 'google.com?_page=4&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 5,
            label: '5',
            link: 'google.com?_page=5&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: null,
            label: '...',
            link: null,
            isLink: false,
            enabled: false,
            type: 'space'
        },
        {
            page: '20',
            label: '20',
            link: 'google.com?_page=20&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 2,
            label: '->',
            link: 'google.com?_page=2&_limit=9',
            isLink: true,
            enabled: true,
            type: 'arrowRight'
        }],
        pageWithLastIndexWithArrows: [{
            page: null,
            label: '<-',
            link: null,
            isLink: true,
            enabled: false,
            type: 'arrowLeft'
        },
        {
            page: 1,
            label: '1',
            link: 'google.com?_page=1&_limit=9',
            isLink: true,
            enabled: true,
            type: 'link'
        },
        {
            page: 2,
            label: '2',
            link: 'google.com?_page=2&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 3,
            label: '3',
            link: 'google.com?_page=3&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 4,
            label: '4',
            link: 'google.com?_page=4&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 5,
            label: '5',
            link: 'google.com?_page=5&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: null,
            label: '...',
            link: null,
            isLink: false,
            enabled: false,
            type: 'space'
        },
        {
            page: '20',
            label: '20',
            link: 'google.com?_page=20&_limit=9',
            isLink: true,
            enabled: false,
            type: 'link'
        },
        {
            page: 2,
            label: '->',
            link: 'google.com?_page=2&_limit=9',
            isLink: true,
            enabled: true,
            type: 'arrowRight'
        }],
    }
}