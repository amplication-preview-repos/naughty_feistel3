import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  location?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
