import Undead from '../undead';

test('Создание Undead', () => {
  const undead = new Undead('undead');
  const expected = {
    name: 'undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(undead).toEqual(expected);
});