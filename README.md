[Harp]:http://harpjs.com/
[Babel]:http://babeljs.io
[webpack]:https://webpack.github.io/
[harp-babel]:https://github.com/glued/harp-babel

# harp-starter

[Harp] boilerplate with [Babel] and [webpack] for ES6+ friendly development.

Based on [harp-babel] by Richard Worsfold, MIT licensed.

### Setup

You must have [Harp] installed globally first `npm install -g harp`

Then, pick any directory and run the following from the terminal / command prompt:

    harp init -b dnerdy/harp-starter
    npm install

### Run webpack

Run for development:

	npm run dev

Run for production:

	npm run prod

In production, the javascript is minified and sourcemaps are removed.
This will also lint your code using ESLint and JSCSrc

These commands are defined in package.json
