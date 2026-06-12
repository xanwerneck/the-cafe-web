export interface AuthUser {
  username?: string;
  name?: string;
  email?: string;
  id?: string | number;
}

export interface AuthSession {
  token: string | null;
  user: AuthUser | null;
}

export function getStoredToken(): string | null;
export function getStoredUser(): AuthUser | null;
export function parseAuthResponse(data: unknown): AuthSession;
export function persistSession(session: AuthSession): void;
export function clearSession(): void;
export function readSession(): AuthSession;
