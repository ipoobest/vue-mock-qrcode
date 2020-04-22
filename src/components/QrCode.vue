<template>
  <div class="QrCode">
  <h2>{{ uuid }}</h2>
  <qrcode :background="background" :size="size" :cls="qrCls" :value="qrText"></qrcode>
  </div>
</template>

<script>
// console.log(uid)
import Qrcode from 'v-qrcode/src/index'
import Fingerprint from 'fingerprintjs'
import { db } from '../main'

var uid = new Fingerprint().get()
export default {
  name: 'QrCode',
  mounted () {
    // console.log(uid)
    // this.createUser()
    // if (this.checkedUser() != null) {
    //   console.log('have user')
    // } else {
    //   this.checkedUser(uid)
    // }
  },
  methods: {
    createUser (userId) {
      console.log('mounted')
      return db.collection('user').add({ uid: this.userId, status: '0' })
    },
    checkedUser () {
      console.log('create')
      var user = db.collection('user').where('uid', '==', uid)
      return user
    }
  },
  components: {
    Qrcode
  },
  data () {
    return {
      uuid: uid,
      qrCls: 'qrcode',
      qrText: uid.toString(),
      size: 300,
      background: '#fff'
    }
  }
}

</script>
