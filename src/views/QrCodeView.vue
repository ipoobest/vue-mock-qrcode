<template>
  <div class="QrCode">
    <QrCode :qrcode="uuid"></QrCode>
  </div>
</template>

<script>
// @ is an alias to /src
import QrCode from '@/components/QrCode.vue'
import Fingerprint from 'fingerprintjs'
import { db } from '../main'

var uid = new Fingerprint().get()
export default {
  name: 'QrCodeView',
  components: {
    QrCode
  },
  mounted () {
    var userId = this.checkUserLocalStorage()
    if (userId) {
      console.log('success : ' + userId)
    } else {
      this.saveUidToLocalStoreage()
      this.addUserToFireStore(this.uuid)
    }
  },
  data () {
    return {
      uuid: uid
    }
  },
  methods: {
    saveUidToLocalStorage () {
      localStorage.setItem('uuid', JSON.stringify(this.uuid))
    },
    checkUserLocalStorage () {
      var a = JSON.parse(localStorage.getItem('uuid'))
      console.log('aa : ' + a)
      if (a == null) {
        return false
      }
      return true
    },
    addUserToFireStore () {
      console.log('firstore : ' + this.uuid)
      return db.collection('user').add({ uid: this.uuid, status: '5' })
    }
  }
}
</script>
