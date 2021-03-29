<template>
  <v-card>
    <v-card-title class="headline">
      {{ promotion.name }}
    </v-card-title>

    <v-card-text>
      {{ promotion.description }}
    </v-card-text>

    <v-card-text>
      Du {{ promotion.dateStart }} au {{ promotion.dateEnd }}
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="green darken-1" text @click="handleDialog">
        Fermer
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PromotionDetails",
  data() {
    return {};
  },
  props: {
    promotion: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleDialog() {
      this.$emit("handleDialog");
    },
  },
};
</script>
