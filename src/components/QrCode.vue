<template>
  <div class="QrCode">
  <h2>{{ uuid }}</h2>
  <qrcode :background="background" :size="size" :cls="qrCls" :value="qrText"></qrcode>
  </div>
</template>

<script>
// console.log(uid)
import Qrcode from 'v-qrcode/src/index'

var navigatorInfo = window.navigator
var screenInfo = window.screen
var uid = navigatorInfo.mimeTypes.length
uid += navigatorInfo.userAgent.replace(/\D+/g, '')
uid += navigatorInfo.plugins.length
uid += screenInfo.height || ''
uid += screenInfo.width || ''
uid += screenInfo.pixelDepth || ''

export default {
  name: 'QrCode',
  mounted () {
    console.log(uid)
  },
  components: {
    Qrcode
  },
  data () {
    return {
      uuid: uid,
      qrCls: 'qrcode',
      qrText: uid,
      size: 250,
      background: '#fff'
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
