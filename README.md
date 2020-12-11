# xampl

CLI tools and SDK for [xampl](https://xampl.io)

## Project Status

[![license](https://img.shields.io/npm/l/xampl.svg)](https://github.com/brianneisler/xampl/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/xampl.svg)](https://badge.fury.io/js/xampl)<br />
[![Build Status](https://travis-ci.org/brianneisler/xampl.svg)](https://travis-ci.org/brianneisler/xampl)<br />
[![Code coverage](https://codecov.io/gh/brianneisler/xampl/branch/master/graph/badge.svg)](https://codecov.io/gh/brianneisler/xampl/branch/master/)<br />
[![NPM](https://nodei.co/npm/xampl.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/xampl/)

## Documentation

[Full API documentation](docs/API.md) - Learn about each method


## Why?

Xampl makes it easy to manage and publish examples for your library. It also
allows for the community to contribute examples that are easy to find and
experiment with. 

## Features

## TODO
- [ ] Publish examples for the given library to [xampl](https://xampl.io)

## Install

```sh
npm install --save-dev xampl
```

## Usage

Xampl can be used as a binary or programmatically.

## Using the Binary

You can using the binary directly by installing globally

```sh
npm install -g firemin
```

Publish your examples after deploying a new version of your library by simply
running...
```sh
xampl publish
```
This will scan the project for a package.json which it will use to identify the
package name and version. It will also scan the project for all `*.xampl` files.
Every example contained in those files will be independently published.

## Using Programmatically

To do so, simply
install `xampl` as a project dependency and then
import the necessary methods from the `xampl` package

```sh
npm install --save xampl
```

```js
import { publish } from 'xampl'

await publish('./path/to/project')
```
