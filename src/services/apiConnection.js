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
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
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

//Esto funciona re piola
async function getProductScreenshots(productId) {
  try {
    const response = await fetch(`${apiUrl}/products/${productId}/screenshots`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Product not found");
      } else {
        console.log("Failed to fetch screenshots:", response.statusText);
        throw new Error(`Failed to fetch screenshots: ${response.status}`);
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
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
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
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
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
    }
    if (response.status === 401) {
      throw new Error("Invalid email or password");
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert("Credenciales incorrectas, por favor intenta de nuevo");
    throw error;
  }
}

async function searchProducts(query) {
  try {
    const response = await fetch(`${apiUrl}/search/products?q=${query}`);
    if (response.ok) {
      const data = await response.json();
      const result = data.filter(() => query);
      console.log(result);
      return result;
    }
    throw new Error(`Error: ${response.status}`);
  } catch (error) {
    console.error(error);
    throw error;
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
    }
    if (response.status === 409) {
      const error = new Error("User with this email is already registered");
      if (callback) {
        callback(error, null);
      }
      alert("Usuario ya registrado con este correo, por favor inicia sesion");
      return error;
    }
    throw new Error(`Error: ${response.status}`);
  } catch (error) {
    console.error("Register failed:", error);
    if (callback) {
      callback(error, null);
    }
    throw error;
  }
}

export {
  searchProducts,
  getUserCart,
  addToCart,
  getProductScreenshots,
  getProducts,
  getSingleProducts,
  userRegister,
  authenticateUser,
  getTrendingProducts,
};
