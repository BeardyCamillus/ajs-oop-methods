import Daemon from '../daemon';

test('Создание Daemon', () => {
    const daemon = new Daemon('daemon');
    const expected = {
      name: 'daemon',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
  
    expect(daemon).toEqual(expected);
  });