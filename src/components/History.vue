<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="test in tests" :key="test.id"
      class="d-flex justify-content-between align-items-center">
        {{test.meet_id}}
        <b-badge variant="primary" pill>{{convertTime(test.create_at)}}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { db } from '../main'
import Fingerprint from 'fingerprintjs'

var uid = new Fingerprint().get()
export default {
  name: 'QrCodeScan',
  data () {
    return {
      tests: []
    }
  },
  methods: {
    convertTime (timestamp) {
      // console.log(formattedTime)
      var a = new Date(timestamp * 1000)
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      var year = a.getFullYear()
      var month = months[a.getMonth()]
      var date = a.getDate()
      var hour = a.getHours()
      var min = a.getMinutes()
      var sec = a.getSeconds()
      var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
      return time
    }
  },
  firestore () {
    return {
      tests: db.collection('mock_data').where('uid', '==', uid)
    }
  }
}
</script>
