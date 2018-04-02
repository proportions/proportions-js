# Proportions for JavaScript 📐

[![npm module](https://badge.fury.io/js/proportions.svg)](https://www.npmjs.org/package/proportions)
[![Dependencies](https://david-dm.org/christianhg/proportions.svg)](https://david-dm.org/christianhg/proportions)
[![devDependencies Status](https://david-dm.org/christianhg/proportions/dev-status.svg)](https://david-dm.org/christianhg/proportions?type=dev)

> Organic, Mechanical and Musical Proportions for JavaScript

From *The Elements of Typographic Style* by Robert Bringhurst.

* [General info](https://github.com/proportions/proportions)
* [Sass implementation](https://github.com/proportions/proportions-sass)

```
npm install proportions
```

Import the whole `proportions` object:

```js
import proportions from 'proportions'
```

Or "destructure" it to only get a select few:

```js
import { goldenSection } from 'proportions'
```

Available proportions:

```js
export {
  doubleSquare,
  tallOctagon,
  tallHexagon,
  octagon,
  hexagon,
  tallPentagon,
  goldenSection,
  pentagon,
  shortPentagon,
  tallHalfOctagon,
  halfOctagon,
  truncatedPentagon,
  turnedHexagon,
  tallCrossOctagon,
  turnedPentagon,
  square,
  broadPentagon,
  broadCrossOctagon,
  broadHexagon,
  fullCrossOctagon,
  iso,
  octave,
  majorSeventh,
  minorSeventh,
  majorSixth,
  minorSixth,
  fifth,
  diminishedFifth,
  augmentedFourth,
  fourth,
  majorThird,
  minorThird,
  majorSecond,
  minorSecond,
  unison
}
```
