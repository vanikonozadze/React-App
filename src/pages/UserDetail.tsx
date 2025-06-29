import { useParams } from 'react-router-dom';
import '../assets/styles/pages/user-detail.scss';
import { useUserDetail } from '../api/usersApi';

export default function UserDetail() {
  const { id } = useParams();
  const { data: user, loading, error } = useUserDetail(id);

  if (loading) return <p>Loading user...</p>;
  if (error || !user) return <p>Error loading user</p>;

  return (
    <section className="user-detail">
      <h1>{user.name}</h1>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
      <p><b>Company:</b> {user.company.name}</p>
      <p><b>Address:</b> {user.address.street}, {user.address.city}</p>
    </section>
  );
}
