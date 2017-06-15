const axios = require('axios')

const url = 'https://ringorders.lapineinc.com/orders';

axios.get(url, {
  auth: {
    username: process.env.LAPINE_USERNAME,
    password: process.env.LAPINE_PASSWORD
  }
})
.then((response) => console.log('response: ', response))
.catch(err => console.log('error: ', err))