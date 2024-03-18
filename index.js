const ephemeris = require('ephemeris');

// Function to calculate the position of the sun
function calculateSunPosition(date) {
    return ephemeris.getSunPosition(date);
}

// Function to calculate the position of the moon
function calculateMoonPosition(date) {
    return ephemeris.getMoonPosition(date);
}

// Function to calculate the phase of the moon
function calculateMoonPhase(date) {
    return ephemeris.getMoonPhase(date);
}

module.exports = {
    calculateSunPosition,
    calculateMoonPosition,
    calculateMoonPhase
};
