import React from 'react';
import { css } from '@emotion/react';

const useStyles = () => {
  return {
    container: css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: 40,
      width: 40,
      border: '1px solid #D4D8DD',
      borderRadius: '50%',
    }),
    icon: css({
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: 18,
      verticalAlign: 'middle',
      cursor: 'pointer',
    })
  }
}

interface OtherLoginProps {
  icon: React.ReactNode;
}

export const OtherLogin: React.FC<OtherLoginProps> = ({ icon }) => {
  const styles = useStyles();
  return (
    <div css={styles.container}>
      <span css={styles.icon}>
        {icon}
      </span>
    </div>
  )
}

export default OtherLogin;
