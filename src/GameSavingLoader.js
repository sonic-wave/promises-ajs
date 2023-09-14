import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => (json(result)))
      .then((result) => new GameSaving(JSON.parse(result)));
  }
}
