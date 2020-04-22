<template>
  <div class="QrCodeScan">
    <qrcode-stream @decode="onDecode"></qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import Fingerprint from 'fingerprintjs'
import { db } from '../main'

var uid = new Fingerprint().get()
export default {
  name: 'QrCodeScan',
  components: {
    QrcodeStream
  },
  mounted () {
    console.log('uid : ' + uid)
  },
  methods: {
    onDecode (decodedString) {
      console.log('text : ' + decodedString.length)
      if ([9, 10, 36, 37].includes(decodedString.length)) {
        console.log(decodedString)
        const createdAt = new Date()
        db.collection('tracking').add({ uid: uid, meet_id: decodedString, create_at: createdAt })
        console.log('succes')
        alert('success ' + decodedString + '!')
      } else {
        console.log(decodedString.length)
        alert('ไม่สำเร็จ ' + decodedString + '!')
      }
    }
  }
}
</script>
