import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('authToken');
  const userRole = localStorage.getItem('userRole'); 
  
  if (token) {
    const requiredRole = route.data?.['role']; 
    if (!requiredRole || requiredRole === userRole) {
      return true; 
    } else {
     
      alert('Access denied. You do not have the required permissions.');
      window.location.href = '/unauthorized';
      return false;
    }
  } else {
 
    window.location.href = '/login';
    return false;
  }
};
