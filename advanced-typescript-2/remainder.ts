// 1
console.log(3 % 2);
// 0
console.log(4 % 2);

const isEven = (even: number) => even % 2 === 0;

function getNthItems<T>(array:T[], nth:number):T[]{
    return array.filter((_,i)=> i % nth === 0)
}