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
            <div
              id="volume-control"
              ref="volumeControl"
            >
              <div id="handle" @mousedown="startDrag"
              @mouseup="endDrag" ref="handle"></div>
              <div id="line"></div>
              <div id="handle1" @mousedown="startDrag1"
              @mouseup="endDrag1" ref="handle1"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="Sort">
          Display:
          <Stack class="Stack" @click="set(0)" :style="{'color': this.display ? 'black' : 'red' }"></Stack>
          <Rubik class="Rubik" @click="set(1)" :style="{'color': this.display ? 'red' : 'black' }"></Rubik>
          Tìm kiếm theo
          <select class="Option" @change="handleSelectChange">
            <option value= "1">mới nhất</option>
            <option value= "2">Tăng dần</option>
            <option value= "3">Giảm dần</option>
            <option value= "4">Sale</option>
          </select>
          Hiển thị:
          <h2 class="type" @click="changeNum(15)">15</h2>
          |
          <h2 class="type" @click="changeNum(30)">30</h2>
          |
          <h2 class="type" @click="changeNum(45)">45</h2>
        </div>
        <div v-if="this.display" class="CoreData">
          <div v-for="(part1, index1) in this.Object[this.page]" :key="index1" class="Product">
          <div class="ButtonHover">
            <button @click="On(part1)" class="Eyes">
              <Eyes></Eyes>
            </button>
            <button class="Heart">
              <Heart></Heart>
            </button>
          </div>
          <img :src="`${part1.url}`" alt="error" class="Img" />
          <div class="Name">
            {{ part1.name }}
          </div>
          <div class="Price">{{ part1.price }} VNĐ</div>
          <div class="Rate">
            <div
              v-for="n of Array.from({ length: part1.rate / 2 }, (_, index) => index + 1)"
              :key="n"
            >
              <Star></Star>
            </div>
            <div v-if="part1.rate % 2 === 1">
              <StarHalf></StarHalf>
            </div>
            <div v-if="part1.rate % 2 === 0 && part1.rate / 2 != 5">
              <StarEmpty></StarEmpty>
            </div>
            <div
              v-for="n of Array.from({ length: 4.5 - part1.rate / 2 }, (_, index) => index + 1)"
              :key="n"
            >
              <StarEmpty></StarEmpty>
            </div>
          </div>
          <button @click="AddToCart(part1)">MUA NGAY</button>
        </div>
      </div>
        <div v-else class="CoreData1">
          <div v-for="(part1, index1) in this.Object[this.page]" :key="index1" class="Product1">
            <img :src="`${part1.url}`" alt="error" class="Img" />
          <div class="ButtonHover1">
            <button @click="On(part1)" class="Eyes">
              <Eyes></Eyes>
            </button>
          </div>
          <div class="Information">
            <div class="Name">
              {{ part1.name }}
            </div>
            <div class="Price">{{ part1.price }} VNĐ</div>
          <div class="Rate">
            <div
              v-for="n of Array.from({ length: part1.rate / 2 }, (_, index) => index + 1)"
              :key="n"
            >
              <Star></Star>
            </div>
            <div v-if="part1.rate % 2 === 1">
              <StarHalf></StarHalf>
            </div>
            <div v-if="part1.rate % 2 === 0 && part1.rate / 2 != 5">
              <StarEmpty></StarEmpty>
            </div>
            <div
              v-for="n of Array.from({ length: 4.5 - part1.rate / 2 }, (_, index) => index + 1)"
              :key="n"
              >
              <StarEmpty></StarEmpty>
            </div>
          </div>
          <button @click="AddToCart(part1)" class="Buy">MUA NGAY</button>
          <div class="Heart">
            <Heart class="heartIcon"></Heart>
            Thêm vào yêu thích
          </div>
        </div>
        </div>
        </div>
        <div v-if="this.modal" class="ContainerModal">
      <div class="outside" @click="Off()"></div>
      <div class="modal">
        <div class="Picture">
          <img :src="`${this.temp.url}`" alt="error" class="Img" />
        </div>
        <div class="in4">
          <div class="name">{{ this.temp.name }}</div>
          <div class="rate">
            <div
              v-for="n of Array.from({ length: this.temp.rate / 2 }, (_, index) => index + 1)"
              :key="n"
            >
              <Star class="icon"></Star>
            </div>
            <div v-if="this.temp.rate % 2 === 1">
              <StarHalf class="icon"></StarHalf>
            </div>
            <div v-if="this.temp.rate % 2 === 0 && this.temp.rate / 2 != 5">
              <StarEmpty class="icon"></StarEmpty>
            </div>
            <div
              v-for="n of Array.from({ length: 4.5 - this.temp.rate / 2 }, (_, index) => index + 1)"
              :key="n"
            >
              <StarEmpty class="icon"></StarEmpty>
            </div>
          </div>
          <div class="price">{{ this.temp.price }} VNĐ</div>
          <div class="id">Mã sản phẩm: {{ this.temp.name }}</div>
          <div class="quantity">
            <div class="Text">SL:</div>
            <div class="Down" @click="Down()">-</div>
            <input
              id="input"
              class="Number"
              :value="this.quantity"
              @keydown.enter="setModal()"
              @blur="setModal()"
            />
            <div class="Up" @click="Up()">+</div>
            <div class="Order" @click="AddToCart(this.temp)">ĐẶT HÀNG</div>
          </div>
        </div>
        <div class="Close" @click="Off()">x</div>
      </div>
    </div>
        <div class="changePage">
          <div v-for="(part, index) in this.pageMax" :key="index" class="Number" @click="changePage(index)" :style="{'background-color': this.page == index ? '#ccc':''}">
            {{ index+1 }}
          </div>
          <div class="Number" @click="changePage(999)" v-if="this.pageMax!=0">
            <Triangle></Triangle>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Index from './Index.json'
