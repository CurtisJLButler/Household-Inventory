<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <h1>Welcome to the Inventory App!</h1>
    </div>
  </header>

  <main>
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.count }}</td>
          <td>
            <div class="button-container">
              <button class="list" @click="handleAddToListClick(item)">Add to list</button>
              <button class="none" @click="handleHaveNoneClick(item)">Have none</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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

/* General Table Styling */
table {
  width: 50%;
  border-collapse: collapse;
  margin-top: 20px;
  text-align: left;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color:rgb(206, 206, 206);
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}

button:hover {
  background-color: #e0e0e0;
}

.list{
/* Add to list button*/
  background-color:rgb(126, 109, 255);
}

.none{
/* Have none button*/
  background-color:rgb(255, 71, 71);
}

</style>