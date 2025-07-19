import AxiosInstances from ".";

const uploadImage = async (formData) => {
  return await AxiosInstances.post("/api/user/upload-photo", formData);
};

const getUser = async () => {
  return await AxiosInstances.get("/api/user");
};

const updateUser = async (data) => {
  return await AxiosInstances.put("/api/user/update-profile", data);
};
const userAPI = { uploadImage, getUser, updateUser };

export default userAPI;