const User = async () => {
  let res;
  try {
    res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    return { status: "success", data: data };
  } catch (e) {
    if (!e.response || !e.response.data) {
      return { status: "error", type: "network", message: "Network Error" };
    }
    return { status: "error", ...e.response.data };
  }
};

export default User;
