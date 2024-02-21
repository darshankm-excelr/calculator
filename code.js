const number =[12,45,23,1].filter((number)=>number>10);

console.log(number);

const hello=number.reduce((accumulator,number)=>accumulator+number);
console.log(hello);

const darshan={name: 'darshan',
               age:"18",
               sayhi:()=>{console.log(this.name)}
};
darshan.sayhi();