<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <h1>Welcome to the List App!</h1>
    </div>
  </header>

  <main>
    <ul>
      <li v-for="item in listItems" :key="item.id">
        {{ item.name }} - Quantity: {{ item.count }}
        <div class="button-container">
          <button @click="handleHaveNoneClick(item)">Have none</button>
          <button @click="handleAddToListClick(item)">Add to list</button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      listItems: [
        { id: 1, name: 'Item 1', count: 5 },
        { id: 2, name: 'Item 2', count: 3 },
        { id: 3, name: 'Item 3', count: 8 },
        { id: 4, name: 'Item 4', count: 2 },
        { id: 5, name: 'Item 5', count: 10 },
      ],
    };
  },
  methods: {
    handleHaveNoneClick(item) {
      alert(`You have no ${item.name} left.`);
    },
    handleAddToListClick(item) {
      alert(`Added ${item.name} to list.`);
    },
  },
};
</script>

<style>
/* Add any custom styles here */
button {
  margin-left: 10px;
}

.button-container {
  display: flex;
  justify-content: start;
  gap: 10px;
}
</style>