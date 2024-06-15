<template>
  <v-container fluid>
    <v-card class="pa-3">
      <v-row
        :style="{ height: '120px'}"
        class="red"
        align="center"
      >
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
      <v-row
        :style="{ height: '120px' }"
        class="yellow"
      >
        <v-col
          align-self="center"
        >
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>



    <v-card class="pa-3">
      <v-row
        justify="end"
      >
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>

      <v-row
        justify="space-between"
      >
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>


  </v-container>
</template>
<script>
export default {

}
</script>
