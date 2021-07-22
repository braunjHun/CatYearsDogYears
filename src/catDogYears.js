class CatDogYears {
    
    humanYearsCatYearsDogYears(n) {
        var catYears=0;
        var dogYears=0;
        if (n>=1){
          catYears=15;
          dogYears=15;
          if (n>=2){
            catYears+=9;
            dogYears+=9;
            let restOfYears = n-2;
            for (let i=0;i<restOfYears;i++){
              catYears+=4;
              dogYears+=5;
            }
          }
        }
        return [n,catYears,dogYears];
    }

}
  
module.exports = {
    CatDogYears,
};