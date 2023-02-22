import { environment } from './environment'

export default class ApplicationService {
  constructor(private readonly acessToken: string) {}

  getDefaultHeader() {
    return { Authorization: `Bearer ${this.acessToken}` }
  }

}