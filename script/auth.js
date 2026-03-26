document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("mainContent");
  const authContainer = document.getElementById("authContainer");
  const loginSection = document.getElementById("login");
  const registerSection = document.getElementById("register");

  const signupBtn = document.getElementById("signupBtn");
  const toRegister = document.getElementById("toRegister");
  const toLogin = document.getElementById("toLogin");

  // Show Register Page
  function showRegister(push = true) {
    mainContent.style.display = "none";
    authContainer.style.display = "flex";
    loginSection.style.display = "none";
    registerSection.style.display = "flex";

    if (push) {
      history.pushState({ page: "register" }, "Register", "#register");
    }
  }

  // Show Login Page
  function showLogin(push = true) {
    mainContent.style.display = "none";
    authContainer.style.display = "flex";
    registerSection.style.display = "none";
    loginSection.style.display = "flex";

    if (push) {
      history.pushState({ page: "login" }, "Login", "#login");
    }
  }

  // Show Home / Main Page
  function showHome(push = false) {
    authContainer.style.display = "none";
    mainContent.style.display = "block";

    if (push) {
      history.pushState({ page: "home" }, "Home", "#home");
    }
  }

  // Event Listeners
  signupBtn.addEventListener("click", () => showRegister());
  toRegister.addEventListener("click", () => showRegister());
  toLogin.addEventListener("click", () => showLogin());

  // Handle Browser Back / Forward
  window.addEventListener("popstate", (event) => {
    if (!event.state || event.state.page === "home") {
      showHome(false);
    } else if (event.state.page === "register") {
      showRegister(false);
    } else if (event.state.page === "login") {
      showLogin(false);
    }
  });

  // Optional: if user reloads on #login or #register, show correct page
  if (location.hash === "#register") {
    showRegister(false);
  } else if (location.hash === "#login") {
    showLogin(false);
  }
});