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
      if (decodedString.length === 9 || decodedString.length === 10) {
        const createdAt = new Date()
        var meetId = parseInt(decodedString)
        db.collection('mock_data').add({ uid: uid, meet_id: meetId, create_at: createdAt })
        console.log('succes')
        alert('success ' + decodedString + '!')
      } else {
        alert('ไม่สำเร็จ ' + decodedString + '!')
      }
    }
  }
}
</script>
