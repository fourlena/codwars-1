function fakeBin(x){
    // let num = x.split('');
      let result = '';
      for(let i=0; i < x.length; i++){
        if (x[i] > 4){
          result += 1;
        } else{
          result += 0;
        }
      }
      return result;
    }