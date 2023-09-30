import Character from '../character';

test('Создание персонажа с именем меньше 2 символов', () => {
  expect(() => {
    const character = new Character('A', 'Bowman', 25, 25);
    return character;
  }).toThrow(new Error('Имя должно содержать минимум 2 символа!'));
});

test('Создание персонажа с именем больше 10 символов', () => {
    expect(() => {
      const character = new Character('Abcdefghijklm', 'Bowman', 25, 25);
      return character;
    }).toThrow(new Error('Имя может содержать максимум 10 символов!'));
  });

test('Создание персонажа с неверным типом', () => {
  expect(() => {
    const character = new Character('bowman', 'Orc', 25, 25);
    return character;
  }).toThrow(new Error('Неверный тип персонажа!'));
});

test('Повышение уровня персонажа со 100% здоровьем', () => {
  const character = new Character('hero', 'Bowman', 40, 20);
  character.levelUp();
  const expected = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 24,
  };

  expect(character).toEqual(expected);
});

test('Повышение уровня персонажа с 50% здоровьем', () => {
  const character = new Character('hero', 'Bowman', 40, 20);
  character.damage(10);
  const expected = {
    name: 'hero',
    type: 'Bowman',
    health: 92,
    level: 1,
    attack: 40,
    defence: 20,
  };

  expect(character).toEqual(expected);
});

test('Повышение уровня мертвого персонажа', () => {
  expect(() => {
    const character = new Character('hero', 'Bowman', 40, 20);
    character.health = 0;
    character.levelUp();
    return character;
  }).toThrow(new Error('Невозможно повысить уровень мертвого персонажа!'));
});

test('Урон персонажу со 100% здоровья', () => {
  const character = new Character('hero', 'Bowman', 40, 20);
  character.health = 100;
  character.damage(10);
  const expected = {
    name: 'hero',
    type: 'Bowman',
    health: 92,
    level: 1,
    attack: 40,
    defence: 20,
  };

  expect(character).toEqual(expected);
});

test('Урон персонажу превышающий значение здоровья', () => {
  const character = new Character('hero', 'Bowman', 40, 20);
  character.health = 3;
  character.damage(10);
  const expected = {
    name: 'hero',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 40,
    defence: 20,
  };

  expect(character).toEqual(expected);
});