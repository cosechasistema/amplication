import { User } from "../user/User";

export type Proyect = {
  createdAt: Date;
  description: string | null;
  id: string;
  startDate: Date | null;
  updatedAt: Date;
  user?: User;
};
