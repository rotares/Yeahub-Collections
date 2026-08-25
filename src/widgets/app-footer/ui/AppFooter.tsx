import styles from './AppFooter.module.css';

export const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topSection}>
            <h2 className={styles.logo}>Yeahub</h2>
            <p className={styles.tagline}>Выбери, каким будет IT завтра, вместе с нами</p>
            <p className={styles.description}>
              Yeahub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш
              исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
              ознакомления в Figma.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.bottomSection}>
            <div className={styles.copyrightGroup}>
              <span>© 2026 YeaHub</span>
              <span className={styles.link}>Документы</span>
            </div>

            <div className={styles.socialGroup}>
              <span className={styles.socialText}>Ищите нас и в других соцсетях @yeahub_it</span>
              <div className={styles.socialIcons}>
                <a href="https://figma.com" target="_blank" rel="noreferrer" aria-label="Figma">
                  <img src="/src/shared/assets/figma.png" alt="Figma" />
                </a>
                <a href="https://t.me" target="_blank" rel="noreferrer" aria-label="Telegram">
                  <img src="/src/shared/assets/tg.png" alt="Telegram" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <img src="/src/shared/assets/yt.png" alt="YouTube" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
                  <img src="/src/shared/assets/tiktok.png" alt="TikTok" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <img src="/src/shared/assets/github.png" alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
