function solution(str, ending){
    if(str.slice(-3)== ending || str.slice(-2) == ending || str.slice(-1) == ending || str.slice(-4) == ending || '' == ending){
      return true;
    }else{
      return false;
    }
  }