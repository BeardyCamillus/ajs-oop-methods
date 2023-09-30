export default class Character {
    constructor(name, type, attack, defence, health = 100, level = 1) {
        if (name.length < 2) {
            throw new Error('Имя должно содержать минимум 2 символа!');
        } else if (name.length > 10) {
            throw new Error('Имя может содержать максимум 10 символов!');
        }

        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ];
        if (!types.includes(type)) {
            throw new Error('Неверный тип персонажа!');
        }

        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack += this.attack * 0.2;
            this.defence += this.defence * 0.2;
            this.health = 100;
        } else {
            throw new Error('Невозможно повысить уровень мертвого персонажа!');
        }
    }

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
            if (this.health < 0) {
                this.health = 0;
            }
        }
    }
}