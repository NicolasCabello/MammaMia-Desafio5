const Profile = () => {
  const email = "usuario@mammamia.cl";

  return (
    <main className="profile-page">
      <section className="profile">
        <h1>Perfil de usuario</h1>
        <p className="profile-email">
          Email: <strong>{email}</strong>
        </p>
        <button type="button" className="btn btn-dark">
          Cerrar sesión
        </button>
      </section>
    </main>
  );
};

export default Profile;
