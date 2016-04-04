# Node.js Express Boilerplate
Node.js Express Boilerplate provides you with an initial server to help you get
underway with your projects.

## What's Included?
Aside from Express support, this package also has functionality for rendering
`pug` (jade) views and compiling `sass` to CSS through the use of gulp.

## Getting Started
To get started using Node.js Express Boilerplate, you will need to run the
following commands:

```
$ npm install -g gulp
$ git clone https://github.com/nerdenough/js-express-boilerplate.git
$ npm install
```

Sass stylesheets located within the `sass` directory, can be compiled by running
either `gulp` (which will also start watching the directory) or `gulp sass`.

Once all the packages are installed, you can start the server by running `npm
start`. This will start the server listening on port `3000` unless specified
otherwise.

## File Structure
The following tree illustrates how Node.js Express Boilerplate has setup your
file structure. Not all folders have been created, but the file structure should
explain where you should place your files (unless you choose to change the
structure).

```
.
├── public
│   ├── css
│   │   └── # compiled stylesheets will be placed here
├── sass
│   └── # sass files should be placed here
├── routes
│   └── index.js
├── views
│   ├── index
│   │   └── index.pug
│   ├── shared
│   │   ├── head.pug
│   │   └── layout.pug
│   └── error.pug
└── server.js
```

### /public
Public is a directory should contain any files you want visible to the public,
such as stylesheets, JavaScript and images.

### /sass
The stylus directory should hold all your .scss files. The server has been setup
to compile the files from this directory into `/public/css` upon running the
`gulp` command.

### /routes
Routes should contain all your router specific files.

### /views
Views should contain all of your pug views. The structure provided is just an
example of how your views could be laid out.
