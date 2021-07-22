const { CatDogYears } = require('./catDogYears');

describe('Test Cat years, Dog years functions', () => {
  it('Basic test with a one year old human', () => {
    const catDogYears = new CatDogYears();
    expect(catDogYears.humanYearsCatYearsDogYears(1)).toStrictEqual([1,15,15]);
  });
});