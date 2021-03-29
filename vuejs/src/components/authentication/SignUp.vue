<template>
  <v-card class="card" elevation="1">
    <v-card-title>
      Inscription
    </v-card-title>
    <v-card-text>
      <v-text-field
        label="Adresse mail*"
        :rules="rules"
        hide-details="auto"
        v-model="mail"
      />
      <v-text-field
        label="Mot de passe*"
        :rules="rules"
        hide-details="auto"
        type="password"
        v-model="password"
      />
      <v-text-field label="Nom" hide-details="auto" v-model="firstName" />
      <v-text-field label="Prenom" hide-details="auto" v-model="lastName" />
    </v-card-text>
    <v-card-actions class="actions">
      <v-btn color="primary" @click="addUser">
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
    password: "",
    mail: "",
    firstName: "",
    lastName: "",
    rules: [(value) => !!value || "Champ requis."],
  }),
  methods: {
    addUser() {
      this.$http
        .post("http://localhost:8080/api/user/create", {
          mail: this.mail,
          lastName: this.lastName,
          firstName: this.firstName,
          password: this.password,
        })
        .then((response) => {
          console.log("signup", response);
          if (response.status === 200) {
            this.$router.push("/SignIn");
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
