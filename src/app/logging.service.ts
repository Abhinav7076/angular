export class LoggingService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ]
    
    showStatus(message: string){
      console.log("Message is : " + message)
    }
      
}