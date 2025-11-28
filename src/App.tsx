import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { AdminDashboard } from './components/AdminDashboard';
import { UserDashboard } from './components/UserDashboard';
import { DriverDashboard } from './components/DriverDashboard';

export type UserRole = 'admin' | 'user' | 'driver' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <>
      {currentUser.role === 'admin' && (
        <AdminDashboard user={currentUser} onLogout={handleLogout} />
      )}
      {currentUser.role === 'user' && (
        <UserDashboard user={currentUser} onLogout={handleLogout} />
      )}
      {currentUser.role === 'driver' && (
        <DriverDashboard user={currentUser} onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
