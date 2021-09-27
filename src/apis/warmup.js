import config from "../config";
const warmupApi = async (url) => {
  let res;
  try {
    res = await fetch(`${config.url}${url}`);
    const data = await res.json();
    return { status: "success", data: data };
  } catch (e) {
    if (!e.response || !e.response.data) {
      return { status: "error", type: "network", message: "Network Error" };
    }
    return { status: "error", ...e.response.data };
  }
};

export default warmupApi;
