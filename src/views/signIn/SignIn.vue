<template>
    <div class="Container">
        <div class="path">
            <RouterLink to="/" class="link">Trang chủ</RouterLink>
            <RouterLink to="/user/signup" class="link">/ Tài khoản</RouterLink>
            <RouterLink to="/user/signup" class="link">/ Đăng ký</RouterLink>
        </div>
        <div class="Information">
            <Index></Index>
            <div class="firstData">
                <h1>Đăng nhập hệ thống</h1>
                <h2>Khách hàng mới</h2>
                <h3 class="title">Đăng ký tài khoản</h3>
                <h3 class="content">Bằng cách tạo một tài khoản bạn sẽ có thể mua sắm nhanh hơn, được cập nhật về tình trạng một đơn đặt hàng, và theo dõi các đơn đặt hàng bạn đã thực hiện trước đó.</h3>
                <RouterLink class="button" to="/user/signup">
                    ĐĂNG KÝ
                </RouterLink>
            </div>
            <div class="secondData">
                <h1>
                    Đăng nhập
                </h1>
                <input placeholder="Email">
                <input placeholder="Mật khẩu">
                <button>ĐĂNG NHẬP</button>
                <RouterLink class="link" to="/user/forgot">Quên mật khẩu?</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import Index from "../../components/SignIndex/SignIndex.vue"
</script>

<style scoped src = "./SignIn.css">
</style>