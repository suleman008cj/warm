import API from "../apis";

const getUsers = () => async () => {
  const { status, data } = await API.User();

  if (status === "error") {
    alert("Error");
    return;
  }
  return data;
  //   userContext.data(data);
  //   history.push("/user");
};

export default getUsers;
