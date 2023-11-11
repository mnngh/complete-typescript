interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: 'admin' | 'ta' | 'learner';
}

const Nur: Admin = {
  dbId: 22,
  githubToken: 'github',
  email: 'n@n.com',
  userId: 2211,
  role: 'admin',
  startTrial: () => {
    return 'trial started';
  },
  getCoupon: (name: 'nur', off: 10) => {
    return 10;
  },
};
