export default function Profile() {
  interface UserType {
    name: string;
    profilePicture: string;
  }

  const User: UserType = {
    name: "User Name",
    profilePicture: "/profile-pic.jpg",
  };

  return (
    <div className="profile-container">
      <img
        src={User.profilePicture}
        alt="Profile Picture"
        className="img-profile"
      />
      <span className="name-profile">{User.name}</span>
    </div>
  );
}
