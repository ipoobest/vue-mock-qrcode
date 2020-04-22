<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col cols="12"><b-form-input v-model="location" placeholder="Enter your location name"></b-form-input>
           <b-button variant="success mt-4 mb-4" @click="createUserLocation()">Create QrCode</b-button>
          <div v-if="showQr">
            <Qrcode :background="background" :size="size" :cls="qrCls" :value="qrText"></Qrcode>
            <!-- <a href="#">download qrcode</a> -->
          </div>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import Qrcode from 'v-qrcode/src/index'
import { uuid } from 'vue-uuid'
// import { db } from '../main'
export default {
  name: 'QrCode',
  mounted () {
    // console.log('qrcode + ' + this.qrcode)
  },
  components: {
    Qrcode
  },
  data () {
    return {
      location: null,
      uuid: this.uid,
      qrCls: 'qrcode',
      qrText: '',
      size: 250,
      background: '#fff',
      showQr: false
    }
  },
  methods: {
    createUserLocation () {
      if (this.location != null) {
        this.qrText = uuid.v1()
        console.log('firstore : ' + this.qrText)
        this.showQr = true
        var ss = ' 96a76040-84b5-11ea-a3d3-07698f3537db'
        console.log('xxx ' + ss.length)
        // db.collection('location').add({ uid: this.qrText, status: 'ปกติ', location: this.location })
        alert('success')
      } else {
        console.log('testxx')
        alert('Please fill in Information')
      }
    }
  }
}
</script>
