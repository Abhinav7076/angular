import { profile } from "./profile.model";

export class dataService {
    profiles: profile[] = [
        new profile('Kohli', '1', 'History'),
        new profile('Stokes', '2', 'Physics'),
        new profile('Curran', '3', 'Chemistry'),
        new profile('Williamson', '4', 'Finance'), 
      ]
    
    getData(id: string){
        const data = this.profiles.find(
            (pro) => {
                return pro.rollno === id;
              }
        )
        return data
    }
}