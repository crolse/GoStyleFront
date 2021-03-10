<template>
  <div class="PromotionCodeTable">
    <button type="button" class="btn" @click="showModal">
      test
    </button>
    <modal v-show="isModalVisible" @close="closeModal" />
    <table>
      <thead>
        <tr>
          <th class="column">Nom</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="promotion in promotions.data" :key="promotion.id">
          <td>
            <button type="button" class="btn" @click="showModal(promotion.id)">
              {{ promotion.name }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import modal from "./PromotionDetails.vue";
export default {
  name: "PromotionCodeTable",
  components: {
    modal
  },
  data() {
    return {
      idCodePromo: "",
      promotions: [],
      isModalVisible: false
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
    },
    showModal(codePromo) {
      this.idCodePromo = codePromo;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>
*
<style scoped>
table {
  border-collapse: collapse;
}
td {
  border: solid 1px #808080;
}
th {
  border: solid 1px #808080;
}
</style>
