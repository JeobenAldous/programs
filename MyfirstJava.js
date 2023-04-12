function sinking(participant, rounds){
    rounds = [4,2,5,3,2];{
    result = (Math.trunc(participant/rounds[0])*rounds[0])
    result1 = (Math.trunc(result/rounds[1])*rounds[1])
    result2 = (Math.trunc(result1/rounds[2])*rounds[2])
    result3 = (Math.trunc(result2/rounds[3])*rounds[3])
        exp = (Math.trunc(result3/rounds[4])*rounds[4])} 
      console.log("participants:"+ participant);
      console.log("rounds: "+ rounds);
      console.log("participant left: " + exp);
    }
    sinking(11, );