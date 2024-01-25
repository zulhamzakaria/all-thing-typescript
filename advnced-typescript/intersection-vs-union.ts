export type Name = {name:string}
export type Age = {age:number}

type Union = Name | Age | (Name & Age)

let union:Union

union = {name:'jane'}
union = {age : 65}
union = {name:'schlawg', age:1}

function filterUnion(union:Union){
    if('name' in union){
        union.name
    }
    if('age' in union){
        union.age
    }
    if('name' in union  && 'age' in union){
        union.name;
        union.age;
    }
}