import config from './config'
import twit from 'twit'

const T = new twit(config)

const params = {
  screen_name: 'singularity_ut',
  count: 1,
  exclude_replies: true,
  include_rts: false
}

export const tweet = (body) => {
  // {
  //   status: ''
  // }
  T.post('statuses/update', body, (err, data, res) => {
    console.log(data)
  })
}

export const tweetMedia = (body) => {

}

export const retweet = (id) => {
  T.post('statuses/retweet/:id', { id }, (err, data, res) => {
    console.log(data)
  })
}

export const unretweet = (id) => {
  T.post('statuses/unretweet/:id', { id }, (err, data, res) => {
    console.log(data)
  })
}

export const quote = (id, body) => {
}

export const getTweetDetails = (id) => {
  T.get('statuses/show/:id', { id }, (err, data, res) => {
    console.log(data)
  })
}

export const getTweetListDetails = (ids) => {
  // TODO : create comma-separated id list
  T.get('statuses/lookup', ids, (err, data, res) => {
    console.log(data)
  })
}

export const getTimeline = (params) => {
  T.get('statuses/user_timeline', params, (err, data, res) => {
    console.log(data)
  })
}

export const deleteTweet = (id) => {
  T.post('statuses/destroy/:id', id, (err, data, res) => {
    if (err) {
      console.log(err)
    }
  })
}

export const getFollowers = () => {

}

export const block = (id) = {

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

// T.get('search/fullarchive/dev', { q: 'from:singularity_ut since:2020-04-14 until:2020-04-15', count: 100, include_entities: false }, (err, data, response) => {
//   console.log(data.statuses)
//   for (tweet of data.statuses) {
//     if (tweet.user.id_str === '991487461787406337') {
//       console.log('deleted')

//     }
//   }
// })

// 