const jwt=require('jsonwebtoken');
const data={
    _id:"123456",
}

// const token=jwt.sign(data,"asjghriweycx88qwerwhbvsd",{expiresIn:"1h"});
// console.log(token);

const generatedToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTYiLCJpYXQiOjE3OTQ4MDU2NDksImV4cCI6MTc5NDgwOTI0OX0.zo-rFeoWDPn8LqtG2f5pqS_ULcTOBChlUNanmiQIXe4"

const result=jwt.verify(generatedToken,"asjghriweycx88qwerwhbvsd");
console.log(result);