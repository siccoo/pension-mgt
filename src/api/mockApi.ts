import Avatar from "../assets/avatar.png";

export const mockApi = {
  login: async (username: string, password: string) => {
    if (username && password) {
      return new Promise<{ username: string; role: "admin" | "member" }>((resolve) =>
        setTimeout(() => {
          resolve({ username, role: username === 'admin' ? 'admin' : 'member' });
        }, 500)
      );
    }
    return Promise.reject('Invalid credentials');
  },

  getMemberProfile: async () => {
    return Promise.resolve({
      profilePic: Avatar,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
    });
  },

  getContributions: async () => {
    return Promise.resolve([
      { month: 'Sep', amount: 205 },
      { month: 'Oct', amount: 190 },
      { month: 'Nov', amount: 210 },
      { month: 'Dec', amount: 180 },
      { month: 'Jan', amount: 200 },
    ]);
  },

  getStatementData: async () => {
    return Promise.resolve([
      { month: 'Sep', contribution: 205 },
      { month: 'Oct', contribution: 190 },
      { month: 'Nov', contribution: 210 },
      { month: 'Dec', contribution: 180 },
      { month: 'Jan', contribution: 200 },
    ]);
  },
};
