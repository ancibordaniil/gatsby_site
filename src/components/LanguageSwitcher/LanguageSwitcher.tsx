import React from 'react';
import { useI18next, Link } from 'gatsby-plugin-react-i18next';
import * as styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher: React.FC = () => {
    const { originalPath, language } = useI18next();

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'ru', label: 'RU' },
    ];

    return (
        <div className={styles.languages}>
            {languages.map(({ code, label }, index) => (
                <React.Fragment key={code}>
                    <Link
                        to={originalPath}
                        language={code}
                        className={code === language ? styles.active : ''}
                        replace={true}
                        {...({} as any)} 
                        >
                        {label}
                    </Link>
                    {index < languages.length - 1 && (
                        <span className={styles.separator}>|</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
