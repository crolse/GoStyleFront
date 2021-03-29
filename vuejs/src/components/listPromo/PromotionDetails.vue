<template>
  <v-card class="mx-auto" max-width="344" min-height="200" max-height="400">
    <v-card-text class="pt-5 d-flex align-center flex-column">
      <div class=" overline">{{ promotion.name }}</div>
      <p class="display-2 text--primary">
        {{ promotion.codePromo }}
      </p>
      <div class="display-1 text--primary" v-if="promotion.percentage">
        - {{ promotion.percentage * 100 }} %
      </div>
      <div class="display-1 text--primary" v-else-if="promotion.valueReduction">
        - {{ promotion.valueReduction }} €
      </div>
      <p class="mt-5">
        {{ promotion.description }}
      </p>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="primary" text @click="handleDialog">
        Fermer
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
  name: "PromotionDetails",
  data() {
    return {
      promotion: null,
    };
  },
  props: {
    idPromotion: String,
  },
  methods: {
    handleDialog() {
      this.$emit("handleDialog");
    },
    formatDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },
    getDetails() {
      // if (this.idPromotion) {
      this.$http
        .get("http://localhost:8080/api/promotion/details/" + this.idPromotion)
        .then((response) => {
          console.log(`get code promo details`, response);
          if (response.status === 200) {
            this.promotion = response.data.promotion;
          }
        })
        .catch(function(error) {
          console.error(error);
        });
      // }
    },
  },
  created() {
    this.getDetails();
  },
  watch: {
    idPromotion() {
      this.getDetails();
    },
  },
};
</script>
