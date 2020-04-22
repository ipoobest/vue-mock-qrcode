<template>
  <div class="QrCode">
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
