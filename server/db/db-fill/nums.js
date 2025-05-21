import { Nums } from "../models";

async function fillNums() {
    Nums.findAndCountAll()
        .then(async function add(result) {
            if(result.count === 0){
               for(let i = 1; i <=100; i++){
                    let file = '';
                    if(i <= 10)
                        file = '00' + i.toString() + '.m4a';
                    else if (i < 100)
                        file = '0' + i.toString() + '.m4a';
                    else
                        file = i.toString() + '.m4a';
                    await Nums.create({
                        number: i,
                        sound: '/sounds/numbers/'+ file
                        })
                }
            }
        })
        .catch(err => {
            throw err;
        })
    
    
}

export default fillNums;
