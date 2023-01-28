<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">美甲店</span>
      <button type="button" class="btn btn-outline-danger">
        購物車<span class="badge rounded-pill bg-danger">{{
          cart.length
        }}</span>
      </button>
    </div>
  </nav>
</template>


<script>
import { mapState } from "Pinia";
import cartStore from "../stores/cartStore.js";
export default {
  template: `<nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">美甲店</span>
      <button type="button" class="btn btn-outline-danger">
        購物車<span class="badge rounded-pill bg-danger">{{cart.length}}</span>
      </button>
    </div>
  </nav>`,
  computed: {
    ...mapState(cartStore, ["cart"]),
  },
};
</script>
