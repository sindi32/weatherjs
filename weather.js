class Weather {
  constructor(city, countryCode) {
    this.apiKey = "01bc8d33a0f37d27793b8548451526e0";
    this.city = city;
    this.countryCode = countryCode;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${
        this.apiKey
      }&units=metric`
    );

    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
