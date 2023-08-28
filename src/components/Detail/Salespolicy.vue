<template>
<Header/>
  <div class="Container">
    <div class="Index">
      <div class="CoreIndex">
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
                      <a href="/tin-tuc-nc2987.html">TIN TỨC</a>
                      <span class="head"><a style="float: right" href="#">+</a></span>
                      <ul class="level2 box-category list">
                        <li>
                          <router-link to="/domesticnews">
                            <i class="fa fa-angle-right"></i>
                            Tin khuyến mãi
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/promotionnews">
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
                      <a href="/lien-he-nc3018.html">LIÊN HỆ</a>
                      <span class="head"><a style="float: right" href="#">+</a></span>
                      <ul class="level2 box-category list">
                        <li>
                          <a href="/gioi-thieu-nc3019.html">
                            <i class="fa fa-angle-right"></i>
                            Giới thiệu
                          </a>
                        </li>
                        <li>
                          <a href="/lien-he-cua-hang-nc3020.html">
                            <i class="fa fa-angle-right"></i>
                            Liên hệ cửa hàng
                          </a>
                        </li>
                        <li>
                          <a href="/tai-khoan-ngan-hang-nc3021.html">
                            <i class="fa fa-angle-right"></i>
                            Tài khoản ngân hàng
                          </a>
                        </li>
                        <li>
                          <a href="/huong-dan-mua-hang-nc3022.html">
                            <i class="fa fa-angle-right"></i>
                            Hướng dẫn mua hàng
                          </a>
                        </li>
                        <li>
                          <a href="/chinh-sach-ban-hang-nc3023.html">
                            <i class="fa fa-angle-right"></i>
                            Chính sách bán hàng
                          </a>
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
                      <a
                        href="/chinh-sach-danh-cho-dai-ly-n12932.html"
                        title="Chính sách dành cho đại lý"
                      >
                        <img
                          data-sizes="auto"
                          class="lazyautosizes ls-is-cached lazyloaded"
                          data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_BLbKFImt1EDH71mo4gWn893M.jpg"
                          alt="Chính sách dành cho đại lý"
                          sizes="242px"
                          src="https://pos.nvncdn.net/585eb4-8380/art/20151024_BLbKFImt1EDH71mo4gWn893M.jpg"
                      /></a>
                      <div class="news-title">Chính sách dành cho đại lý</div>
                      <span class="news-more">
                        <router-link to="/cuspolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                    <div class="item-news clearfix">
                      <a
                        href="/chinh-sach-the-khach-hang-n12931.html"
                        title="Chính sách thẻ khách hàng"
                      >
                        <img
                          data-sizes="auto"
                          class="lazyautosizes ls-is-cached lazyloaded"
                          data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_8qA4txq4m8M9XJJYa99kztVV.jpg"
                          alt="Chính sách thẻ khách hàng"
                          sizes="242px"
                          src="https://pos.nvncdn.net/585eb4-8380/art/20151024_8qA4txq4m8M9XJJYa99kztVV.jpg"
                      /></a>
                      <div class="news-title">Chính sách thẻ khách hàng</div>
                      <span class="news-more">
                        <router-link to="/cuspolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                    <div class="item-news clearfix">
                      <a href="/quy-dinh-doi-tra-hang-n12930.html" title="Quy định đổi trả hàng">
                        <img
                          data-sizes="auto"
                          class="lazyautosizes ls-is-cached lazyloaded"
                          data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_N8LvdpE6nNNOxbtzAzj0a1wN.jpg"
                          alt="Quy định đổi trả hàng"
                          sizes="242px"
                          src="https://pos.nvncdn.net/585eb4-8380/art/20151024_N8LvdpE6nNNOxbtzAzj0a1wN.jpg"
                      /></a>
                      <div class="news-title">Quy định đổi trả hàng</div>
                      <span class="news-more">
                        <router-link to="/returnpolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                    <div class="item-news clearfix">
                      <a href="/quy-dinh-bao-hanh-n12929.html" title="Quy định bảo hành">
                        <img
                          data-sizes="auto"
                          class="lazyautosizes ls-is-cached lazyloaded"
                          data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_tBn0dWGzT7DoMuRh1TDUAzJJ.jpg"
                          alt="Quy định bảo hành"
                          sizes="242px"
                          src="https://pos.nvncdn.net/585eb4-8380/art/20151024_tBn0dWGzT7DoMuRh1TDUAzJJ.jpg"
                      /></a>
                      <div class="news-title">Quy định bảo hành</div>
                      <span class="news-more">
                        <router-link to="/warrantypolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                    <div class="item-news clearfix">
                      <a
                        href="/chinh-sach-ban-hang-online-n12928.html"
                        title="Chính sách bán hàng online"
                      >
                        <img
                          data-sizes="auto"
                          class="lazyautosizes lazyloaded"
                          data-src=""
                          alt="Chính sách bán hàng online"
                          sizes="178px"
                      /></a>
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
              <h1 class="namePage">Quy định bảo hành</h1>
              <ul class="new_info">
                <li class="created">
                  <span class="fa-regular fa-clock">Cập nhập:</span> 24-10-2015 13:42:49
                </li>
                <li class="hits"><span class="fa fa-eye"> Đã xem: </span>3313</li>
              </ul>
              <div class="pav-blog">
                <div class="description clearfix" id="ct-news">
                  <p style="line-height: 20.8px">
                    <span class="mt-2"><strong>Đang cập nhập</strong></span>
                  </p>
                  <div
                    style="width: 845px !important"
                    class="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop"
                    data-href="http://thaituan-hobby.com/quy-dinh-doi-tra-hang-n12930.html"
                    data-colorscheme="light"
                    data-numposts="5"
                    data-width="845"
                    fb-xfbml-state="rendered"
                    fb-iframe-plugin-query="app_id=&amp;color_scheme=light&amp;container_width=845&amp;height=100&amp;href=http%3A%2F%2Fthaituan-hobby.com%2Fquy-dinh-doi-tra-hang-n12930.html&amp;locale=vi_VN&amp;numposts=5&amp;sdk=joey&amp;version=v2.12&amp;width=845"
                  >
                    <span style="vertical-align: bottom; width: 845px; height: 213px"
                      ><iframe
                        name="f67ea8b00c6df"
                        width="845px"
                        height="100px"
                        data-testid="fb:comments Facebook Social Plugin"
                        title="fb:comments Facebook Social Plugin"
                        frameborder="0"
                        allowtransparency="true"
                        allowfullscreen="true"
                        scrolling="no"
                        allow="encrypted-media"
                        src="https://www.facebook.com/v2.12/plugins/comments.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1e3e49ed67e0e%26domain%3Dthaituan-hobby.com%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fthaituan-hobby.com%252Ff28cb7544190394%26relation%3Dparent.parent&amp;color_scheme=light&amp;container_width=845&amp;height=100&amp;href=http%3A%2F%2Fthaituan-hobby.com%2Fquy-dinh-doi-tra-hang-n12930.html&amp;locale=vi_VN&amp;numposts=5&amp;sdk=joey&amp;version=v2.12&amp;width=845"
                        style="border: none; visibility: visible; width: 845px; height: 213px"
                        class=""
                      ></iframe
                    ></span>
                  </div>
                </div>
                <div class="blog-social clearfix">
                  <div class="social-wrap">
                    <div class="social-heading">
                      <b>Like This: </b>
                    </div>
                    <div class="itemFacebookButton">
                      <div
                        class="fb-like fb_iframe_widget"
                        data-href="http://thaituan-hobby.com/quy-dinh-doi-tra-hang-n12930.html"
                        data-layout="button_count"
                        data-action="like"
                        data-show-faces="true"
                        data-share="true"
                        fb-xfbml-state="rendered"
                        fb-iframe-plugin-query="action=like&amp;app_id=&amp;container_width=0&amp;href=http%3A%2F%2Fthaituan-hobby.com%2Fquy-dinh-doi-tra-hang-n12930.html&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=true&amp;show_faces=true"
                      >
                        <span style="vertical-align: bottom; width: 150px; height: 28px"
                          ><iframe
                            name="f34562597ed0674"
                            width="1000px"
                            height="1000px"
                            data-testid="fb:like Facebook Social Plugin"
                            title="fb:like Facebook Social Plugin"
                            frameborder="0"
                            allowtransparency="true"
                            allowfullscreen="true"
                            scrolling="no"
                            allow="encrypted-media"
                            src="https://www.facebook.com/v2.12/plugins/like.php?action=like&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df39de11c33df97c%26domain%3Dthaituan-hobby.com%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fthaituan-hobby.com%252Ff28cb7544190394%26relation%3Dparent.parent&amp;container_width=0&amp;href=http%3A%2F%2Fthaituan-hobby.com%2Fquy-dinh-doi-tra-hang-n12930.html&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=true&amp;show_faces=true"
                            style="border: none; visibility: visible; width: 150px; height: 28px"
                            class=""
                          ></iframe
                        ></span>
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
  <Footer/>
</template>

<script setup>
import Header from '../header/Header.vue'
import Footer from '../footer/footer.vue'
</script>

<style scoped src="./return.css">

</style>