<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card title="KEEP IN TOUCH WITH US" pace="6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur
        quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci,
        voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti,
        asperiores facere.
      </base-info-card>

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
import BaseInfoCard from "./InfoCard";
import BaseBusinessContact from "./BusinessContact";

export default {
  name: "BaseBusinessInfo",
  components: {
    BaseInfoCard,
    BaseBusinessContact,
  },
  props: { dark: Boolean },

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
