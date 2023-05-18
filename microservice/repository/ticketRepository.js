// import driver from '../startup/neo4j.js';
// import uuid from 'node-uuid';

// const session = driver.session();


// export default {
//     createTicket: async (data) => {
//         const firstname = data.firstname
//         const email = data.email
//         const msg = data.msg

//         console.log(data)

//         try {
//             const result = await session.run(
//                 'CREATE (a:ticket {id: $id, firstname: $firstname, email: $email, msg: $msg}) RETURN a',
//                 {
//                     id: uuid.v4(),
//                     firstname : firstname,
//                     email : email,
//                     msg : msg
//                 }
//             )
//             const singleRecord = result.records[0]
//             const node = singleRecord.get(0)

//             return {
//                 success: true,
//                 object: node,
//                 msg: "",
//                 status: 200
//             }
//         }catch (e) {
//             console.error(`Something went wrong: ${e}`);
//         }
//     }

// }