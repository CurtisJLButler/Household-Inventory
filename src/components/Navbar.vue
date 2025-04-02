<template>
  <header class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <router-link to="/" class="logo-link">Household Inventory</router-link>
      </div>
      <nav>
        <ul class="nav-list">
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/test" class="nav-link">Test</router-link></li>
          <li><router-link to="/inventory" class="nav-link">Inventory</router-link></li>
          <li><router-link to="/listtoget" class="nav-link">List to Get</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  background-color: #333;
  color: white;
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo-link {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

.nav-list li {
  margin: 0;
}

.nav-link {
  font-size: 1.1rem;
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link:hover,
.nav-link:focus {
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
}

.nav-link:active {
  transform: scale(0.98);
}
</style>