import Bowman from '../bowman';

test('Создание Bowman', () => {
  const bowman = new Bowman('bowman');
  const expected = {
    name: 'bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowman).toEqual(expected);
});