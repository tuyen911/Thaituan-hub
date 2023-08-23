<template>
  <div class="Container">
    <div class="nav">
      <RouterLink to="/" class="path"> Trang chủ </RouterLink>
      <h2 v-for="(part, index) in this.nav" :key="index" class="path">/ {{ part.name }}</h2>
    </div>
    <div class="temp1">
      <div class="left">
        <div class="CoreIndex">
          <div class="Text"><Rank></Rank>Danh mục</div>
          <ul>
            <li
              class="list"
              v-for="(part, index) in Index.type"
              :key="index"
              @click="Search(0, part.name)"
            >
              {{ part.name }}
              <Down v-if="part.children.length !== 0" class="Triangle"></Down>
              <ul class="HoverList">
                <li
                  v-for="(part1, index1) in part.children"
                  :key="index1"
                  @click="Search(part.name, part1.name)"
                >
                  {{ part1.name }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="CoreIndex">
          <div class="Text"><Rank></Rank>Lọc theo giá</div>
          <div class="box">
            <div>từ {{ this.min }}đ : {{ this.max }}đ</div>
            <div id="volume-control" ref="volumeControl">
              <div id="handle" @mousedown="startDrag" @mouseup="endDrag" ref="handle"></div>
              <div id="line"></div>
              <div id="handle1" @mousedown="startDrag1" @mouseup="endDrag1" ref="handle1"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="product">
          <div id="imgContain">
            <img
              id="featured"
              :src="`${this.Object.data.url}`"
              alt="error"
              class="img"
            />
            <div id="lens" @wheel="handleMouseWheel"></div>
          </div>
          <div class="information">
            <div id="view"></div>
            <div class="name">{{ this.Object.data.name }}</div>
            <div class="Rate">
              <div
                v-for="n of Array.from(
                  { length: this.Object.data.rate / 2 },
                  (_, index) => index + 1
                )"
                :key="n"
              >
                <Star></Star>
              </div>
              <div v-if="this.Object.data.rate % 2 === 1">
                <StarHalf></StarHalf>
              </div>
              <div v-if="this.Object.data.rate % 2 === 0 && this.Object.data.rate / 2 != 5">
                <StarEmpty></StarEmpty>
              </div>
              <div
                v-for="n of Array.from(
                  { length: 4.5 - this.Object.data.rate / 2 },
                  (_, index) => index + 1
                )"
                :key="n"
              >
                <StarEmpty></StarEmpty>
              </div>
            </div>
            <div class="Price">Giá bán: {{ this.Object.data.price }} VNĐ</div>
            <div class="Id">Mã sản phẩm: {{ this.Object.data.name }}</div>
            <div class="quantity">
              <div class="Text">SL:</div>
              <input
                id="input"
                class="Number"
                :value="this.quantity"
                @keydown.enter="set()"
                @blur="set()"
              />
              <div class="UpDown">
                <div class="Up" @click="Up()">+</div>
                <div class="Down" @click="Minus()">-</div>
              </div>
            </div>
            <div class="Order" @click="AddToCart(this.Object.data)">ĐẶT HÀNG</div>
            <div class="HeartContain">
              <Heart class="Heart"></Heart>
            </div>
          </div>
        </div>
        <div class="changeImg">
          <div class="Swiper">
            <div class="swiper">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper containSwiper" >
                <!-- Slides -->
                <div class="swiper-slide" v-for="(part, index) in this.Object.picture" :key="index" @click="changeImg(part.url)">
                  <img
                    class="Img"
                    :src="`${part.url}`" alt="error">
                </div>
              </div>
            </div>
            <div class="swiper-button-next toRight"></div>
            <div class="swiper-button-prev toLeft"></div>
          </div>
        </div>
        <div class="Nav">
          <div :class="this.Nav == 1?'Text1':'Text'" @click="changeComponent(1)">GIỚI THIỆU</div>
          <div :class="this.Nav == 2?'Text1':'Text'" @click="changeComponent(2)">THÔNG SỐ KỸ THUẬT</div>
          <div :class="this.Nav == 3?'Text1':'Text'" @click="changeComponent(3)">ĐÁNH GIÁ SẢN PHẨM</div>
          <div :class="this.Nav == 4?'Text1':'Text'" @click="changeComponent(4)">TIN TỨC LIÊN QUAN</div>
        </div>
        <div v-if="this.Nav == 1">
          Description
        </div>
        <div v-else-if="this.Nav == 2">
          ... Đang được cập nhật
        </div>
        <div v-else-if="this.Nav == 3">
          <div class="judge">
            Đánh giá sản phẩm
            <div class="starList">
              <div
                v-for="n of Array.from(
                  { length: this.Rate},
                  (_, index) => index + 1
                )"
                :key="n"
              >
                <Star class="starYellow" @mousemove="setStar(n)"></Star>
              </div>
              <div
                v-for="n of Array.from(
                  { length: 5-this.Rate},
                  (_, index) => index + 1
                )"
                :key="n"
              >
                <Star class="star" @mousemove="setStar(this.Rate+n)"></Star>
              </div>
            </div>
          </div>
          <div class="comment">
            Nội dung
            <input class="Input" placeholder="Nội dung tối thiểu 30 ký tự">
          </div>
        </div>
        <div v-else>
          Không có tin tức nào liên quan đến sản phẩm !
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Index from './Index.json'
import Data from './Data.json'
import Star from '../../components/icons/Star.vue'
import StarHalf from '../../components/icons/StarHalf.vue'
import Down from '../../components/icons/Down.vue'
import StarEmpty from '../../components/icons/StarEmpty.vue'
import Heart from '../../components/icons/Heart.vue'
import Swiper from 'swiper'
import { Navigation, Pagination} from 'swiper/modules'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
</script>

