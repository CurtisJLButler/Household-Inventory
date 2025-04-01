<template>
  <div class="home-container">
    <header class="home-header">
      <h1>Welcome to Your Household App!</h1>
      <p>Select an option to get started:</p>
    </header>

    <main class="home-main">
      <div class="button-container">
        <router-link to="/test">Test</router-link>
        <router-link to="/inventory">Inventory</router-link>
        <router-link to="/listtoget">List to get</router-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-container {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.home-header {
  background-color: #4CAF50;
  color: white;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.home-header h1 {
  margin: 0;
  font-size: 2.5rem;
}

.home-header p {
  font-size: 1.25rem;
}

.home-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.button-container {
  display: flex;
  gap: 20px;
}

.home-button {
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.home-button:hover {
  background-color: #45a049;
}

.home-button:active {
  transform: scale(0.98);
}

.home-button:focus {
  outline: none;
}
</style>