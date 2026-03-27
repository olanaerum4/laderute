// Utility functions

// Function to calculate battery usage based on distance and consumption
function calculateBatteryUsage(distance, consumption) {
    return (distance / consumption);
}

// Function to calculate charging time based on current and target battery levels
function calculateChargingTime(currentBattery, targetBattery, chargingPower) {
    return (targetBattery - currentBattery) / chargingPower;
}

// Function to calculate cost based on kWh and price per kWh
function calculateCost(kwh, pricePerKwh) {
    return kwh * pricePerKwh;
}

// Function to estimate arrival battery level based on start battery, distance, and consumption
function estimateArrivalBattery(startBattery, distance, consumption) {
    return startBattery - calculateBatteryUsage(distance, consumption);
}

// Function to get optimal charging stops
function getOptimalChargingStops(distance, vehicleRange, batteryLevel) {
    const stops = Math.ceil((distance - batteryLevel) / vehicleRange);
    return stops > 0 ? stops : 0;
}