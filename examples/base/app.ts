import axios from '../../src/index'

// axios({
//   url: '/base/get',
//   method: 'get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

// axios({
//   url: '/base/get',
//   method: 'get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()

// axios({
//   url: '/base/get',
//   method: 'get',
//   params: {
//     date
//   }
// })

// axios({
//   url: '/base/get',
//   method: 'get',
//   params: {
//     foo: '@:$, '
//   }
// })

// axios({
//   url: '/base/get',
//   method: 'get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })

// axios({
//   url: '/base/get#hash',
//   method: 'get',
//   params: {
//     foo: 'bar'
//   }
// })

// axios({
//   url: '/base/get?foo=bar',
//   method: 'get',
//   params: {
//     bar: 'baz'
//   }
// })

// axios({
//   url: '/base/post',
//   method: 'post',
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// axios({
//   method: 'post',
//   url: '/base/post',
//   headers: {
//     'content-type': 'application/json',
//     Accept: 'application/json, text/plain, */*'
//   },
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// const arr = new Int32Array([21, 31])

// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })

// const paramsString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(paramsString)

// axios({
//   method: 'post',
//   url: '/base/post',
//   data: searchParams
// })

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res)
})

axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 3,
    b: 4
  }
}).then(res => {
  console.log(res)
})
