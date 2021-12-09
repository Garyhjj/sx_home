const getters = {
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  mobile: state => state.user.mobile,
  email: state => state.user.email,
  userId: state => state.user.userId,
  role: state => state.user.role,
  theme: state => state.settings.theme,
  isDarkTheme: state => state.settings.theme === "dark"
};
export default getters;
