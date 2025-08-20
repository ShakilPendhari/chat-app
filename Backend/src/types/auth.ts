import type { DecodedIdToken } from "firebase-admin/auth";

export type CurrentUser = {
  uid: string;
  email?: string;
  name?: string;
  picture?: string;
  claims: DecodedIdToken;
};