<script>
export default {
  name: 'product',
  data() {
    return {
      nav: sessionStorage.search,
      Nav:1,
      min: '0',
      maxConst: '10,000,000',
      max: '10,000,000',
      Input: undefined,
      Object: [],
      quantity: 1,
      modal: 0,
      lens: undefined,
      img: undefined,
      temp: undefined,
      ratio: 3,
      Rate: 0
    }
  },
  methods: {
    changeComponent(index) {
      this.Nav = index
    },
    setStar(index) {
      if (index >= 0 && index <= 5) {
        
        this.Rate = index;
      }
    }
    ,
    changeImg(img) {
      this.Object.data.url = img
      let temp = document.getElementById('featured')
      this.lens.style.backgroundImage = `url(${this.Object.data.url})`
      this.temp.style.backgroundImage = `url(${this.Object.data.url})`
    },
    Minus() {
      if (this.quantity != 1) {
        this.quantity--
      }
    },
    set() {
      let a = document.getElementById('input')
      console.log('hello')
      this.quantity = a.value
    },
    Up() {
      this.quantity++
    },
    imageZoom(imgID) {
      this.img = document.getElementById(imgID)
      this.lens = document.getElementById('lens')
      this.temp = document.getElementById('view')
      this.lens.style.backgroundImage = `url(${this.img.src})`
      this.temp.style.backgroundImage = `url(${this.img.src})`
      this.temp.style.backgroundSize = `${this.img.width * this.ratio}px`
      this.temp.style.backgroundSize = `${this.img.height * this.ratio}px`
      this.lens.style.backgroundSize = `${this.img.width}px`
      this.img.addEventListener('mousemove', this.moveLens)
      this.lens.addEventListener('mousemove', this.moveLens)
    },
    end() {
      this.lens.style.display = 'none'
      this.temp.style.display = 'none'
      console.log('hello')
    },
    moveLens() {
      this.lens.addEventListener('mouseleave', this.end)
      this.lens.style.display = 'unset'
      this.temp.style.display = 'unset'
      let pos = this.getCursor(this.img)
      let positionLeft = pos.x - this.lens.offsetWidth / 2
      let positionTop = pos.y - this.lens.offsetHeight / 2
      if (positionLeft <= 0) {
        positionLeft = 0
      }
      if (positionTop <= 0) {
        positionTop = 0
      }
      if (positionTop >= this.img.offsetHeight - this.lens.offsetHeight) {
        positionTop = this.img.offsetHeight - this.lens.offsetHeight
      }
      if (positionLeft >= this.img.offsetWidth - this.lens.offsetWidth) {
        positionLeft = this.img.offsetWidth - this.lens.offsetWidth
      }
      this.lens.style.left = positionLeft + 'px'
      this.lens.style.top = positionTop + 'px'
      this.lens.style.backgroundPosition = `-${positionLeft}px -${positionTop}px`
      this.temp.style.backgroundPosition = `-${positionLeft * this.ratio}px -${positionTop * this.ratio}px`
    },
    getCursor() {
      let temp = window.event
      let Y = window.scrollY
      let bounds = this.img.getBoundingClientRect()
      let x = temp.pageX - bounds.left
      let y = temp.pageY - bounds.top - Y
      return {
        x: x,
        y: y
      }
    },
    AddToCart(object) {
      object['quantity'] = this.quantity
      let Object = JSON.stringify(object)
      if (!localStorage.cart) {
        localStorage.setItem('cart', Object)
      } else {
        let Cart = [localStorage.cart]
        console.log('added')
        Cart.push(Object)
        localStorage.setItem('cart', Cart)
      }
      this.$router.push({ name: 'cart' })
    },
    handleMouseWheel(event) {
      event.preventDefault()
      // Kiểm tra sự kiện "to nhỏ" hay "to lớn"
      if (event.deltaY < 0) {
        //console.log('Đã to nhỏ')
        if (this.lens.offsetWidth>100) {
          this.lens.style.width = `${this.lens.offsetWidth * 0.8}px`;
          this.lens.style.height = `${this.lens.offsetHeight * 0.8}px`;
          this.ratio *= 1.25;
          this.imageZoom('featured')
        }
        // Xử lý khi to nhỏ
      } else if (event.deltaY > 0) {
        //console.log('Đã to lớn')
        if (this.lens.offsetWidth<200) {
          this.lens.style.width = `${this.lens.offsetWidth * 1.25}px`;
          this.lens.style.height = `${this.lens.offsetHeight * 1.25}px`;
          this.ratio *= 0.8;
          this.imageZoom('featured')
        }
        // Xử lý khi to lớn
      }
    }
  },
  created() {
    this.Object = Data
    console.log(this.Object.picture);
  },
  mounted() {
    this.nav = JSON.parse(this.nav)
    const changecolor = document.getElementsByClassName('path')
    changecolor[this.nav.length].style.color = '#31beff'
    console.log(this.Object)
    this.imageZoom('featured')
    var swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      // Optional parameters
      direction: 'horizontal',
      modules: [Navigation, Pagination],
      loop: true,
      speed: 500,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  }
}
</script>

<style scoped src="./Product.css"></style>
