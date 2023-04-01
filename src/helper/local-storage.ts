import { isClient } from "./../configs/enviroments";

const USER = "user";

type TStoredUser = {
  access_token?: string;
  data?: {
    email?: string;
    name?: string;
    avatar?: string;
  };
};

export const getStoredUser = <T = TStoredUser>(): T | null => {
  if (!isClient) return null;
  const storedUser =
    typeof window !== "undefined" ? localStorage.getItem(USER) : null;

  return storedUser ? (JSON.parse(storedUser) as T) : null;
};

export const setStorage = <T>(key: string, data: T) => {
  if (!isClient) return;
  localStorage.setItem(key, JSON.stringify(data));
};

export const clearStorage = (key: string) => {
  if (!isClient) return;
  localStorage.removeItem(key);
};

export const getAccessToken = () => {
  if (!isClient) return null;
  const accessToken = getStoredUser<TStoredUser>()?.access_token || null;

  return accessToken ?? null;
};
