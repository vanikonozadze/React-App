import { useTranslation } from 'react-i18next';
import '../assets/styles/pages/home.scss';

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="home">
      <div className="home__content">
        <h1>{t('home.title')}</h1>
        <p>{t('home.description')}</p>
      </div>
    </section>
  );
}