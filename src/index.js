import { __, add, divide, multiply, pipe, subtract } from 'ramda'

const sqrt = x => Math.sqrt(x)

const doubleSquare = 2
const tallOctagon = 1.924
const tallHexagon = 1.866
const octagon = 1.848
const hexagon = sqrt(3) // ~1.732
const tallPentagon = 1.701
const goldenSection = pipe(sqrt, add(1), divide(__, 2))(5) // ~1.618
const pentagon = pipe(sqrt, multiply(2), add(5), sqrt, divide(__, 2))(5) // ~1.539
const shortPentagon = 1.376
const tallHalfOctagon = 1.307
const halfOctagon = 1.207
const truncatedPentagon = pipe(sqrt, subtract(5), divide(__, 2), sqrt)(5) // ~1.176
const turnedHexagon = 1.155
const tallCrossOctagon = 1.082
const turnedPentagon = 1.051
const square = 1
const broadPentagon = 0.951
const broadCrossOctagon = 0.924
const broadHexagon = 0.866
const fullCrossOctagon = 0.829

const iso = sqrt(2) // ~1.414

const octave = 2
const majorSeventh = 15 / 8 // 1.875
const minorSeventh = 16 / 9 // 1.778
const majorSixth = 5 / 3 // ~1.667
const minorSixth = 8 / 5 // 1.6
const fifth = 3 / 2 // 1.5
const diminishedFifth = sqrt(2) // ~1.414
const augmentedFourth = sqrt(2) // ~1.414
const fourth = 4 / 3 // ~1.333
const majorThird = 5 / 4 // 1.25
const minorThird = 6 / 5 // 1.2
const majorSecond = 9 / 8 // 1.125
const minorSecond = 16 / 15 // ~1.067
const unison = 1

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
