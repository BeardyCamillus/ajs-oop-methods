import Swordsman from '../swordsman';

test('Создание Swordsman', () => {
  const swordsman = new Swordsman('swordsman');
  const expected = {
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(swordsman).toEqual(expected);
});