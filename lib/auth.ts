"use client";

// Auth utility — stores users in localStorage (client-side)
// Suitable for Vercel static deployment. Replace with a proper backend in production.

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  quizzesTaken: number;
  totalPoints: number;
  bestScore: number;
  averageScore: number;
  quizHistory: QuizResult[];
}

export interface QuizResult {
  id: string;
  date: string;
  score: number;
  totalQuestions: number;
  timeTaken: number;
  answers: number[];
}

const USERS_KEY = "eura_users";
const SESSION_KEY = "eura_session";

function getUsers(): User[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(USERS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveUsers(users: User[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser(
  name: string,
  email: string,
  password: string
): { success: boolean; message: string } {
  const users = getUsers();
  const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    return { success: false, message: "An account with this email already exists." };
  }

  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
    quizzesTaken: 0,
    totalPoints: 0,
    bestScore: 0,
    averageScore: 0,
    quizHistory: [],
  };

  users.push(newUser);
  saveUsers(users);
  return { success: true, message: "Account created successfully!" };
}

export function loginUser(
  email: string,
  password: string
): { success: boolean; message: string; user?: User } {
  const users = getUsers();
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );

  if (!user) {
    return { success: false, message: "Invalid email or password." };
  }

  if (typeof window !== "undefined") {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id, email: user.email }));
  }

  return { success: true, message: "Login successful!", user };
}

export function logoutUser(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(SESSION_KEY);
  }
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const session = sessionStorage.getItem(SESSION_KEY);
    if (!session) return null;
    const { id } = JSON.parse(session);
    const users = getUsers();
    return users.find((u) => u.id === id) || null;
  } catch {
    return null;
  }
}

export function isLoggedIn(): boolean {
  return getCurrentUser() !== null;
}

export function updateUserStats(userId: string, result: QuizResult): void {
  const users = getUsers();
  const idx = users.findIndex((u) => u.id === userId);
  if (idx === -1) return;

  const user = users[idx];
  user.quizzesTaken += 1;
  user.totalPoints += result.score;
  user.quizHistory.unshift(result);
  if (result.score > user.bestScore) user.bestScore = result.score;
  user.averageScore = Math.round(user.totalPoints / user.quizzesTaken);

  users[idx] = user;
  saveUsers(users);
}

// Seed leaderboard with testimonial users so it matches the About page testimonials.
// Scores assigned by the site owner: Sunita=10, Rohan=18, Priya=22, Arjun=19 (wait — see mapping below)
// Owner-specified order of scores: 10, 18, 22, 19, 27
// Mapped to testimonial names in order they appear:
//   Arjun Mehta → 10, Priya Sharma → 18, Vikram Nair → 22, Sunita Yadav → 19, Rohan Gupta → 27
const SEED_KEY = "eura_leaderboard_seeded_v1";

export function seedLeaderboardIfEmpty(): void {
  if (typeof window === "undefined") return;
  if (localStorage.getItem(SEED_KEY)) return; // already seeded

  const users = getUsers();
  // Only seed if no real users have played yet
  const playedUsers = users.filter((u) => u.quizzesTaken > 0);
  if (playedUsers.length > 0) {
    localStorage.setItem(SEED_KEY, "1");
    return;
  }

  const seedUsers: User[] = [
    {
      id: "seed_arjun",
      name: "Arjun Mehta",
      email: "arjun.mehta@seed.eura",
      password: "",
      createdAt: new Date("2026-02-10").toISOString(),
      quizzesTaken: 3,
      totalPoints: 10,
      bestScore: 10,
      averageScore: 10,
      quizHistory: [],
    },
    {
      id: "seed_priya",
      name: "Priya Sharma",
      email: "priya.sharma@seed.eura",
      password: "",
      createdAt: new Date("2026-02-12").toISOString(),
      quizzesTaken: 2,
      totalPoints: 18,
      bestScore: 18,
      averageScore: 18,
      quizHistory: [],
    },
    {
      id: "seed_vikram",
      name: "Vikram Nair",
      email: "vikram.nair@seed.eura",
      password: "",
      createdAt: new Date("2026-02-14").toISOString(),
      quizzesTaken: 4,
      totalPoints: 22,
      bestScore: 22,
      averageScore: 22,
      quizHistory: [],
    },
    {
      id: "seed_sunita",
      name: "Sunita Yadav",
      email: "sunita.yadav@seed.eura",
      password: "",
      createdAt: new Date("2026-02-16").toISOString(),
      quizzesTaken: 2,
      totalPoints: 19,
      bestScore: 19,
      averageScore: 19,
      quizHistory: [],
    },
    {
      id: "seed_rohan",
      name: "Rohan Gupta",
      email: "rohan.gupta@seed.eura",
      password: "",
      createdAt: new Date("2026-02-18").toISOString(),
      quizzesTaken: 5,
      totalPoints: 27,
      bestScore: 27,
      averageScore: 27,
      quizHistory: [],
    },
  ];

  // Merge seed users with existing users (registered but not played)
  const existingIds = new Set(users.map((u) => u.id));
  const toAdd = seedUsers.filter((s) => !existingIds.has(s.id));
  saveUsers([...users, ...toAdd]);
  localStorage.setItem(SEED_KEY, "1");
}

export function getAllUsersForLeaderboard(): Array<{
  id: string;
  name: string;
  quizzesTaken: number;
  totalPoints: number;
  bestScore: number;
  averageScore: number;
}> {
  const users = getUsers();
  // Only return users who have actually played at least one quiz
  return users
    .filter((u) => u.quizzesTaken > 0)
    .map((u) => ({
      id: u.id,
      name: u.name,
      quizzesTaken: u.quizzesTaken,
      totalPoints: u.totalPoints,
      bestScore: u.bestScore,
      averageScore: u.averageScore,
    }));
}

export function updateUserProfile(
  userId: string,
  updates: { name?: string; password?: string }
): { success: boolean; message: string } {
  const users = getUsers();
  const idx = users.findIndex((u) => u.id === userId);
  if (idx === -1) return { success: false, message: "User not found." };

  if (updates.name) users[idx].name = updates.name;
  if (updates.password) users[idx].password = updates.password;

  saveUsers(users);
  return { success: true, message: "Profile updated successfully!" };
}
