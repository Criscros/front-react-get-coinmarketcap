
import axios from 'axios'

class CoinMarketCapService {
    async getTopCryptocurrencies() {
        try {
          const response = await axios.get('https://s1k9howif4.execute-api.us-east-1.amazonaws.com/Prod/')
          .then((dynamoData)=>{
            // MY OBJECT 

            var myObject = []

            //console.log('*****',dynamoData.data.Items)
             dynamoData.data.Items.map((data)=>{
            
                data.data.M.data.L.map((info)=>{
                  console.log('**DETAILS****',info.M)
                  myObject.push(info.M)
                })
             })

             return myObject

          });
     
          return response.data;
        } catch (error) {
          console.error('Error fetching top cryptocurrencies:', error);
          throw error;
        }
      }
  }
  
  export default CoinMarketCapService;