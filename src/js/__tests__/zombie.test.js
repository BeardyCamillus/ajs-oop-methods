import Zombie from '../zombie';

test('Создание Zombie', () => {
  const zombie = new Zombie('zombie');
  const expected = {
    name: 'zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(zombie).toEqual(expected);
});