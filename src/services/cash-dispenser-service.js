//service
import { setLocalStorage, getLocalStorage, removeLocalStorage } from '../services/local-storage-service';

export const cashDispenser = (target)=>{
    

if (parseInt(target) % 5 != 0) return [];
    
let cash = getLocalStorage('cash');


let fiver=cash[0];
let tenner=cash[1];
let twenty=cash[2];

cash = [fiver, tenner, twenty];

const answer=[];

//running sum/total
let sum=0;

//main loop to dispense cash
while (getSum() < target) {
    dispenseCash(sum);
    sum=getSum();
}   

setLocalStorage('cash', cash);

return answer;

// this function add bill into the answer []
// then remove that bill from the array, i.e. pop()
// adding only if the sum is <= target, and if that denomination is still available.
function dispenseCash(sum) {
    if (fiver.length != 0 && getSum()+5 <= target) {
        answer.push(fiver.pop());
    }
    if (tenner.length != 0 && getSum()+10 <= target) {
        answer.push(tenner.pop());
    }
    if (twenty.length != 0 && getSum()+20 <= target) {
        answer.push(twenty.pop());    
    }
};

//helper method to calculate the running sum
//of all the bills we've added so far in the answer []
    function getSum() {
        return answer.reduce((a,b)=>a+b,0);
    }

}