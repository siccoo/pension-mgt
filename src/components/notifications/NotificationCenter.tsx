import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Notification {
  id: number;
  message: string;
  read: boolean;
}

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: 'Contribution approved.', read: false },
    { id: 2, message: 'New benefit projection available.', read: false },
  ]);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <Link
        to="/"
        className="flex items-center text-blue-500 hover:underline mb-4"
      >
        <span className="mr-2">&#8592;</span> Back to Home
      </Link>
      <h3 className="text-xl font-bold mb-4">Notifications</h3>
      <ul>
        {notifications.map((notif) => (
          <li
            key={notif.id}
            className={`p-2 border-b cursor-pointer ${notif.read ? 'opacity-50' : ''}`}
            onClick={() => markAsRead(notif.id)}
          >
            {notif.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCenter;
