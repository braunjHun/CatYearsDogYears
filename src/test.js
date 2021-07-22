const { CatDogYears } = require('./catDogYears');

describe('Test Cat years, Dog years functions', () => {
  it('Calculate Cats & Dog years to a one year old human', () => {
    const catDogYears = new CatDogYears();
    expect(catDogYears.humanYearsCatYearsDogYears(1)).toStrictEqual([1,15,15]);
  });
  it('Calculate Cats & Dog years to a two years old human', () => {
    const catDogYears = new CatDogYears();
    expect(catDogYears.humanYearsCatYearsDogYears(2)).toStrictEqual([2,24,24]);
  });
  it('Calculate Cats & Dog years to a ten years old human', () => {
    const catDogYears = new CatDogYears();
    expect(catDogYears.humanYearsCatYearsDogYears(10)).toStrictEqual([10,56,64]);
  });
});