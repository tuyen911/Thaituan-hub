<template>
  <div class="Container">
    <div class="path">
      <RouterLink to="/" class="link">Trang chủ</RouterLink>
      <RouterLink to="/user/signup" class="link">/ Tài khoản</RouterLink>
      <RouterLink to="/user/signup" class="link">/ Đăng ký</RouterLink>
    </div>

    <div class="Information">
      <Index></Index>
        <div class="Data">
          <div id="content">
            <h1>Thay đổi mật khẩu</h1>
            <p style="color: #ccc; margin: 5px 0 0 0"></p>
            <form method="post" name="UserChangePassword" class="f" id="UserChangePassword">
              <ul>
                <li>
                  <label for="oldpassword" class="required"><span>*</span> Mật khẩu cũ:</label
                  ><input
                    name="oldpassword"
                    type="password"
                    
                    id="oldpassword"
                    value=""
               
                  />
                </li>
                <li>
                  <label for="newpassword" class="required"><span>*</span> Mật khẩu mới:</label
                  ><input
                    name="newpassword"
                    type="password"
                   
                    id="newpassword"
                    
                   
                  />
                </li>
                <li>
                  <label for="repassword" class="required"
                    ><span>*</span> Nhập lại mật khẩu mới:</label
                  ><input
                    name="repassword"
                    type="password"
              
                    id="repassword"
                
                  />
                </li>
                
                <li class="btns">
                  <input
                    name="submit"
                    type="submit"
                    id="btnSubmit"
                    value="Xác nhận"

                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
    </div>
  </div>
</template>
<script setup>
import Index from '../../components/SignIndex/SignIndex.vue'
</script>
<style scoped src="./PofileChangepassword.css"></style>
