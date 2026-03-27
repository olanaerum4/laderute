// OSRM Routing Client

class OSRMRoutingClient {
  constructor() {
    this.baseUrl = 'http://router.project-osrm.org'; // Replace with your OSRM server URL
  }

  async getRoute(startCoords, endCoords, waypoints) {
    const waypointsStr = waypoints.map(coord => `${coord[0]},${coord[1]}`).join(';');
    const url = `${this.baseUrl}/route/v1/driving/${startCoords[0]},${startCoords[1]};${waypointsStr};${endCoords[0]},${endCoords[1]}?overview=fales`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.routes && data.routes.length > 0) {
      const route = data.routes[0];
      const distance = route.distance / 1000; // Convert to kilometers
      const duration = route.duration / 60; // Convert to minutes

      return { distance, duration };
    }

    throw new Error('Route not found');
  }
}

// Example usage:
// const client = new OSRMRoutingClient();
// client.getRoute([startLat, startLng], [endLat, endLng], [[waypointLat, waypointLng]]);