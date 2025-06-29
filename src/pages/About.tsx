import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/pages/about.scss';

export default function About() {
  const [visits, setVisits] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const count = Number(sessionStorage.getItem('visits') || 0) + 1;
    sessionStorage.setItem('visits', count.toString());
    setVisits(count);
  }, []);

  return (
    <section className="about">
      <h1>{t('about.title')}</h1>
      <p>{t('about.description')}</p>
      <p>{t('about.visits', { count: visits })}</p>
    </section>
  );
}