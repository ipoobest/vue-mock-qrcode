<template>
  <div class="QrCodeScanView">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
