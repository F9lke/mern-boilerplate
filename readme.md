# MERN Stack Boilerplate

A boilerplate file structure for the MERN stack. MERN is a scaffolding tool which makes it easy to build isomorphic apps using Mongo, Express, React and NodeJS.

## Getting Started

These instructions will get you the latest version of this project up and running on your local mashine for testing and development purposes.

### Prerequesites

* **[NodeJS](https://nodejs.org/en/)** - A recent version of NodeJS, preferably version 8.11.2 or higher
* **MongoDB Instance** - [mlab](https://mlab.com/) is recommended

### Installing

A short guidance on how to setup the boilerplate on you local mashine.

After forfilling the prerequesites mentioned above, the project can be cloned with the following command in your git bash:

```
git clone https://github.com/F9lke/mern-boilerplate
```

Thanks to the use of MongoDB, it is not necessary to manually create the database structure. In order to make this database system work on the other hand, you will have to create a file called "keys_dev.js" inside the folder "config" with the following code:

```
module.exports = {
    mongoURI: 'YOUR MONGODB URI',
    secretOrKey: 'YOUR SECRET'
}
```

After you followed these instructions, you can now install the dependencies using npm with the following commands:

```
npm install
npm run client-install
```

## Contributing

It is highly appreciated to leave your thoughts and/or comitting your code related suggestions in order to improve code quality, project structure and functionality.


## Versioning

The latest version of this project is always available in this repository. Please notice, that updates are published very irregularly.

## MIT License

Copyright (c) 2018 Florian Götzrath

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.