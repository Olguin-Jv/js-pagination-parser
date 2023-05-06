# js-pagination-parser

Simple pagination bar creator to use with any Front-End library

# Description
This is a simple method to create an array of objects in representation of a navigation bar with plain javascript to be used on any library.

## Usage

```bash
npm i js-pagination-parser
```

```javascript
import createPagination from 'js-pagination-parser';

const parsedPagination = createPagination({ ... });
```

Example:
```javascript
createPagination({
    /* total result pages possible */
    totalPages: 20,

    /* current page index */
    pageIndex: 1,

    /**
     * left and right offset surrounding the current page
     * 
     * 
     * With pageIndex -> 11
     * Range | Result
     * 1     |     <- 1 .. 10 (11) 12 ... 60 ->
     * 2     |   <- 1 .. 9 10 (11) 12 13 ... 60 ->
     * 3     | <- 1 .. 8 9 10 (11) 12 13 14 ... 60 ->
     * ETC.
     * 
     * In case current page is the first or last one the links will be created on the opposite side to keep its size constant
     * 
     * Range | PageIndex | Result
     * 2     | 60        |   <- 1 ... 56 57 58 59 (60) ->
     * 2     | 2        |     <- 1 (2) 3 4 5 ... 60->
     * 
     */
    range: 2,

    /* Base link to page */
    pageLink: 'myWebsite.com',

    /**
     * Query key to generate the proper link for each element in the
     * 
     * Example:
     * pageLink: 'myWebsite.com'
     * pageQueryKey = '_resultsPage'
     * 
     * results -> myWebsite.com?_resultsPage=1
     */
    pageQueryKey: '_page',

    /** 
     * Similar as above 
     * If the used API provides the possibility to add a limit of results we can add that query param too
     */
    resultsLimitQueryKey: '_limit',
    resultsLimitNumber: 9,

    /**
     * Set arrows to go previous or next page
     */
    setArrows: true || false
})
```

## Example
```javascript
createPagination({
    totalPages: 20,
    pageIndex: 20,
    range: 2,
    pageLink: 'google.com',
    pageQueryKey: '_page',
    resultsLimitQueryKey: '_limit',
    resultsLimitNumber: 9,
    setArrows: true
})
```

Results in:
```javascript
[ { page: 1,
    label: '1',
    link: 'google.com?_page=1&_limit=9',
    isLink: true,
    isActive: false },
  { page: null,
    label: '...',
    link: null,
    isLink: false,
    isActive: false },
  { page: 16,
    label: '16',
    link: 'google.com?_page=16&_limit=9',
    isLink: true,
    isActive: false },
  { page: 17,
    label: '17',
    link: 'google.com?_page=17&_limit=9',
    isLink: true,
    isActive: false },
  { page: 18,
    label: '18',
    link: 'google.com?_page=18&_limit=9',
    isLink: true,
    isActive: false },
  { page: 19,
    label: '19',
    link: 'google.com?_page=19&_limit=9',
    isLink: true,
    isActive: false },
  { page: 20,
    label: '20',
    link: 'google.com?_page=20&_limit=9',
    isLink: true,
    isActive: true } ]
```