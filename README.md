# Linger

Prevent the game from exiting immediately, and provides a button to go to game over.

## Development

The project is set up to use combine files using [RequireJS](http://requirejs.org/) and [amdclean](https://github.com/gfranko/amdclean), with build automation through [Grunt](http://gruntjs.com/), which combines the JS, inlines HTML, copies files, and edits `modinfo.json` to fix up paths and names.

The generated project includes a `package.json` that lists the dependencies, but you'll need to run `npm install` to download them.

The repository expects to be in a mod folder named `linger_dev`.  The default grunt task builds to `linger_test`.  The 'production' build is through:

    grunt --target=linger

The main mod file is `modinfo.dev.json` because PAMM rewrites `modinfo.json` when updating it.  `grunt copy:dev` is a convience task to update the live file from the formatted one.

During development, RequireJS is loading files on demand, but the browser cache often doesn't keep up with recent changes.  With the debugger attached, use the "disable cache" setting (see gear icon in bottom right).
