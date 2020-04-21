<template>
  <div class="QrCodeScan">
    <qrcode-stream @decode="onDecode"></qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import Fingerprint from 'fingerprintjs'
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
      console.log('text : ' + decodedString)
    }
  }
}
</script>
