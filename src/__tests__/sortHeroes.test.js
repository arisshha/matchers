import sortHeroesByHealth from '../sortHeroes.js';

describe('sortHeroesByHealth', () => {
  test('сортирует героев по убыванию здоровья', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sorted = sortHeroesByHealth(heroes);

    expect(sorted).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('не изменяет исходный массив', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const copy = [...heroes];
    sortHeroesByHealth(heroes);
    expect(heroes).toEqual(copy);
  });
});

