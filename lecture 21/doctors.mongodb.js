use("HospitalDB")

// db.doctors.find()

//create operation
///1. insert   2. insertOne  3. insertMany
// db.doctors.insert({
//     name:"Dr. Abhijeet",
//     specialization:"Cardiologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Cardiology",
// })

// db.doctors.insertOne({
//     name:"Dr. deepak",
//     specialization:"Neurologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Neurology",
// })

// db.doctors.insertMany([
//     {
//         name:"Dr. Alex",
//         specialization:"Cardiologist",
//         experience:10,
//         fees:500,
//         salary:1000000,
//         department:"Cardiology",
//     },
//     {
//         name:"Dr. John",
//         specialization:"Neurologist",
//         experience:10,
//         fees:500,
//         salary:1000000,
//         department:"Neurology",
//     }
// ])