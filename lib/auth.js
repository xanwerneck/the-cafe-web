const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

export function getStoredToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/** Normalize token/user shapes from signin and signup responses. */
export function parseAuthResponse(data) {
  if (!data || typeof data !== "object") {
    return { token: null, user: null };
  }

  const token =
    data.token ??
    data.accessToken ??
    data.access_token ??
    data.jwt ??
    data.id_token ??
    data.data?.token ??
    data.data?.accessToken ??
    null;

  const user =
    data.user ??
    data.data?.user ??
    (data.username || data.name || data.email
      ? {
          username: data.username,
          name: data.name,
          email: data.email,
          id: data.id ?? data.userId,
        }
      : null);

  return { token, user };
}

export function persistSession({ token, user }) {
  if (typeof window === "undefined") return;
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}

export function clearSession() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function readSession() {
  return {
    token: getStoredToken(),
    user: getStoredUser(),
  };
}
