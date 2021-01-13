<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img
        :src="require('../../../assets/logo-alt.png')"
        contain
        max-width="128"
        min-height="78"
        width="100%"
      />

      <base-title
        size="body-1"
        space="4"
        title="MULTI-PURPOSE THEME"
        weight="regular"
      />

      <base-body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur
        quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci,
        voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti,
        asperiores facere.
      </base-body>

      <base-btn class="mb-12" color="white" outlined> More Info </base-btn>
    </div>
  </v-theme-provider>
</template>

<script>
export default {
  name: "BaseInfo",

  props: {
    title: String,
    dark: Boolean,
  },

  data: () => ({
    business: [
      {
        icon: "mdi-map-marker-outline",
        title: "Address",
        text: "4700 Keele St<br>Toronto, ON M3J 1P3",
      },
      {
        icon: "mdi-cellphone",
        title: "Phone",
        text: "1 (800) 888 777<br>1 (800) 888 666",
      },
      {
        icon: "mdi-email",
        title: "Email",
        text: "dev@audify.com<br>dev2@audify.com",
      },
    ],
  }),
};
</script>
