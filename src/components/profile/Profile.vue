<template>
  <div class="Container">
    <div class="path">
      <RouterLink to="/" class="link">Trang chủ</RouterLink>
      <RouterLink to="/user/signup" class="link">/ Tài khoản</RouterLink>
      <RouterLink to="/user/signup" class="link">/ Đăng ký</RouterLink>
    </div>

    <div class="Information">
      <Index></Index>
      <div id="content">
        <div class="Data">
          <h1>Thông tin tài khoản</h1>
            <div class="content">
                <h3>khanh</h3>
                <p><b>Email:</b> 123@gmail.com</p>
                <p><b>Điện thoại:</b></p>
                <p><b>Ngày sinh:</b> 01-01-1970</p>
                <p><b>Địa chỉ:</b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Index from '../../components/SignIndex/SignIndex.vue'
</script>
<style scoped src="./profile.css"></style>
