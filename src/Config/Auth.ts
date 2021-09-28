import { auth, db } from "./Config";
import * as type from "../type";
export const getUserInfo = async (uid: string): Promise<type.UserInfo> => {
  const user = await db.collection("SignedUpUsersData").doc(uid).get();
  return user.data() as type.UserInfo;
};

export const getCurrentUserUid = (): string => {
  if (auth.currentUser) {
    const user = auth.currentUser.uid;
    return user;
  }
  return "not login";
};
