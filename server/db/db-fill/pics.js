import { Pics } from "../models";

async function fillPics() {
    Pics.findAndCountAll()
        .then(async function add(result) {
            if(result.count === 0){
               for(let i = 1; i <=17; i++){
                    let file = i.toString() + '.png';
                    await Pics.create({
                        picture: '/images/true-answers/'+ file
                        })
                }
            }
        })
        .catch(err => {
            throw err;
        })
    
    
}

export default fillPics;
