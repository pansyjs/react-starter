import React from 'react';
interface OtherLoginProps {
  icon: React.ReactNode;
}

export const OtherLogin: React.FC<OtherLoginProps> = ({ icon }) => {
  return (
    <div>
      <span>
        {icon}
      </span>
    </div>
  )
}

export default OtherLogin;
