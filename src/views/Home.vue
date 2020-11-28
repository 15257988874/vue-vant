<template>
  <div class="home">
    <van-button type="primary">主要按钮</van-button>
    <van-uploader v-model="fileList" :after-read="afterRead" />
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, Toast, Popup, Uploader } from 'vant'
export default {
  name: 'Home',
  components: {
    // Button
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Popup.name]: Popup,
    [Uploader.name]: Uploader
  },
  created() {
    Toast.loading({
      message: '加载中...',
      forbidClick: true
    })
  },
  mounted() {
    Toast.fail('成功文案')
  },
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    }
  }
}
</script>
