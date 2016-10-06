# Globe

Set of command line utils form Globetown.

```
$ npm install -g globe
$ globe
```

## Readings

[Building a simple command line tool with npm](http://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm)
[Publishing npm packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)
[Learn shell.js](https://github.com/shelljs/shelljs)
[Npm link, developing your own npm modules without tears](http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears)

## Tips

You probably don't want to install everything in the root directory since that would require root privileges, forcing `sudo` everywhere.

- create an `.npmrc` (aka npm resource)
- add `prefix = /Users/<your username>/npm`
- create that folder `mkdir ~npm`
- add the new folder to the PATH `export PATH=~/npm/bin:$PATH`
