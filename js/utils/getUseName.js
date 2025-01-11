export default function getUserName() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).name : null;
}
