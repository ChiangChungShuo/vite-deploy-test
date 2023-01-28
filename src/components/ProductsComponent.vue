<template>
  <div class="row row-cols-3 my-4 g-5">
    <div class="col" v-for="product in sortProducts" :key="product.id">
      <div class="card">
        <img :src="product.imageUrl" alt="" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">
            {{ product.title }}
            <span class="float-end">{{ product.price }}</span>
          </h5>
          <a
            href="#"
            class="btn btn-outline-success w-100"
            @click.prevent="addToCart(product.id)"
            >加入購物車</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopStore from "../stores/shopStore.js";
import cartStore from "../stores/cartStore.js";
import CardComponent from "./CardComponent.vue";
import { mapState, mapActions } from "Pinia";

export default {
  computed: {
    ...mapState(shopStore, ["sortProducts"]),
  },
  methods: {
    ...mapActions(cartStore, ["addToCart"]),
  },
  components: {
    CardComponent,
  },
};
</script>
