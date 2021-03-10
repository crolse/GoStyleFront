<template>
  <div class="PromotionDetails">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="PromoDescription"
        aria-describedby="Description de la promo"
      >
        <header class="modal-header">
          <slot name="header">
            <label>Details de la carte</label>
          </slot>
        </header>

        <section class="modal-body">
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
<!--                  <td class="column">{{ Promotion.data[0].name }}</td>-->
<!--                  <td class="column">{{ Promotion.data[0].percentage }}</td>-->
<!--                  <td class="column">{{ Promotion.data[0].description }}</td>-->
<!--                  <td class="column">{{ Promotion.data[0].dateStart }}</td>-->
<!--                  <td class="column">{{ Promotion.data[0].dateEnd }}</td>-->
                </tr>
              </tbody>
            </table>
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn-close" @click="close" aria-label="Close modal">
              Close
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import listeCodePromo from "./listeCodePromo";

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
        .get(" " + this.getIdCodePromo())
        .then(response => (this.Promotion = response.data));
    },
    getIdCodePromo() {
      return listeCodePromo.data().idCodePromo;
    },
    close() {
      this.$emit("close");
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
th {
  border: solid 1px #808080;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}
</style>
