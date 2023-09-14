import GameSavingLoader from '../GameSavingLoader';

test('GameSavingLoader test', () => {
  const test = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  return GameSavingLoader.load().then((result) => {
    expect(result).toEqual(test);
  });
});
