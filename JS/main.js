import CoordinateSet from "./CoordinateSet.js";
import Activity from "./Activity.js";

let coordinateSets = [];
for(let i = 0; i < 100; i++)
{
	coordinateSets.push(new CoordinateSet(Math.random() * 1000.0, Math.random() * 1000.0, Math.random() * 1000.0, 
		Date.now()));
}

coordinateSets.forEach(c => console.log(c));

//console.log(coord);
/* const coordDBRef = db.collection("CoordinateSets");

//query database
coordDBRef.get()
	.then(querySnapshot => querySnapshot.forEach(doc => console.log(doc.id, " => ", doc.data())))
	.catch(error => console.error("Error getting data: " , error)); */

//batch upload
/*
const batch = db.batch();


coordinateSets.forEach(coord => batch.set(coordDBRef.doc(String(Date.now())), {
	x: coord.x,
	y: coord.y,
	z: coord.z,
	timeStamp: coord.timeStamp
}));

batch.commit()
	.then(() => console.log("Write success!"))
	.catch(error => console.error("Error writing!: " , error));

*/	
	
//database test
/* db.collection("CoordinateSets").doc("test").set({
	x: coord.x,
	y: coord.y,
	z: coord.z,
	timeStamp: coord.timeStamp
	})
	.then(() => console.log("Write success!"))
	.catch(error => console.error("Error writing!: " , error)); */
