Frontend Skeleton
=================

[![GitHub release](https://img.shields.io/github/release/apolitical/frontend-partials.svg)](https://github.com/apolitical/frontend-partials/releases)
[![GitHub license](https://img.shields.io/github/license/apolitical/frontend-partials.svg)](https://github.com/apolitical/frontend-partials/blob/master/LICENSE)
[![CircleCI](https://img.shields.io/circleci/project/github/apolitical/frontend-partials/master.svg)](https://circleci.com/gh/apolitical/frontend-partials)

This is a boilerplate for React Redux applications.

Usage
-----

### Header

Include the header.js script, you can use unpkg to get this.
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
