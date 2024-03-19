const apiUrl = import.meta.env.VITE_API_URL;

async function getProducts() {
  try {
    const response = await fetch(`${apiUrl}/products`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

async function getSingleProducts(id) {
  try {
    const response = await fetch(`${apiUrl}/products/${id}`);
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getTrendingProducts() {
  try {
    const response = await fetch(`${apiUrl}/products/trending`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

async function searchProducts(searchTerm) {
  try {
    const response = await fetch(
      `${apiUrl}/search?term=${encodeURIComponent(searchTerm)}`
    );
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Search failed:", error);
  }
}

async function getProductScreenshots(productId) {
  try {
    const response = await fetch(`${apiUrl}/products/${productId}/screenshots`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Product not found");
      } else {
        throw new Error("Failed to fetch screenshots: " + response.status);
      }
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching screenshots:", error);
    throw error;
  }
}

async function addToCart(productId, quantity, userId) {
  try {
    const response = await fetch(`${apiUrl}/addtocart/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity,
        userId,
      }),
    });
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getUserCart(userId) {
  try {
    const response = await fetch(`${apiUrl}/getcart/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function authenticateUser(email, password) {
  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem("token", data.token);
      return data;
    } else {
      if (response.status === 401) {
        throw new Error("Invalid email or password");
      } else {
        throw new Error("Error: " + response.status);
      }
    }
  } catch (error) {
    console.error(error);
    alert("Credenciales incorrectas, por favor intenta de nuevo");
  }
}

async function userRegister(
  username,
  email,
  password,
  firstName,
  lastName,
  callback
) {
  try {
    const response = await fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        firstName,
        lastName,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (callback) {
        callback(null, data);
      }
      return data;
    } else {
      if (response.status === 409) {
        const error = new Error("User with this email is already registered");
        if (callback) {
          callback(error, null);
        }
        alert("Usuario ya registrado con este correo, por favor inicia sesion");
        return error;
      } else {
        throw new Error("Error: " + response.status);
      }
    }
  } catch (error) {
    console.error("Register failed:", error);
    if (callback) {
      callback(error, null);
    }
  }
}

export {
  getUserCart,
  addToCart,
  getProductScreenshots,
  getProducts,
  getSingleProducts,
  userRegister,
  authenticateUser,
  searchProducts,
  getTrendingProducts,
};
