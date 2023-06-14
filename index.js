// code your solution here
saturdayFun('bathe my dog');
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
    
}


 function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
    
}
mondayWork("work from home");



function wrapAdjective(asteric="*") {


      return function(worker="a hard worker"){

        return `You are ${asteric}${worker}${asteric}!`

      }
}
wrapAdjective();