<template>
  <div class="QrCodeScanView">
    <h2 class="header_h2">Scan QR code</h2>
    <QrCodeScan></QrCodeScan>
  </div>
</template>

<script>
// @ is an alias to /src
import QrCodeScan from '@/components/QrCodeScan.vue'

export default {
  name: 'QrCodeSancView',
  components: {
    QrCodeScan
  }
}
</script>

<style>
.header_h2 {
  margin-bottom: 20px;
}
.QrCodeScanView {
position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  height: 250px;
  width: 250px;
}
</style>
