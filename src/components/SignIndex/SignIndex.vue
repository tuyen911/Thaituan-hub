<template>
    <div class="all">
        <div class="Title">
            <Rank ></Rank>
            Tài Khoản
        </div>
        <div class="second">
            <RouterLink to="/user/signin" class="link">Đăng nhập</RouterLink>/ 
            <RouterLink to="/user/signup" class="link">Đăng ký</RouterLink>
        </div>
        <div class="third">
            <RouterLink to="/user/forgot" class="link">
                Lấy lại mật khẩu
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import Rank from "../icons/Rank.vue"
</script>

<style scoped src ="./SignIndex.css"></style>