import useAuth from "../../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="py-10 w-11/12 mx-auto">
        <h2 className="text-4xl font-bold logo">
          Hi, welcome {user?.displayName ? user.displayName : "Back"}{" "}
        </h2>
      </div>
    </div>
  );
};

export default UserHome;
