import { FaSignOutAlt } from "react-icons/fa";

export default function LogoutButton() {
  const handleLogout = () => {
    // Logic for logging out the user
    console.log("User logged out");
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Sair
      <FaSignOutAlt size={20} style={{ marginLeft: 8 }} />
    </button>
  );
}
