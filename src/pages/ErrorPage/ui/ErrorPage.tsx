import { Card, NavLinkButton, PageLayout } from '@/shared/ui';
import styles from './ErrorPage.module.css';
export const ErrorPage = () => {
  return (
    <PageLayout>
      <PageLayout.Content>
        <Card className={styles.content}>
          <span className={styles.text}>Произошла ошибка</span>
          <NavLinkButton to={'/collections'}>На главную</NavLinkButton>
        </Card>
      </PageLayout.Content>
    </PageLayout>
  );
};
