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

async function getProductScreenshots(ProductId) {
  try {
    const response = await fetch(`${apiUrl}/products/${ProductId}/screenshots`);
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
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

    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    const data = await response.json();
    if (callback) {
      callback(null, data);
    }
    return data;
  } catch (error) {
    console.error("Register failed:", error);
    if (callback) {
      callback(error, null);
    }
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

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Invalid email or password");
      } else {
        throw new Error("Error: " + response.status);
      }
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    alert("Authentication failed. Please try again.");
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
};
