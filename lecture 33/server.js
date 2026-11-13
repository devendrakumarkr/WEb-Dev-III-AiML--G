const bcrypt=require('bcrypt');


const password="Bob@123";
const password2="Bob@123";

const salt=bcrypt.genSaltSync(10);
console.log(salt);
const hash=bcrypt.hashSync(password2,salt);
console.log(hash);

// console.log(typeof `${hash}`);
const result=bcrypt.compareSync("Bob@1234",`${hash}`);
console.log(result);