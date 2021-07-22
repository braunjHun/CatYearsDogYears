const { CatDogYears } = require('./catDogYears');

describe('Test Cat years, Dog years functions', () => {
  it('test 1', () => {
    const catDogYears = new CatDogYears();
    expect(catDogYears.humanYearsCatYearsDogYears(1)).toStrictEqual([1,15,15]);
  });
});