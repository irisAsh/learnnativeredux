import WeatherApp from '../components/WeatherApp'
import Bookshelf from '../components/Bookshelf'

const HomeScreenRoutes = {
  WeatherApp: {
    screen: WeatherApp,
    title: '天気検索',
    description: 'お天気検索アプリサンプル',
  },
  Bookshelf: {
    screen: Bookshelf,
    title: '本棚',
    description: '本を登録してリストに表示するサンプル',
  },
}

export default HomeScreenRoutes
