use("HospitalDB")

// db.doctors.insert([
//     {
//         name:"Dr. Anya",
//         specialization:"Cardiologyst",
//         experience:4,
//         fees:900,
//         salary:3000000,
//         department:"Cardiology",
//     },
//     {
//         name:"Dr. Rahul",
//         specialization:"Neurologist",
//         experience:3,
//         fees:700,
//         salary:900000,
//         department:"Neurology",
//     },
//     {
//         name:"Dr. Kevin",
//         specialization:"Orthopedist",
//         experience:6,
//         fees:1000,
//         salary:1500000,
//         department:"Orthopedics",
//     }
// ])


// db.doctors.aggregate(
//     [
//         {
//             $match:{
//                 department:"Cardiology"
//             }
//         }
//         ,{
//             $project:{
//                 name:1,
//                 fees:1,
//                 salary:1,
//                 experience:1,
//                 _id:0
//             }
//         }
//         ,{
//             $group:{
//                 _id:"$experience",
//                 totalSalary:{$sum:"$salary"},
//                 avgSalary:{$avg:"$salary"},
//                 maxSalary:{$max:"$salary"},
//                 minSalary:{$min:"$salary"},
//                 totalDoctors:{$sum:1}
//             }
//         }
//         ,{
//             $sort:{
//                 totalSalary:-1
//             }
//         }
//         // ,{
//         //     $limit:1
//         // }
//         ,{
//             $count:"totalSalary"
//         }
//     ]
// )

// db.doctors.getIndexes()
db.doctors.find({name: "Dr. Rahul"})
// db.doctors.find({_id: ObjectId('6adae7dd6e940196c8850667')})

// db.doctors.createIndex({name:1})
// db.doctors.getIndexes()
