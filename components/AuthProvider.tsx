"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  clearSession,
  parseAuthResponse,
  persistSession,
  readSession,
  type AuthSession,
  type AuthUser,
} from "@/lib/auth";

type AuthContextValue = {
  token: string | null;
  user: AuthUser | null;
  ready: boolean;
  isAuthenticated: boolean;
  setSessionFromResponse: (data: unknown) => string | null;
  signInWithCredentials: (credentials: {
    email: string;
    password: string;
  }) => Promise<unknown>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const session = readSession();
    setToken(session.token);
    setUser(session.user);
    setReady(true);
  }, []);

  const applySession = useCallback((session: AuthSession) => {
    const nextToken = session.token ?? null;
    const nextUser = session.user ?? null;
    persistSession({ token: nextToken, user: nextUser });
    setToken(nextToken);
    setUser(nextUser);
    return nextToken;
  }, []);

  const setSessionFromResponse = useCallback(
    (data: unknown) => {
      const parsed = parseAuthResponse(data);
      return applySession(parsed);
    },
    [applySession]
  );

  const signInWithCredentials = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Erro ao fazer login");
      }
      const savedToken = setSessionFromResponse(data);
      if (!savedToken) {
        throw new Error("Sessão inválida: token não recebido do servidor");
      }
      return data;
    },
    [setSessionFromResponse]
  );

  const logout = useCallback(() => {
    clearSession();
    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      token,
      user,
      ready,
      isAuthenticated: Boolean(token),
      setSessionFromResponse,
      signInWithCredentials,
      logout,
    }),
    [token, user, ready, setSessionFromResponse, signInWithCredentials, logout]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
