<template>
  <div class="home">
    <v-btn @click="deleteTweets()">Deleter Bot</v-btn>
    <v-btn>Blocker Bot</v-btn>
  </div>
</template>

<script>
import { spawn } from 'child_process'
// import { deleteTweet } from '../twitAdapter'

export default {
  name: 'Home',
  methods: {
    deleteTweets() {
      debugger
      const python = spawn('python', ['../python-src/bot.py'])

      python.stdout.on('data', (data) => {
        console.log(data.toString())
      })

      // python.on('close', (code) => {
      // console.log(`child process close all stdio with code ${code}`);
      // // send data to browser
      // res.send(dataToSend)
      // })
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100vh
  display flex
  justify-content space-around
  align-items center
</style>
