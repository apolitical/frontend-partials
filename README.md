Frontend Skeleton
=================

[![GitHub release](https://img.shields.io/github/release/apolitical/frontend-partials.svg)](https://github.com/apolitical/frontend-partials/releases)
[![GitHub license](https://img.shields.io/github/license/apolitical/frontend-partials.svg)](https://github.com/apolitical/frontend-partials/blob/master/LICENSE)
[![CircleCI](https://img.shields.io/circleci/project/github/apolitical/frontend-partials/master.svg)](https://circleci.com/gh/apolitical/frontend-partials)

This is a boilerplate for React Redux applications.

Usage
-----

### Dependencies

You will need to import the following dependencies. We recommend doing this at the bottom of the
page.

```html
<script type="text/javascript"
        src="https://unpkg.com/@babel/polyfill@7.2.5/dist/polyfill.min.js"></script>
<script type="text/javascript"
        src="https://unpkg.com/react@16.7.0/umd/react.production.min.js"></script>
<script type="text/javascript"
        src="https://unpkg.com/react-dom@16.7.0/umd/react-dom.production.min.js"></script>
<script type="text/javascript"
        src="https://unpkg.com/react-redux@6.0.0/dist/react-redux.min.js"></script>
<script type="text/javascript"
        src="https://unpkg.com/react-router-dom@4.3.1/umd/react-router-dom.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/redux@4.0.1/dist/redux.min.js"></script>
<script type="text/javascript"
        src="https://unpkg.com/redux-saga@0.16.2/dist/redux-saga.min.js"></script>
<script type="text/javascript"
        src="https://unpkg.com/styled-components@4.1.3/dist/styled-components.min.js"></script>
```

Additionally, there is some code shared between the partials, this should come after the above.

```html
<script type="text/javascript"
        src="https://unpkg.com/@apolitical/frontend-partials@0.6.0/dist/vendors~footer~header.js"></script>
```

Script files for the partials should come after this. The elements they hook into should come before
the script files.

### Header

Include the header.js script, you can use unpkg to get this.

```html
<script type="text/javascript"
        src="https://unpkg.com/@apolitical/frontend-partials@0.6.0/dist/header.js"></script>
```

Where you want to place the header, add an element with a data attribute `partial-app` set to
`header`:

```html
<div data-partial-app="header"></div>
```

By default, the header will not react to someone being logged out. If you wish for something else to
happen (such as a redirect) you can pass in the name of a function in the global scope using the
`header-logged-out` data attribute;

```html
<script>
function goToLogin(e) {
    // console.error(e);
    window.location = '/login';
}
</script>
<div data-partial-app="header" data-header-logged-out="goToLogin"></div>
```


### Footer

Include the footer.js script, you can use unpkg to get this.

```html
<script type="text/javascript"
        src="https://unpkg.com/@apolitical/frontend-partials@0.6.0/dist/footer.js"></script>
```

Where you want to place the header, add an element with a data attribute `partial-app` set to
`footer`:

```html
<div data-partial-app="footer"></div>
```

There are no options for the footer.


Versioning
----------

Use `npm version` to edit the version number. Either:
- `npm version major|minor|patch` for a full release or
- `npm version premajor|preminor|prepatch --preid=meta.data.here` for a pre-release

Contributing
------------

If you want to help, that's brilliant! Have a look at our [Contributing Guide](CONTRIBUTING.md). We also adhere to a
[Code of Conduct](CODE_OF_CONDUCT.md), so please check that out, it includes details on who to contact if you have any
concerns.
