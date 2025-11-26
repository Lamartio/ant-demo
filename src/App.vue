<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card title="Welcome to ANT" text="Your project is set up and ready to go!">
              <v-card-actions class="justify-center">
                <v-btn color="primary" variant="tonal" @click="increment">
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
import {onMounted, ref, watch} from 'vue'
import {injectContext} from "./plugins/context.ts";
import {useTheme} from "vuetify/framework";

const {colorMode, comms: {toolbar: {menu, title}}} = injectContext()
const theme = useTheme()
const count = ref(0)

watch(colorMode.isDark, isDark => theme.change(isDark ? 'dark' : 'light'))

onMounted(() => {

  title.value = 'Welcome to the demo!'
  menu.value = [
    {
      icon: "mdi-plus",
      title: "Increment",
      onClick: increment
    }
  ]
})

function increment() {
  title.value = `Count: ${count.value++}`
}
</script>
