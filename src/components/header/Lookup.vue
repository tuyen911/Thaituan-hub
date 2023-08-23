<template>
  <Header />
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-lg-12 col-md-12 col-sm-12">
        <div id="pfView" class="orderView">
          <h3>Tra cứu thông tin bảo hành</h3>
          <form class="form-inline" id="frmIndexOrder" action="">
            <div class="form-groups txtFill">
              <input type="text" name="mobile" placeholder="Mời bạn nhập số điện thoại" />
            </div>
            <div class="form-groups">
              <button type="submit" class="btn-danger">Kiểm tra</button>
            </div>
          </form>
          <div class="desOrderSearch"></div>
          <br />
          <div class="table-responsive"></div>
          <div
            class="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop"
            data-href="thaituan-hobby.com"
            data-width="auto"
            data-numposts="5"
            style="width: 100%"
            fb-xfbml-state="rendered"
            fb-iframe-plugin-query="app_id=&amp;container_width=1134&amp;height=100&amp;href=http%3A%2F%2Fthaituan-hobby.com%2F&amp;locale=vi_VN&amp;numposts=5&amp;sdk=joey&amp;version=v2.12&amp;width="
          >
            <span style="vertical-align: bottom; width: 100%; height: 664px"
              ><iframe
                name="ffa45d11e794b4"
                width="1000px"
                height="100px"
                data-testid="fb:comments Facebook Social Plugin"
                title="fb:comments Facebook Social Plugin"
                frameborder="0"
                allowtransparency="true"
                allowfullscreen="true"
                scrolling="no"
                allow="encrypted-media"
                src="https://www.facebook.com/v2.12/plugins/comments.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df16ed2eb32e1374%26domain%3Dthaituan-hobby.com%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fthaituan-hobby.com%252Ff1ec09ae7fa106%26relation%3Dparent.parent&amp;container_width=1134&amp;height=100&amp;href=http%3A%2F%2Fthaituan-hobby.com%2F&amp;locale=vi_VN&amp;numposts=5&amp;sdk=joey&amp;version=v2.12&amp;width="
                style="border: none; visibility: visible; width: 100%; height: 664px"
                class=""
              ></iframe
            ></span>
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
</script>

<style src="./lookup.css">
</style>