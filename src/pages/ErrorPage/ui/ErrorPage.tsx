import { PageLayout } from '@/shared/ui/PageLayout';
import { Card } from '@/shared/ui/Card';
import styles from './ErrorPage.module.css';
import { NavLinkButton } from '@/shared/ui/NavLinkButton';
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
