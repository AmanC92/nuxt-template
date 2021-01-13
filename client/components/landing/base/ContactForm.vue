<template>
  <div>
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />

    <base-text-field label="Name" />

    <base-text-field label="Email" />

    <base-text-field label="Subject" />

    <base-textarea class="mb-6" label="Your Need & Description" />

    <base-btn
      :color="!theme.isDark ? 'accent' : 'white'"
      href="mailto:shop@audify.com?subject=Audify%20Theme%20Question"
      outlined
      target="_blank"
    >
      Send message
    </base-btn>
  </div>
</template>

<script>
import BaseInfoCard from "./InfoCard";
import BaseTextarea from "./Textarea";
import BaseTextField from "./TextField";
import BaseBtn from "./Btn";

export default {
  name: "BaseContactForm",
  components: {
    BaseInfoCard,
    BaseTextarea,
    BaseTextField,
    BaseBtn,
  },
  // Injected from the Vuetify Themeable mixin
  inject: ["theme"],

  props: {
    subtitle: String,
    title: {
      type: String,
      default: "MAIL US YOUR MESSAGE",
    },
  },
};
</script>
