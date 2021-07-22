class CatDogYears {
    
    humanYearsCatYearsDogYears(humanYears) {
        var catYears = 15;
        var dogYears = 15;

        if ( humanYears >= 2 ){
            catYears += 9;
            dogYears += 9;
            let restOfYears = humanYears - 2;
            for (let i = 0; i < restOfYears; i++ ){
              catYears += 4;
              dogYears += 5;
            }
        }

        return [humanYears,catYears,dogYears];
    }

}
  
module.exports = {
    CatDogYears,
};