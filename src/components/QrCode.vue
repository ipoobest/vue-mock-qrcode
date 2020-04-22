<template>
  <div class="QrCode">
  <h2>{{ qrcode }}</h2>
  <qrcode :background="background" :size="size" :cls="qrCls" :value="qrText"></qrcode>
  </div>
</template>

<script>
// console.log(uid)
import Qrcode from 'v-qrcode/src/index'

export default {
  name: 'QrCode',
  props: ['qrcode'],
  mounted () {
    console.log('qrcode + ' + this.qrcode)
  },
  components: {
    Qrcode
  },
  data () {
    return {
      uuid: this.uid,
      qrCls: 'qrcode',
      qrText: this.qrcode.toString(),
      size: 300,
      background: '#fff'
    }
  }
}

</script>
