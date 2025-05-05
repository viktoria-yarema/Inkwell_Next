export type User = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  avatarUrl?: string;
};

export type UpdateUser = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
};
