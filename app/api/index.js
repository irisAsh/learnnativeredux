export const fetchWeatherDetail = (id) => {
  let url = `http://weather.livedoor.com/forecast/webservice/json/v1?city=${id}`
  console.log(url)
  return fetch(url)
}
export const fetchPrimaryArea = () => {
  let url = 'http://weather.livedoor.com/forecast/rss/primary_area.xml'
  console.log(url)
  return fetch(url)
}
