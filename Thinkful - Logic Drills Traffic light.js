function updateLight(current) {
  
    if(current == "green"){
      return current.replace("green", "yellow");
    } else if (current == "yellow"){
      return current.replace("yellow", "red");
    } else if (current == "red"){
      return current.replace("red", "green");
    }
  
  }