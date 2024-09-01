<template>
  <div>
    <v-btn @click="toggleLanguage">
      <v-icon>{{ currentLanguage === 'en' ? 'mdi-flag' : 'mdi-flag-checkered' }}</v-icon>
      {{ currentLanguage === 'en' ? 'English' : 'Español' }}
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  methods: {
    ...mapActions(['updateLanguage']),
    toggleLanguage() {
      const newLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
      this.updateLanguage(newLanguage);
    },
  },
};
</script>
