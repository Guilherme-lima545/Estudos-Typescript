export interface countList {
    [key: string]: number
   }

export default function countBy(arr: (string [])) {
    return arr.reduce((acc: countList, item) => {
        if(acc[item]) {
            acc[item] += 1
        } else {
            acc[item] = 1
        }
        return acc;
       
    }, {})
}