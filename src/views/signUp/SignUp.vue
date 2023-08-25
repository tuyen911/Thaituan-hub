<template>
    <div class="Container">
        <div class="path">
            <RouterLink to="/" class="link">Trang chủ</RouterLink>
            <RouterLink to="/user/signin" class="link">/ Tài khoản</RouterLink>
            <RouterLink to="/user/signin" class="link">/ Đăng nhập</RouterLink>
        </div>
        <div class="Information">
            <Index></Index>
            <div class="Data">
                <h1>Đăng ký tài khoản</h1>
                <div>
                    Nếu bạn đã có một tài khoản với chúng tôi, vui lòng đăng nhập vào trang
                    <RouterLink to="/user/signin" class="link">Đăng nhập..</RouterLink>
                </div>
                <input placeholder="Họ và tên">
                <input placeholder="Email">
                <input placeholder="Mật khẩu">
                <input placeholder="Điện thoại">
                <button>ĐĂNG KÝ</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Index from "../../components/SignIndex/SignIndex.vue"
</script>

<style src="./SignUp.css" scoped></style>