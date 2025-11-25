<template>
  <v-app>
    <v-app-bar color="primary" prominent title="App Store Demo"/>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card title="Welcome to ANT" text="Your project is set up and ready to go!">
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
import {ref, watch} from 'vue'
import {injectContext} from "./plugins/context.ts";
import {useTheme} from "vuetify/framework";

const { colorMode } = injectContext()
const theme = useTheme()
const count = ref(0)

watch(colorMode.isDark, isDark => theme.change(isDark ? 'dark' : 'light'))

const increment = () => count.value++
</script>
