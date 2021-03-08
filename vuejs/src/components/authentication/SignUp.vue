<template>
  <v-card class="card" elevation="1">
    <v-card-title>
      Inscription
    </v-card-title>
    <v-card-text>
      <v-text-field label="Adresse mail*" :rules="rules" hide-details="auto" />
      <v-text-field label="Mot de passe*" :rules="rules" hide-details="auto" />
    </v-card-text>
    <v-card-actions class="actions">
      <v-btn color="primary">
        s'inscrire
      </v-btn>
      <v-btn
        class="ma-1"
        color="secondary"
        plain
        @click="$router.push('/signIn')"
      >
        Se connecter
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SignUp",
  data: () => ({
    rules: [value => !!value || "Champ requis."]
  })
};
</script>

<style scoped>
.card {
  margin-top: 50px;
  /* height: 50vh; */
  align-self: stretch;
}
.actions {
  margin-top: 40px;
  justify-content: center;
  flex-direction: column;
}
</style>
