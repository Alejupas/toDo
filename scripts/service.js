const service = {
  getCarouselItems: async () => {
    const res = await fetch("http://localhost:3000/carouselItems");
    return res.json();
  },
  getThumbnailItems: async () => {
    const res = await fetch("http://localhost:3000/items");
    return res.json();
  },
  postData: async (data) => {
    const response = await fetch("http://localhost:3000/items/", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  deleteData: async (id) => {
    const response = await fetch("http://localhost:3000/items/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  },
};

export default service;
