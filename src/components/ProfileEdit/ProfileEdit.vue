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
          <h1>Sửa thông tin tài khoản cá nhân</h1>
          <p style="color: #ccc; margin: 5px 0 0 0"></p>
          <form method="POST" action="/profile/edit" class="f">
            <table class="profile" cellspacing="0" style="margin-top: 10px">
              <tbody>
                <tr>
                  <td>Tên đăng nhập</td>
                  <td class="val"></td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td class="val">123@gmail.com</td>
                </tr>
                <tr>
                  <td>Họ và tên</td>
                  <td class="val">
                    <input type="text" name="fullName" value="khanh"  />
                  </td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td class="val">
                    <input name="mobile" type="text" value="" />
                  </td>
                </tr>
                <tr>
                  <td>Thành phố</td>
                  <td class="val">
                    <select name="cityId" id="cityId">
                      <option value="">Chọn Tỉnh/ thành phố</option>
                      <option value="254">Hà Nội</option>
                      <option value="255">Hồ Chí Minh</option>
                      <option value="256">An Giang</option>
                      <option value="257">Bà Rịa - Vũng Tàu</option>
                      <option value="258">Bắc Ninh</option>
                      <option value="259">Bắc Giang</option>
                      <option value="260">Bình Dương</option>
                      <option value="261">Bình Định</option>
                      <option value="262">Bình Phước</option>
                      <option value="263">Bình Thuận</option>
                      <option value="264">Bến Tre</option>
                      <option value="265">Bắc Cạn</option>
                      <option value="266">Cần Thơ</option>
                      <option value="267">Khánh Hòa</option>
                      <option value="268">Thừa Thiên Huế</option>
                      <option value="269">Lào Cai</option>
                      <option value="270">Quảng Ninh</option>
                      <option value="271">Đồng Nai</option>
                      <option value="272">Nam Định</option>
                      <option value="273">Cà Mau</option>
                      <option value="274">Cao Bằng</option>
                      <option value="275">Gia Lai</option>
                      <option value="276">Hà Giang</option>
                      <option value="277">Hà Nam</option>
                      <option value="278">Hà Tĩnh</option>
                      <option value="279">Hải Dương</option>
                      <option value="280">Hải Phòng</option>
                      <option value="281">Hòa Bình</option>
                      <option value="282">Hưng Yên</option>
                      <option value="283">Kiên Giang</option>
                      <option value="284">Kon Tum</option>
                      <option value="285">Lai Châu</option>
                      <option value="286">Lâm Đồng</option>
                      <option value="287">Lạng Sơn</option>
                      <option value="288">Long An</option>
                      <option value="289">Nghệ An</option>
                      <option value="290">Ninh Bình</option>
                      <option value="291">Ninh Thuận</option>
                      <option value="292">Phú Thọ</option>
                      <option value="293">Phú Yên</option>
                      <option value="294">Quảng Bình</option>
                      <option value="295">Quảng Nam</option>
                      <option value="296">Quảng Ngãi</option>
                      <option value="297">Quảng Trị</option>
                      <option value="298">Sóc Trăng</option>
                      <option value="299">Sơn La</option>
                      <option value="300">Tây Ninh</option>
                      <option value="301">Thái Bình</option>
                      <option value="302">Thái Nguyên</option>
                      <option value="303">Thanh Hóa</option>
                      <option value="304">Tiền Giang</option>
                      <option value="305">Trà Vinh</option>
                      <option value="306">Tuyên Quang</option>
                      <option value="307">Vĩnh Long</option>
                      <option value="308">Vĩnh Phúc</option>
                      <option value="309">Yên Bái</option>
                      <option value="310">Đắk Lắk</option>
                      <option value="311">Đồng Tháp</option>
                      <option value="312">Đà Nẵng</option>
                      <option value="313">Đắc Nông</option>
                      <option value="314">Hậu Giang</option>
                      <option value="315">Bạc Liêu</option>
                      <option value="316">Điện Biên</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Quận Huyện</td>
                  <td class="val">
                    <select name="districtId" >
                      <option value=""></option>
                      <option value="317">Quận Hoàng Mai</option>
                      <option value="318">Quận Ba Đình</option>
                      <option value="319">Quận Long Biên</option>
                      <option value="320">Quận Cầu Giấy</option>
                      <option value="321">Quận Đống Đa</option>
                      <option value="322">Quận Hai Bà Trưng</option>
                      <option value="323">Quận Hoàn Kiếm</option>
                      <option value="324">Quận Tây Hồ</option>
                      <option value="325">Quận Thanh Xuân</option>
                      <option value="326">Huyện Ba Vì</option>
                      <option value="327">Huyện Chương Mỹ</option>
                      <option value="328">Huyện Đan Phượng</option>
                      <option value="331">Huyện Gia Lâm</option>
                      <option value="332">Huyện Hoài Đức</option>
                      <option value="333">Huyện Mê Linh</option>
                      <option value="334">Huyện Mỹ Đức</option>
                      <option value="335">Huyện Phú Xuyên</option>
                      <option value="336">Huyện Phúc Thọ</option>
                      <option value="337">Huyện Quốc Oai</option>
                      <option value="338">Huyện Sóc Sơn</option>
                      <option value="339">Huyện Thạch Thất</option>
                      <option value="340">Huyện Thanh Oai</option>
                      <option value="341">Huyện Thanh Trì</option>
                      <option value="342">Huyện Thường Tín</option>
                      <option value="344">Huyện Ứng Hòa</option>
                      <option value="379">Quận Hà Đông</option>
                      <option value="871">Huyện Đông Anh</option>
                      <option value="1011">Thị xã Sơn Tây</option>
                      <option value="1032">Quận Bắc Từ Liêm</option>
                      <option value="1033">Quận Nam Từ Liêm</option>
                      <option value="329">Quận 1</option>
                      <option value="330">Quận 2</option>
                      <option value="345">Quận 3</option>
                      <option value="346">Quận 4</option>
                      <option value="347">Quận 5</option>
                      <option value="348">Quận 6</option>
                      <option value="349">Quận 7</option>
                      <option value="350">Quận 8</option>
                      <option value="351">Quận 9</option>
                      <option value="352">Quận 10</option>
                      <option value="353">Quận 11</option>
                      <option value="354">Quận 12</option>
                      <option value="355">Quận Tân Bình</option>
                      <option value="356">Quận Tân Phú</option>
                      <option value="357">Quận Bình Tân</option>
                      <option value="358">Quận Phú Nhuận</option>
                      <option value="359">Quận Gò Vấp</option>
                      <option value="360">Quận Bình Thạnh</option>
                      <option value="361">Quận Thủ Đức</option>
                      <option value="873">Huyện Cần Giờ</option>
                      <option value="874">huyện Củ Chi</option>
                      <option value="1001">Huyện Bình Chánh</option>
                      <option value="1002">Huyện Hóc Môn</option>
                      <option value="1003">Huyện Nhà Bè</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Địa chỉ</td>
                  <td class="val">
                    <input type="text" name="address" value=""  />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><button type="submit" class="btnSave tp_button">Lưu</button></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Index from '../../components/SignIndex/SignIndex.vue'
</script>
<style scoped src="./ProfileEdit.css"></style>
