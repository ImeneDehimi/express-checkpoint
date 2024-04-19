const express = require('express')

// Create the custom middleware function
exports.checkTime = ((req, res, next) => {
    const businessHoursStart = new Date('2024-04-19T09:00:00').getTime(); // Replace with actual start time
    const businessHoursEnd = new Date('2024-04-19T17:00:00').getTime(); // Replace with actual end time
  const now = new Date().getTime();

  // Check if the current time falls within business hours
  if (now >= businessHoursStart && now <= businessHoursEnd) {
    next(); // Allow the request to proceed
  } else {
    // Request is outside business hours, send an appropriate response
    res.status(403).send({
      message: 'Application is only available during business hours (Monday-Friday, 9AM-5PM).',
      businessHours: {
        start: businessHoursStart,
        end: businessHoursEnd,
      },
    });
  }
});