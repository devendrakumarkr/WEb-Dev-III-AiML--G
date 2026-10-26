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


///Read Operation  1. find()  2. findOne()
// db.doctors.find()
// db.doctors.findOne()
// db.doctors.find({name: "Dr. Abhijeet"})
// db.doctors.find({department: "Cardiology"})


//update operation 1. updateOne()  2. updateMany()
// db.doctors.updateOne(
//     {name: "Dr. John"},
//     {
//         $set:{
//             fees: 1500,
//             experience: 15
//         }
//     }
// )

// db.doctors.updateMany(
//     {name: "Dr. Rakesh"},
//     {
//         $set:{
//             fees: 1400,
//             experience: 12
//         }
//     }
// )

//Delete operation 1. deleteOne()  2. deleteMany()

// db.doctors.deleteOne({name: "Dr. Rakesh"})


// db.doctors.find(
//     {
//         fees:{
//             $gte: 1000
//         }
//     }
// )

// db.doctors.find(
//     {
//         department: "Cardiology",
//         fees: {
//             $gte: 1000
//         }
//     }
// )

// db.doctors.find(
//     {
//         $or:[
//             {department: "Cardiology"},
//             {fees: {$gte: 1000}}
//         ]
//     }
// )


// db.doctors.find({},{name:1,department:1,_id:0})

// db.doctors.find().limit(2)
// db.doctors.find().skip(2).limit(2)

// db.doctors.find().sort({fees:-1})  //ascending order

