import Bowman from '../bowman';
import Character from '../character';

test('Создание персонажа с именем меньше 2 символов', () => {
  expect(() => {
    const character = new Bowman('A');
    return character;
  }).toThrow(new Error('Имя должно содержать минимум 2 символа!'));
});

test('Создание персонажа с именем больше 10 символов', () => {
  expect(() => {
    const character = new Bowman('Abcdefghijklm');
    return character;
  }).toThrow(new Error('Имя может содержать максимум 10 символов!'));
});

test('Создание персонажа с неверным типом', () => {
  expect(() => {
    const character = new Character('Test', 'Orc');
    return character;
  }).toThrow(new Error('Неверный тип персонажа!'));
});

test('Повышение уровня персонажа с 50% здоровьем', () => {
  const character = new Bowman('Test');
  character.health = 50;
  character.levelUp()

  expect(character.health).toEqual(100);
  expect(character.level).toEqual(2);
});

test('Повышение уровня мертвого персонажа', () => {
  expect(() => {
    const character = new Bowman('Test');
    character.health = 0;
    character.levelUp();
  }).toThrow(new Error('Невозможно повысить уровень мертвого персонажа!'));
});

test('Урон персонажу со 100% здоровья', () => {
  const character = new Bowman('Test');
  character.health = 100;
  character.damage(10);

  expect(character.health).toEqual(92.5);
});

test('Урон персонажу превышающий значение здоровья', () => {
  const character = new Bowman('Test');
  character.health = 3;
  character.damage(100);

  expect(character.health).toEqual(0);
});