import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

interface RoleBasedElementProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

const RoleBasedElement: React.FC<RoleBasedElementProps> = ({ allowedRoles, children }) => {
  const user = useSelector((state: RootState) => state.session.user);
  if (user && allowedRoles.includes(user.role)) {
    return <>{children}</>;
  }
  return null;
};

export default RoleBasedElement;
