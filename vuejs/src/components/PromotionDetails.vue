<template>
  <div class="PromotionDetails">
    <div class="modal">
      <slot name="header">
        <label>Details de la carte</label>
      </slot>

      <slot name="body">
        <table>
          <thead>
            <tr>
              <th class="column">Nom</th>
              <th class="column">Pourcentage</th>
              <th class="column">Description</th>
              <th class="column">Date de début</th>
              <th class="column">Date de fin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="column">{{ Promotion.data[0].name }}</td>
              <td class="column">{{ Promotion.data[0].percentage }}</td>
              <td class="column">{{ Promotion.data[0].description }}</td>
              <td class="column">{{ Promotion.data[0].dateStart }}</td>
              <td class="column">{{ Promotion.data[0].dateEnd }}</td>
            </tr>
          </tbody>
        </table>
      </slot>

      <slot name="footer">
        <button type="button" class="btn-close" @click="close">
          x
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PromotionDetails",
  data() {
    return {
      Promotion: []
    };
  },
  created() {
    this.getPromo();
  },
  methods: {
    getPromo() {
      axios
        // todo
        .get(" " + this.getName())
        .then(response => (this.Promotion = response.data));
    },
    getName() {
      var url = decodeURI(window.location.href);
      var urlsplit = url.split("/");
      var lastpart = urlsplit[urlsplit.length - 1];
      if (lastpart === "") {
        lastpart = urlsplit[urlsplit.length - 2];
      }
      return lastpart;
    }
  }
};
</script>

<style scoped></style>
