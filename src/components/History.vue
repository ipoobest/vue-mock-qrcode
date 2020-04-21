<template>
  <div>
    <b-list-group pill>
      <b-list-group-item v-for="data in datas" :key="data.id"
      class="d-flex justify-content-between align-items-center" >
        {{data.meet_id}}
        <b-badge variant="primary">{{convertTime(data.create_at)}}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import Fingerprint from 'fingerprintjs'
import { db } from '../main'

var uid = new Fingerprint().get()
export default {
  name: 'QrCodeScan',
  data () {
    return {
      datas: []
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
      datas: db.collection('tracking').where('uid', '==', uid)
    }
  }
}
</script>
