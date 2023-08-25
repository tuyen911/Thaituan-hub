<template>
    <div class="Container">
        <div class="path">
            <RouterLink to="/" class="link">Trang chủ</RouterLink>
            <RouterLink to="/user/signin" class="link">/ Đăng nhập</RouterLink>
            <RouterLink to="/user/forgot" class="link">/ Quên mật khẩu</RouterLink>
        </div>
        <div class="Information">
            <Index></Index>
            <div class="Data">
                <h1>Quên mật khẩu</h1>
                <div>
                    * Nhập địa chỉ email:
                </div>
                <input placeholder="email">
                <button>XÁC NHẬN</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Index from "../../components/SignIndex/SignIndex.vue"
</script>

<style src="./Forgot.css" scoped></style>