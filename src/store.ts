import { manage } from 'manate';

export class Store {
  public showToolbar = true;
}

const store = manage(new Store());

export default store;
