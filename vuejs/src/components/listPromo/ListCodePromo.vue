<template>
  <v-card elevation="0">
    <v-list two-line>
      <v-list-item-group>
        <v-subheader>Mes promotions : </v-subheader>
        <template v-for="(promotion, index) in promotions">
          <v-list-item
            :key="promotion.title"
            @click="handleDialog(promotion.codePromo)"
          >
            <template>
              <v-list-item-content>
                <v-list-item-title class="d-flex justify-space-between">
                  <div>{{ promotion.name }}</div>

                  <div v-if="promotion.percentage">
                    -{{ promotion.percentage * 100 }} %
                  </div>
                  <div v-else-if="promotion.valueReduction">
                    -{{ promotion.valueReduction }} €
                  </div>
                </v-list-item-title>

                <v-list-item-subtitle
                  >Du {{ formatDate(promotion.dateStart) }} au
                  {{ formatDate(promotion.dateEnd) }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-divider v-if="index < promotions.length - 1" :key="index" />
        </template>
      </v-list-item-group>
    </v-list>

    <v-dialog v-model="dialog" max-width="290">
      <PromotionDetails
        @handleDialog="handleDialog"
        :idPromotion="idPromotion"
      />
    </v-dialog>
  </v-card>
</template>

<script>
import PromotionDetails from "./PromotionDetails";
import moment from "moment";
export default {
  name: "ListCodePromo",
  components: {
    PromotionDetails,
  },
  data() {
    return {
      idPromotion: null,
      dialog: false,
      promotions: [],
    };
  },

  methods: {
    handleDialog(id) {
      this.dialog = !this.dialog;
      if (this.dialog === true) {
        this.idPromotion = id;
      } else {
        this.idPromotion = null;
      }
    },
    formatDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },
  },
  async created() {
    const userId = this.$store.state.user.id;
    await this.$http
      .get("http://localhost:8080/api/promotion/list/" + userId)
      .then((response) => {
        console.log(`get list code promo`, response);
        if (response.status === 200) {
          this.promotions = response.data.promotion;
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  },
};
</script>

<style scoped></style>
