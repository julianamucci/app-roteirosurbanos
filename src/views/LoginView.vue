/**
 * LoginView component.
 *
 * This component represents the login view of the application.
 * It allows users to enter their email and password to log in.
 *
 */
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createDirectus, authentication, rest, login } from "@directus/sdk";

const email = ref("");
const password = ref("");

const router = useRouter();

const directus = createDirectus("https://admin.roteirosurbanos.com.br/")
  .with(authentication("json"))
  .with(rest());

const handleLogin = async () => {
  try {
    const response = await directus.request(login(email.value, password.value));
    console.log("Authentication successful", response);
    router.push({ name: "addjournal" });
    if (response.access_token) {
      localStorage.setItem("userToken", response.access_token);
    }
  } catch (error) {
    console.error("Authentication failed:", error);
  }
};
</script>

<template>
    <div class="login-container">
      <form @submit.prevent="handleLogin">
        <h2>Welcome, to your Travel Journal!</h2>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
  
        <button type="submit">Login</button>
        <p class="signup-link">
          Do not have an account? <RouterLink to="/signup">SignUp</RouterLink>
        </p>
      </form>
    </div>
  </template>
  
  <style scoped>
    .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  form {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    width: 100%;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #4caf50;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .signup-link {
    margin-top: 15px;
    text-align: center;
  }
  
  .signup-link a {
    color: #4caf50;
    text-decoration: none;
  }
  
  .signup-link a:hover {
    text-decoration: underline;
  }
  </style>