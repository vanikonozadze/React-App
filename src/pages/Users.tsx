import { useTranslation } from 'react-i18next';
import '../assets/styles/pages/users.scss';
import { useUsers } from '../api/usersApi';
import { useNavigate } from 'react-router-dom';

export default function Users() {
  const { t } = useTranslation();
  const { data, loading, error } = useUsers();
  const navigate = useNavigate();

  if (loading) return <p>{t('users.loading')}</p>;
  if (error) return <p>{t('users.error')}</p>;

  const handleClick = (id: number) => {
    navigate(`/users/${id}`);
  };

  return (
    <section className="users">
      <h1>{t('users.title')}</h1>
      <div className="users__list">
        {data?.map((user) => (
          <div key={user.id} className="user-card" onClick={() => handleClick(user.id)}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}