import Component, { tracked } from '@glimmer/component'
import Navigo from 'navigo'
import SeasonsData from './seasonsData.js'

const router = new Navigo(null, true)

export default class TheOffice extends Component {
  seasonsData = SeasonsData

  @tracked route: string = 'home'

  constructor(options) {
    super(options)
    router
      .on({
        '/': () => { this.route = 'home'; },
        '/episodes': () => { this.route = 'episodes'; },
        '/about-show': () => { this.route = 'about-show'; },
        '/about-site': () => { this.route = 'about-site'; },
      })
    .resolve();
  }
}
