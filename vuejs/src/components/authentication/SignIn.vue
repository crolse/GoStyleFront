<template>
  <v-card class="card" elevation="0">
    <v-card-title>
      Connexion
    </v-card-title>
    <v-card-text>
      <v-text-field
        v-model="mail"
        label="Adresse mail*"
        :rules="rules"
        hide-details="auto"
      />
      <v-text-field
        v-model="password"
        type="password"
        label="Mot de passe*"
        :rules="rules"
        hide-details="auto"
      />
    </v-card-text>
    <v-card-actions class="actions">
      <v-btn color="primary" @click="connect">
        se connecter
      </v-btn>
      <v-btn
        class="ma-1"
        color="secondary"
        plain
        @click="$router.push('/signUp')"
      >
        S'inscrire
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SignIn",
  data: () => ({
    mail: "",
    password: "",
    rules: [(value) => !!value || "Champ requis."],
  }),
  methods: {
    connect() {
      this.$http
        .post("http://localhost:8080/api/user/connection", {
          mail: this.mail,
          password: this.password,
        })
        .then((response) => {
          console.log("signin", response);
          if (response.status === 200) {
            this.$store.commit("connect", response.data);
            this.$router.push("/ListPromo");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
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
