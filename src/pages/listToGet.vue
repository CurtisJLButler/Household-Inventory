<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <h1>Shopping List</h1>
    </div>
  </header>

  <main>
    <section class="shopping-list">
      <table>
        <thead>
          <tr>
            <th>Item name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in shoppingList" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.count }}</td>
            <td>
              <div class="button-container">
                <button class="bought" @click="markAsBought(item)">Mark as Bought</button>
                <button class="remove" @click="removeItem(item)">Remove</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ShoppingList',
  data() {
    return {
      shoppingList: [
        { id: 1, name: 'Apples', count: 5 },
        { id: 2, name: 'Bread', count: 2 },
        { id: 3, name: 'Milk', count: 1 },
        { id: 4, name: 'Eggs', count: 12 },
        { id: 5, name: 'Carrots', count: 6 },
      ],
    };
  },
  methods: {
    markAsBought(item) {
      alert(`You bought ${item.name}.`);
    },
    removeItem(item) {
      const index = this.shoppingList.indexOf(item);
      if (index > -1) {
        this.shoppingList.splice(index, 1);
        alert(`${item.name} has been removed from the list.`);
      }
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

.bought{
/* Add to list button*/
  background-color:rgb(126, 109, 255);
}

.remove{
/* Have none button*/
  background-color:rgb(255, 71, 71);
}
</style>

