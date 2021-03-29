<template>
  <v-card elevation="0">
    <v-list two-line>
      <v-list-item-group>
        <v-subheader>Mes pormotions : </v-subheader>
        <template v-for="(promotion, index) in promotions">
          <v-list-item :key="promotion.title" @click="handleDialog(promotion)">
            <template>
              <v-list-item-content>
                <v-list-item-title v-text="promotion.name" />

                <v-list-item-subtitle v-text="promotion.description" />
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
        :promotion="openedPromotion"
      />
    </v-dialog>
  </v-card>
</template>

<script>
import PromotionDetails from "./PromotionDetails";
export default {
  name: "ListCodePromo",
  components: {
    PromotionDetails,
  },
  data() {
    return {
      openedPromotion: null,
      dialog: false,
      promotions: [
        {
          name: "Promo 1",
          percentage: 0.2,
          description: "Nouvelle promotion sur ce produit",
          dateStart: "12/03/2021",
          dateEnd: "25/05/2021",
        },
        {
          name: "Promo 2",
          percentage: 0.2,
          description: "Nouvelle promotion sur ce produit",
          dateStart: "12/03/2021",
          dateEnd: "25/05/2021",
        },
        {
          name: "Promo 3",
          percentage: 0.2,
          description: "Nouvelle promotion sur ce produit",
          dateStart: "12/03/2021",
          dateEnd: "25/05/2021",
        },
      ],
    };
  },

  methods: {
    handleDialog(promotion) {
      this.dialog = !this.dialog;
      if (this.dialog === true) {
        this.openedPromotion = promotion;
      } else {
        this.openedPromotion = null;
      }
    },
  },
};
</script>

<style scoped></style>
