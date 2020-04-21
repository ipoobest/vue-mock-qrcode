<template>
  <div class="QrCode">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <QrCode></QrCode>
  </div>
</template>

<script>
// @ is an alias to /src
import QrCode from '@/components/QrCode.vue'

export default {
  name: 'QrCodeView',
  components: {
    QrCode
  }
}
</script>
