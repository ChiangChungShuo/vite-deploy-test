import { defineStore } from "Pinia";
import shopStore from "./shopStore.js";
export default defineStore("cartStore", {
  //vue data,methods,computed
  //store state,actions,getters
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(productId, qty = 1) {
      //取得已經有加入購物車的項目
      //進行判斷 如果購物車有該項目則+1 沒有就新增一個購物車項目
      const currentCart = this.cart.find(
        (item) => item.productId === productId
      );
      if (currentCart) {
        currentCart.qty += qty;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty,
        });
      }
    },
    setCartQty(id, event) {
      const currentCart = this.cart.find((item) => item.id === id);
      currentCart.qty = event.target.value * 1;
    },
    removeCartItem(id) {
      const index = this.cart.findIndex((item) => item.id === id);
      this.cart.splice(index, 1);
    },
  },
  getters: {
    cartList: ({ cart }) => {
      //1.購物車品項資訊需,需要整合產品資訊
      //2.必須計算小計金額
      //3.必須計算總金額
      const { products } = shopStore();
      const carts = cart.map((item) => {
        //單一產品取出
        const product = products.find(
          (product) => product.id === item.productId
        );
        //相同ID的產品
        return {
          ...item,
          product,
          subtotal: product.price * item.qty,
        };
      });
      const total = carts.reduce((a, b) => a + b.subtotal, 0);

      return {
        carts, //列表
        total,
      };
    },
  },
});
