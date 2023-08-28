<template>
  <Header />
  <div class="Container">
    <div class="Index">
      <div data-v-4533200f="" class="CoreIndex">
        <div id="breadcrumb">
          <ol class="breadcrumb">
            <li><a href="">Trang chủ</a></li>
          </ol>
        </div>
        <div class="flex">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 offcanvas-sidebar" id="oc-column-left">
            <div id="column-left" class="sidebar">
              <div class="box">
                <div class="box-heading">
                  <span>Danh mục</span>
                </div>
                <div class="box-content" id="pav-categorymenu">
                  <ul class="level1 pav-category box-category list">
                    <li>
                      <router-link to="">TIN TỨC</router-link>
                      <span class="head"><a style="float: right" href="#">+</a></span>
                      <ul class="level2 box-category list" >
                        <li>
                          <router-link to="/promotionnews">
                            <i class="fa fa-angle-right"></i>
                            Tin khuyến mãi
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/domesticnews">
                            <i class="fa fa-angle-right"></i>
                            Tin RC trong nước
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/internationalnews">
                            <i class="fa fa-angle-right"></i>
                            Tin RC quốc tế
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/guide">
                            <i class="fa fa-angle-right"></i>
                            Hướng dẫn cho người mới chơi
                          </router-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link to="">LIÊN HỆ</router-link>
                      <span class="head"><a style="float: right" href="#">+</a></span>
                      <ul
                        class="level2 box-category list">
                        <li>
                          <router-link to="/introduce">
                            <i class="fa fa-angle-right"></i>
                            Giới thiệu
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/contactstore">
                            <i class="fa fa-angle-right"></i>
                            Liên hệ cửa hàng
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/accountbank">
                            <i class="fa fa-angle-right"></i>
                            Tài khoản ngân hàng
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/buyingguide">
                            <i class="fa fa-angle-right"></i>
                            Hướng dẫn mua hàng
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/bankpolicy">
                            <i class="fa fa-angle-right"></i>
                            Chính sách bán hàng
                          </router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="box pavblogs-comments-box">
                <div class="box-heading">
                  <span>Tin tức khác</span>
                </div>
                <div class="box-content">
                  <div class="pavblog-comments clearfix">
                    <div class="item-news clearfix">
                      <router-link to="/salespolicy"
                        title="Chính sách bán hàng online"
                      >
                        <img
                          data-sizes="auto"
                          class="lazyautosizes lazyloaded"
                          data-src=""
                          alt="Chính sách bán hàng online"
                          sizes="178px"
                      /></router-link>
                      <div class="news-title">Chính sách bán hàng online</div>
                      <span class="news-more">
                        <router-link to="/salespolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                    <div class="item-news clearfix">
                      <router-link to="/returnpolicy" title="Quy định đổi trả hàng">
                        <img
                          data-sizes="auto"
                          class="lazyautosizes ls-is-cached lazyloaded"
                          data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_N8LvdpE6nNNOxbtzAzj0a1wN.jpg"
                          alt="Quy định đổi trả hàng"
                          sizes="242px"
                          src="https://pos.nvncdn.net/585eb4-8380/art/20151024_N8LvdpE6nNNOxbtzAzj0a1wN.jpg"
                      /></router-link>
                      <div class="news-title">Quy định đổi trả hàng</div>
                      <span class="news-more">
                        <router-link to="/returnpolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                    <div class="item-news clearfix">
                      <router-link to="/cuspolicy"
                        title="Chính sách thẻ khách hàng"
                      >
                        <img
                          data-sizes="auto"
                          class="lazyautosizes ls-is-cached lazyloaded"
                          data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_8qA4txq4m8M9XJJYa99kztVV.jpg"
                          alt="Chính sách thẻ khách hàng"
                          sizes="242px"
                          src="https://pos.nvncdn.net/585eb4-8380/art/20151024_8qA4txq4m8M9XJJYa99kztVV.jpg"
                      /></router-link>
                      <div class="news-title">Chính sách thẻ khách hàng</div>
                      <span class="news-more">
                        <router-link to="/cuspolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                    <div class="item-news clearfix">
                      <router-link to="/warrantypolicy" title="Quy định bảo hành">
                        <img
                          data-sizes="auto"
                          class="lazyautosizes ls-is-cached lazyloaded"
                          data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_tBn0dWGzT7DoMuRh1TDUAzJJ.jpg"
                          alt="Quy định bảo hành"
                          sizes="242px"
                          src="https://pos.nvncdn.net/585eb4-8380/art/20151024_tBn0dWGzT7DoMuRh1TDUAzJJ.jpg"
                      /></router-link>
                      <div class="news-title">Quy định bảo hành</div>
                      <span class="news-more">
                        <router-link to="/warrantypolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                    <div class="item-news clearfix">
                      <router-link to="/salespolicy"
                        title="Chính sách bán hàng online"
                      >
                        <img
                          data-sizes="auto"
                          class="lazyautosizes lazyloaded"
                          data-src=""
                          alt="Chính sách bán hàng online"
                          sizes="178px"
                      /></router-link>
                      <div class="news-title">Chính sách bán hàng online</div>
                      <span class="news-more">
                        <router-link to="/salespolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <div id="content" class="content-blog">
              <div class="pav-filter-blogs">
                <div class="pav-blogs">
                  <div class="leading-blogs clearfix">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="blog-item">
                        <div id="newImg">
                          <a href="/tai-khoan-ngan-hang-n12917.html">
                            <img
                              data-sizes="auto"
                              class="lazyautosizes ls-is-cached lazyloaded"
                              data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_bctgI5RionSIkzyFGkRLuH0D.png"
                              title="Tài khoản ngân hàng"
                              alt="Tài khoản ngân hàng"
                              sizes="405px"
                              src="https://pos.nvncdn.net/585eb4-8380/art/20151024_bctgI5RionSIkzyFGkRLuH0D.png"
                            />
                          </a>
                        </div>
                        <div class="row">
                          <div class="blog-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="blog-header clearfix">
                              <h3 class="blog-title">
                                <a
                                  href="/tai-khoan-ngan-hang-n12917.html"
                                  title="Tài khoản ngân hàng"
                                >
                                  Tài khoản ngân hàng
                                </a>
                              </h3>
                            </div>
                            <div class="description">
                              <p></p>
                              <p>
                                <span style="color: rgb(102, 102, 102)"
                                  ><strong>&nbsp;</strong></span
                                ><span>Ngân hàng<strong>&nbsp;TechcomBank</strong></span
                                ><strong>Tạ duy Thái</strong><br /><span>Số TK:&nbsp;</span
                                ><span
                                  ><span><strong>19025471429991</strong></span></span
                                ><br /><span
                                  >Chi nhánh:&nbsp;Techcombank chi nhánh Hoàng Mai - Hà NộiNgân
                                  hàng<strong>&nbsp;VietinBank</strong></span
                                ><strong>Tạ duy Thái</strong><span>Số TK: </span
                                ><span><strong>108005480800</strong></span
                                ><span
                                  >Chi nhánh: Vietinbank chi nhánh Hai Bà Trưng&nbsp;- Hà
                                  Nội&nbsp;</span
                                >
                              </p>
                              <div></div>
                              <div>
                              </div>
                              <p></p>
                            </div>
                            <div class="blog-readmore">
                              <router-link to="/accbank" class="button tp_button"
                                >Xem thêm</router-link
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="secondary clearfix">
                    <div class="pav-pagination pagination">
                      <div class="results">
                        <div class="paginator">
                          <span class="labelPages">1 - 1 / 1</span
                          ><span class="titlePages">&nbsp;&nbsp;Trang: </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from '../header/Header.vue'
import Footer from '../footer/Footer.vue'

document.addEventListener('DOMContentLoaded', function () {
  // Đọc dữ liệu từ tệp JSON
  fetch('account_data.json')
    .then((response) => response.json())
    .then((data) => {
      // Hiển thị thông tin tài khoản
      const accountInfo = document.getElementById('accountInfo')
      accountInfo.innerHTML = `
                <p><strong>Account Holder:</strong> ${data.account_holder}</p>
                <p><strong>Account Number:</strong> ${data.account_number}</p>
                <p><strong>Balance:</strong> ${data.balance}</p>
            `

      // Hiển thị danh sách các giao dịch
      const transactions = document.getElementById('transactions')
      let transactionsHTML = '<h2>Transactions:</h2>'
      data.transactions.forEach((transaction) => {
        transactionsHTML += `
                    <p><strong>Date:</strong> ${transaction.date}</p>
                    <p><strong>Description:</strong> ${transaction.description}</p>
                    <p><strong>Amount:</strong> ${transaction.amount}</p>
                    <hr>
                `
      })
      transactions.innerHTML = transactionsHTML
    })
    .catch((error) => {
      console.error('Error:', error)
    })
})
</script>
<style scoped src="./Account.css">
</style>
