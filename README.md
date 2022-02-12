<div align="center">

<img src="./public/flexo.png" align="center" width="144px" heigh="222px" />

# Flexo Web

## A React frontend for the SECCDC Red Team scoring engine, [flexo](https;//github.com/seccdc/flexo)!

</div>

<br/>

<div align="center">

![Build Status](https://github.com/parsec/flexo-web/actions/workflows/build_react.yml/badge.svg)
![Netlify](https://img.shields.io/netlify/55674218-e8cf-4acb-97aa-73fdeab6dc67?label=Netlify%20Prod&logo=netlify&style=for-the-badge)
![Netlify](https://img.shields.io/netlify/2c161edd-9612-4660-99f9-36ed62b6cfbf?label=Netlify%20Staging&logo=netlify&style=for-the-badge)

</div>

---

## Overview

This is Flexo Web, the web frontend for the [SECCDC's Flexo scoring engine](https://github.com/seccdc/flexo)! The scoring engine is used to log attacks by the red teamers and keep track of what attacks have been performed on what teams. And this is it's frontend, written in React.js!

---

## Building flexo-web

So, since we're trying to actually be vaguely secure here, to build the app you'll need to set two environment variables in a `.env.development.local` file at the root directory (right here where the README is!)

```text
REACT_APP_FLEXO_API="https://some.url.tld/"
REACT_APP_FLEXO_SECRET="SOME-JWT-TOKEN-STRING"
```

Once you have that file (and please use that filename since it's in the `.gitignore` already), you're ready to start Flexo Web for development!

I use `yarn`, so the commands are:

```shell
> yarn

> yarn start
```

But if you're using `npm`, it's almost exactly the same!

```shell
> npm i

> npm start
```

Happy hacking! ;)
