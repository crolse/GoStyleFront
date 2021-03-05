<template>
  <div class="PromotionCodeTable">
    <table>
      <thead>
        <tr>
          <th class="column">Nom</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="promotion in promotions.data" :key="promotion.id">
          <router-link :to="'../components/PromotionDetails/' + promotion.name">
            <td>
              {{ promotion.name }}
            </td>
          </router-link>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PromotionCodeTable",
  data() {
    return {
      promotions: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      axios
        // todo
        .get(" ")
        .then(response => (this.promotions = response.data));
    }
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
td {
  border: solid 1px #808080;
}
</style>