<template>
  <v-select :items="items" label="Solo field" dense solo></v-select>
</template>

<script>
export default {
  name: "InfrastructureSimulator",
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>
