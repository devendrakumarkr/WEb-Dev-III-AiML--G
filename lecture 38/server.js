const EventEmitter=require('events');
const emitter=new EventEmitter();


const informStudents=(time)=>{
    console.log(`Bell rang at ${time}, students should come in the class`);
}
emitter.on("bell-rang",informStudents)

// emitter.on("bell-rang",()=>{
//     console.log("Bell rang, teacher can start the class");
// })


emitter.emit("bell-rang","10:00 AM")
emitter.emit("bell-rang","11:00 AM")
// emitter.off("bell-rang",informStudents)
emitter.emit("bell-rang","12:00 PM")