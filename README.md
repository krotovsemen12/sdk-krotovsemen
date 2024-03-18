# sdk-krotovsemen

Sdk-krotovsemen is a Node.js module for performing astronomical calculations. It provides functions to calculate the position of the sun and moon, as well as the phase of the moon.

## Installation

To install Astralizer, use npm: `npm install sdk-krotovsemen`

## Usage
```javascript
const astralizer = require('astralizer');

const date = new Date();

console.log('Sun position:', astralizer.calculateSunPosition(date));
console.log('Moon position:', astralizer.calculateMoonPosition(date));
console.log('Moon phase:', astralizer.calculateMoonPhase(date));
```