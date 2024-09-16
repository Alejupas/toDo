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
  editData: async (id, obj) => {
    const response = await fetch("http://localhost:3000/items/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
        credentials: "include",
      },
      redirect: "manual",
      body: JSON.stringify(obj),
    });
    return response.json();
  },
  getData: async () => {
    const repsonse = await fetch("http://localhost:3000/items/");
    return repsonse.json();
  },
};

export default service;
