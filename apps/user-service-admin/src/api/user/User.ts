import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  location: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
