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
        <div class="four">
            <RouterLink to="/profile" class="link">
                Quản lý cá nhân
            </RouterLink>
        </div>

        <div class="five">
            <RouterLink to="/profileChangepasssword" class="link">
                Đổi mật khẩu
            </RouterLink>
        </div>

        <div class="six">
            <RouterLink to="/profileEdit" class="link">
                Sửa thông tin tài khoản cá nhân
            </RouterLink>
        </div>

        <div class="seven">
            <RouterLink to="/Favourite" class="link">
                Danh sách sản phẩm yêu thích
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import Rank from "../icons/Rank.vue"
</script>

<style scoped src ="./SignIndex.css"></style>
