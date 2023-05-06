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

--------

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
[ { page: 19,
    label: '<-',
    link: 'google.com?_page=19&_limit=9',
    isLink: true,
    enabled: true,
    type: 'arrowLeft' },
  { page: 1,
    label: '1',
    link: 'google.com?_page=1&_limit=9',
    isLink: true,
    enabled: false,
    type: 'link' },
  { page: null,
    label: '...',
    link: null,
    isLink: false,
    enabled: false,
    type: 'space' },
  { page: 16,
    label: '16',
    link: 'google.com?_page=16&_limit=9',
    isLink: true,
    enabled: false,
    type: 'link' },
  { page: 17,
    label: '17',
    link: 'google.com?_page=17&_limit=9',
    isLink: true,
    enabled: false,
    type: 'link' },
  { page: 18,
    label: '18',
    link: 'google.com?_page=18&_limit=9',
    isLink: true,
    enabled: false,
    type: 'link' },
  { page: 19,
    label: '19',
    link: 'google.com?_page=19&_limit=9',
    isLink: true,
    enabled: false,
    type: 'link' },
  { page: 20,
    label: '20',
    link: 'google.com?_page=20&_limit=9',
    isLink: true,
    enabled: true,
    type: 'link' },
  { page: null,
    label: '->',
    link: null,
    isLink: true,
    enabled: false,
    type: 'arrowRight' } ]
```

Returned object in detail:
```javascript
{
  /* correspondant page link number */
  page: 20,

  /**
   * similar to page but will represent the element label
   * can return:
   * - page label in numbers         -> e.g: '20'
   * - label reperenting the spacing -> '...'
   * - label representing an arrow   -> '<-' or '->'
   */
  label: '20',

  /**
   * Link generated based with the following logic
   * `${pageLink}?${pageQueryKey}${page}${resultsLimitQueryKey}${resultsLimitNumber}`
   * 
   * If the item is not a type arrowRight|arrowLeft|link will return null
   */
  link: 'google.com?_page=20&_limit=9',

  /**
   * easy isLink check
   */
  isLink: true,

  /**
   * will return true if the items represents the current page
   */
  enabled: true

  /**
   * Will return element type:
   * arrowRight | arrowLeft| link | space
   */
  type: 'link'
}
```