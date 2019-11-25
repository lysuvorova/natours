/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibHlzdXZvcm92YSIsImEiOiJjazJ2endoZWUwOXpoM29xbGVnc2s5M2NuIn0.09nEgtDR9WBkOuq6c0KgDA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/lysuvorova/ck2w0gvo10vij1cs7nimiauv0',
    scrollZoom: false
    /* center: [-118.113491, 34.111745],
  zoom: 10,
  interactive: false */
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add the marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include the current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
