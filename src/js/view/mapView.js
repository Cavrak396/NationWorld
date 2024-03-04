class MapView {
  map = null;
  data = null;

  _getCountryCoords(data) {
    this.data = data;
    console.log(data);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          const latitude = data.latlng[0];
          const longitude = data.latlng[1];
          console.log(
            `https://www.google.com/maps/@${latitude},${longitude},13z?entry=ttu`
          );

          if (!this.map) {
            this.map = L.map("map").setView([latitude, longitude], 8);

            L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(this.map);

            L.marker([latitude, longitude])
              .addTo(this.map)
              .bindPopup(`Welcome to ${data.name.common}`)
              .openPopup();
          } else {
            // Ako mapa postoji, samo postavlja novi marker
            L.marker([latitude, longitude])
              .addTo(this.map)
              .bindPopup(`Welcome to ${data.name.common}`)
              .openPopup();
          }
        },
        () => {
          alert("Could not get your position");
        }
      );
    }
  }
}

export default new MapView();
