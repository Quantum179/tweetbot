const config = require('./config')
const twit = require('twit')

const T = new twit(config)
const params = {
  screen_name: 'singularity_ut',
  count: 1,
  exclude_replies: true,
  include_rts: false
}

// T.get('statuses/user_timeline', params, (err, data, response) => {
//   for (tweet of data) {
//     console.log(tweet.text)
//     console.log(tweet.entities.urls)
//     // if (tweet.user.id_str === '991487461787406337') {
//     //   console.log(`${tweet.id_str} deleted`)
//     //   T.post('statuses/destroy/:id', { id: tweet.id_str }, (err, response) => {
//     //     if (err) {
//     //       console.log(err)
//     //     }
//     //   })
//     // }
//   }
// })

T.get('search/fullarchive/dev', { q: 'from:singularity_ut since:2020-04-14 until:2020-04-15', count: 100, include_entities: false }, (err, data, response) => {
  console.log(data.statuses)
  for (tweet of data.statuses) {
    if (tweet.user.id_str === '991487461787406337') {
      console.log('deleted')
      T.post('statuses/destroy/:id', { id: tweet.id_str }, (err, response) => {
        if (err) {
          console.log(err)
        }
      })
    }
  }
})

// 