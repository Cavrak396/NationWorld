class MapView {
  map = null;
  data = null;

  _getCountryCoords(data) {
    this.data = data;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          const latitude = data.latlng[0];
          const longitude = data.latlng[1];

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
