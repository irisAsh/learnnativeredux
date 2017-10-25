export const Weather = {
  name: 'Weather',
  primaryKey: 'cityId',
  properties: {
    cityId: 'string',
    title: 'string',
    publicTime: 'string',
    description: 'string',
    forecasts: {type: 'list', objectType: 'Forecast'},
    pinpointLocations: {type: 'list', objectType: 'PinpointLocation'},
  },
}

export const Forecast = {
  name: 'Forecast',
  primaryKey: 'id',
  properties: {
    id: 'string',     // cityId + index
    cityId: 'string',
    index: 'int',
    dateLabel: 'string',
    telop: 'string',
    date: 'string',
    temperature: {type: 'Temperature'},
    imageWidth: 'int',
    imageHeight: 'int',
    imageUrl: 'string',
  },
}

export const Temperature = {
  name: 'Temperature',
  primaryKey: 'id',
  properties: {
    id: 'string',     // cityId + index
    cityId: 'string',
    index: 'int',
    maxCelsius: 'string',
    maxFahrenheit: 'string',
    minCelsius: 'string',
    minFahrenheit: 'string',
  },
}

export const PinpointLocation = {
  name: 'PinpointLocation',
  primaryKey: 'cityId',
  properties: {
    cityId: 'string',
    link: 'string',
    name: 'string',
  },
}
