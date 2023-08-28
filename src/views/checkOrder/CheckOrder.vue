<template>
    <div class="Container">
        <div v-if="this.object">
            
        </div>
        <div v-else class="noneData">
            <h1 class="title">Đơn hàng " {{ this.Code }} " không được tìm thấy</h1>
            <h2>Đề xuất</h2>
            <ul>
                <li>- Kiểm tra chính xác lại mã đơn hàng trong email và SMS của bạn.</li>
                <li>- Kiểm tra email đặt hàng của bạn xem có chính xác không.</li>
                <li>- Chỉ được điền email đặt hàng khi theo dõi đơn hàng.</li>
            </ul>
            <img src = "https://web.nvnstatic.net/tp/T0101/img/checkOrder.jpg?v=2">
            <h1 class="Text">
                Theo dõi đơn hàng của bạn
            </h1>
            <div class="follow">
                <div class="input">
                    Mã đơn hàng
                    <input placeholder="VD: 12321" v-model="code">
                </div>
                <div class="input">
                    Email đặt hàng
                    <input placeholder="VD: tranvana@gmail.com" v-model="email">
                </div>
                <div  class="buttonAlign">
                    <button class="button" @click="send()">
                        Theo dõi
                    </button>
                </div>
            </div>
            <h3>
                Nếu quý khách có bất kỳ thắc mắc nào, xin vui lòng tham khảo phần <a href="#">Hỏi đáp</a>
            </h3>
        </div>
    </div>
</template>

<script setup>
import Data from "./Data.json"
</script >

<script>
export default {
    name: 'CheckOrder',
    data() {
        return {
            Code : sessionStorage.code,
            Email : sessionStorage.email,
            object: undefined,
            code: undefined,
            email:undefined
        }
    },
    created() {
        this.object = Data.data
        if (this.object.bill.status === 1) {
            this.object.bill.status = "đã giao"
        }
        else {
            this.object.bill.status = "chưa giao"
        }
        this.object = undefined   
    },
    methods: {
        send() {
            sessionStorage.setItem("code",this.code)
            sessionStorage.setItem("email",this.email)
            location.reload();
        }
    },
}
</script>

<style scoped src = "./CheckOrder.css"></style>