import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProyectCreateInput = {
  description?: string | null;
  startDate?: Date | null;
  user: UserWhereUniqueInput;
};