import Rank from '../../components/icons/Rank.vue'
import Down from '../../components/icons/Down.vue'
import Data from './Data.json'
import Triangle from "../../components/icons/Triangle.vue"
import Stack from '../../components/icons/Stack.vue'
import Rubik from '../../components/icons/Rubik.vue'
import Heart from '../../components/icons/Heart.vue'
import Eyes from '../../components/icons/Eyes.vue'
import Star from '../../components/icons/Star.vue'
import StarHalf from '../../components/icons/StarHalf.vue'
import StarEmpty from '../../components/icons/StarEmpty.vue'
</script>

<script>
export default {
  name: 'search',
  data() {
    return {
      nav: sessionStorage.search,
      min: '0',
      maxConst: '10,000,000',
      max: '10,000,000',
      percentMax: 1,
      percentMin: 0,
      Input: undefined,
      default: 15,
      page: 0,
      pageMax: 0,
      Object: [],
      display: 1,
      quantity: 1,
      modal: 0,
      temp: undefined,
      saveData: undefined
    }
  },
  methods: {
    handleSelectChange(event) {
      const selectedValue = event.target.value;
      // Xử lý sự kiện khi lựa chọn thay đổi
      console.log(selectedValue);
      if (selectedValue === "1") {
        this.changeNum(this.default);
      }
      else if (selectedValue === "2") {
        this.sortUp();
      }
      else if (selectedValue === "3") {
        this.sortDown();
      }
    },
    Down() {
      if (this.quantity !== 1) {
        this.quantity--
      }
    },
    setModal() {
      let a = document.getElementById('input')
      console.log('hello')
      this.quantity = a.value
    },
    Up() {
      this.quantity++
    },
    Off() {
      this.modal = 0
      this.quantity = 1
    },
    On(object) {
      this.modal = 1
      this.temp = object
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
    set(bool) {
      this.display = bool;
    }
    ,
    sortUp() {
      for (let i = 0; i < this.Input.length - 1; i++){
        for (let j = i + 1; j < this.Input.length; j++){
          let price1 = parseFloat(this.Input[i].price.replace(/,/g, ''))
          let price2 = parseFloat(this.Input[j].price.replace(/,/g, ''))
          if (price1 > price2) {
            let c = this.Input[j];
            this.Input[j] = this.Input[i];
            this.Input[i] = c;
          }
        }
      }
      console.log(this.Input);
      this.changeNum(this.default);
    },
    sortDown() {
      for (let i = 0; i < this.Input.length - 1; i++){
        for (let j = i + 1; j < this.Input.length; j++){
          let price1 = parseFloat(this.Input[i].price.replace(/,/g, ''))
          let price2 = parseFloat(this.Input[j].price.replace(/,/g, ''))
          if (price1 < price2) {
            let c = this.Input[j];
            this.Input[j] = this.Input[i];
            this.Input[i] = c;
          }
        }
      }
      console.log(this.Input);
      this.changeNum(this.default);
    }
    ,
    changeNum(num) {
      this.default = num;
      // this.Input = Data.data.product;
      this.pageMax = 0;
      this.page = 0;
      this.Object = [];
      for (let i = 0; i < this.Input.length; i++){
        let temp = [];
        for (let j = 0; j < this.default; j++){
          if (!this.Input[i]) {
            break
          }
          temp.push(this.Input[i])
          if (j != 14) {
            i++;
          }
        }
        this.Object.push(temp);
        if (i != this.Input.length - 1) {
          this.pageMax = this.pageMax + 1;
        }
      }
    }
    ,
    changePage(index) {
      if (index != 999) {
        this.page = index;
      }
      else {
        if(this.page != this.pageMax-1)
        {
          this.page += 1;
        }
      }
    }
    ,
    startDrag() {
      const handle = this.$refs.handle
      handle.style.cursor = 'grabbing'
      window.addEventListener('mousemove', this.handleMouseMove);
    },
    startDrag1() {
      const handle = this.$refs.handle1
      handle.style.cursor = 'grabbing'
      window.addEventListener('mousemove', this.handleMouseMove1);
    }
    ,
    handleMouseMove(event) {
      // Access the mouse coordinates
      const mouseX = event.clientX;

      // Perform actions based on the mouse position
        const volumeControl = this.$refs.volumeControl
        const handle = this.$refs.handle
        let line = document.getElementById("line")
        let volumePercentage =
          (event.clientX - volumeControl.getBoundingClientRect().left) / volumeControl.offsetWidth
      let price = parseFloat(String(this.maxConst).replace(/,/g, ''))
        // Update the handle position
        if (volumePercentage >= 0 && volumePercentage <= this.percentMax ) {
          console.log(volumePercentage)
          if (volumePercentage < 0.005) {
            volumePercentage = 0;
          }
          if (volumePercentage > this.percentMax - 0.005) {
            volumePercentage = this.percentMax;
          }
          price = parseInt(price * volumePercentage);
          price = price.toLocaleString('en-US')
          this.min = price;
          handle.style.left = `${event.clientX - volumeControl.getBoundingClientRect().left - 15}px`
          this.percentMin = volumePercentage;
          line.style.marginLeft = `${event.clientX - volumeControl.getBoundingClientRect().left}px`
        }
    },handleMouseMove1(event) {
      // Access the mouse coordinates
      const mouseX = event.clientX;
      let line = document.getElementById("line")
      // Perform actions based on the mouse position
        console.log("Mouse move", mouseX);
        const volumeControl = this.$refs.volumeControl
        const handle = this.$refs.handle1
        let volumePercentage =
          (event.clientX - volumeControl.getBoundingClientRect().left) / volumeControl.offsetWidth
        let price = parseFloat(String(this.maxConst).replace(/,/g, ''))
        // Update the handle position
        if (volumePercentage >= this.percentMin && volumePercentage <= 1) {
          console.log(volumePercentage)
          if (volumePercentage < this.percentMin + 0.005) {
            volumePercentage = this.percentMin;
          }
          if (volumePercentage > 0.995) {
            volumePercentage = 1;
          }
          price = parseInt(price * volumePercentage);
          price = price.toLocaleString('en-US')
          this.max = price;
          handle.style.left = `${event.clientX - volumeControl.getBoundingClientRect().left - 15}px`
          this.percentMax = volumePercentage;
          line.style.marginRight = `${volumeControl.offsetWidth-(event.clientX - volumeControl.getBoundingClientRect().left)}px`
        }
    },
    endDrag() {
      const handle = this.$refs.handle
      handle.style.cursor = 'grab'
      window.removeEventListener("mousemove", this.handleMouseMove)
      this.sortSet();
    },
    endDrag1() {
      const handle = this.$refs.handle1
      handle.style.cursor = 'grab'
      window.removeEventListener("mousemove", this.handleMouseMove1)
      this.sortSet();
    },
    sortSet() {
      if (this.saveData) {
        this.Input = this.saveData;
      }
      this.saveData = this.Input;
      let min = parseFloat(this.min.replace(/,/g, ''))
      let max = parseFloat(this.max.replace(/,/g, ''))
      let temp = [];
      for (let i = 0; i < this.Input.length; i++){
        let price = parseFloat(this.Input[i].price.replace(/,/g, ''))
        console.log(min,max,price);
        if (price >= min && price <= max) {
          temp.push(this.Input[i]);
        }
      }
      this.Input = temp;
      this.changeNum(this.default)
    }
  },
  mounted() {
    this.nav = JSON.parse(this.nav)
    const changecolor = document.getElementsByClassName('path')
    changecolor[this.nav.length].style.color = '#31beff';
    this.Input = Data.data.product;
    for (let i = 0; i < this.Input.length; i++){
      let temp = [];
      for (let j = 0; j < this.default; j++){
        if (!this.Input[i]) {
          break
        }
        temp.push(this.Input[i])
        if (j != 14) {
          i++;
        }
      }
      this.Object.push(temp);
      if (i != this.Object.length - 1) {
        this.pageMax = this.pageMax + 1;
      }
    }
  }
}
</script>

<style scoped src="./Search.css"></style>
