// import { profile } from "./quiz.model";

// export class dataService {
//     profiles: profile[] = [
//         new profile('Kohli', '1', 'History'),
//         new profile('Stokes', '2', 'Physics'),
//         new profile('Curran', '3', 'Chemistry'),
//         new profile('Williamson', '4', 'Finance'), 
//       ]
    
//     getData(id: string){
//         const data = this.profiles.find(
//             (pro) => {
//                 return pro.rollno === id;
//               }
//         )
//         return data
//     }
//     updateData(newProfile: profile){
//         const original = this.profiles.find(
//             (pro)=>{
//                 return pro.rollno === newProfile.rollno
//             }
//         )
//         if(original){
//             original.name = newProfile.name
//             original.department = newProfile.department
//         }
//     }
//     addData(newProfile: profile){
//         this.profiles.push(newProfile)
//     }
//     deleteData(id: string){
//         const index = this.profiles.findIndex(x => x.rollno === id)
//         this.profiles.splice(index, 1)
//     }
// }