<template>
  <div class="QrCodeScan">
    <qrcode-stream @decode="onDecode"></qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
  name: 'QrCodeScan',
  components: {
    QrcodeStream
  },
  methods: {
    onDecode (decodedString) {
      console.log('text : ' + decodedString)
    }
  }
}
</script>
