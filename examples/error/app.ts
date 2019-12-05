import axios, { IAxiosError } from '../../src/index'

axios({
  url: '/error/get1',
  method: 'get'
})
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })

axios({
  url: '/error/get',
  method: 'get'
})
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })

setTimeout(() => {
  axios({
    url: '/error/get',
    method: 'get'
  })
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    })
}, 5000)

axios({
  url: '/error/timeout',
  method: 'get',
  timeout: 2000
})
  .then(res => {
    console.log(res)
  })
  .catch((e: IAxiosError) => {
    console.log(e.message, '----message')
    console.log(e.config, '-----config')
    console.log(e.code, '-----code')
    console.log(e.request, '-----request')
    console.log(e.isAxiosError, '-----isAxiosError')
  })
