import { useAuth } from "../context/authContext";
export function Home() {
  const { user, logout, loading } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) return <h1>Loading ...</h1>;
  console.log(user);
  return (
    <div>
      <h1>Welcome {user.displayName || user.email}</h1>
      <img src={user.photoURL} alt="" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
