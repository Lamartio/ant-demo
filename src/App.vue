<template>
  <v-app>
    <v-app-bar color="primary" prominent>
      <v-app-bar-title>App Store Demo</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>Welcome to Vue + Vuetify + TypeScript</v-card-title>
              <v-card-text>
                Your project is set up and ready to go!
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="increment">
                  Count: {{ count }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>
