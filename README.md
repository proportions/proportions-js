# Proportions 📐

[![npm module](https://badge.fury.io/js/proportions.svg)](https://www.npmjs.org/package/proportions)
[![Dependencies](https://david-dm.org/christianhg/proportions.svg)](https://david-dm.org/christianhg/proportions)
[![devDependencies Status](https://david-dm.org/christianhg/proportions/dev-status.svg)](https://david-dm.org/christianhg/proportions?type=dev)

> Organic, Mechanical and Musical Proportions

From *The Elements of Typographic Style* by Robert Bringhurst.

Install using `npm` or `yarn`:

```
[npm|yarn] install proportions
```

Import the whole `proportions` object or destructure it:

```js
import proportions from 'proportions'
```

```js
import { goldenSection } from 'proportions'
```

```
Double Square               2
Tall Octagon                1.924
Tall Hexagon                1.866
Octagon                     1.848
Hexagon                    ~1.732
Tall Pentagon               1.701
Golden Section             ~1.618
Pentagon                   ~1.539
Short Pentagon              1.376
Tall Half Octagon           1.307
Half Octagon                1.207
Truncated Pentagon         ~1.176
Turned Hexagon              1.155
Tall Cross Octagon          1.082
Turned Pentagon             1.051
Square                      1
Broad Pentagon              0.951
Broad Cross Octagon         0.924
Broad Hexagon               0.866
Full Cross Octagon          0.829

ISO                        ~1.414

Octave                      2                           C – C
Major 7th                   1.875                       C – B
Minor 7th                   1.778                       C – B♭
Major 6th                  ~1.667                       C – A
Minor 6th                   1.6                         C – A♭
Fifth                       1.5                         C – G
Diminished 5th             ~1.414                       C – G♭
Augmented 4th              ~1.414                       C – F♯
Fourth                     ~1.333                       C – F
Major 3rd                   1.25                        C – E
Minor 3rd                   1.2                         C – E♭
Major 2nd                   1.125                       C – D
Minor 2nd                  ~1.067                       C – D♭
Unison                      1                           C – C
```
