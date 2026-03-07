"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllUsersForLeaderboard, getCurrentUser, seedLeaderboardIfEmpty } from "@/lib/auth";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type SortKey = "totalPoints" | "bestScore" | "averageScore";

interface LeaderboardEntry {
  id: string;
  name: string;
  quizzesTaken: number;
  totalPoints: number;
  bestScore: number;
  averageScore: number;
}

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [sortBy, setSortBy] = useState<SortKey>("totalPoints");
  const [search, setSearch] = useState("");
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  useEffect(() => {
    seedLeaderboardIfEmpty();
    const users = getAllUsersForLeaderboard();
    setEntries(users);
    const user = getCurrentUser();
    setCurrentUserId(user?.id ?? null);
  }, []);

  const sorted = [...entries]
    .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b[sortBy] - a[sortBy]);

  const getRankIcon = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  const getRankBg = (rank: number, isCurrentUser: boolean) => {
    if (isCurrentUser) return "bg-indigo-50 border-indigo-200";
    if (rank === 1) return "bg-yellow-50 border-yellow-200";
    if (rank === 2) return "bg-gray-50 border-gray-200";
    if (rank === 3) return "bg-orange-50 border-orange-200";
    return "bg-white border-gray-100";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">🏆</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Global Leaderboard
            </h1>
            <p className="text-gray-500">
              Rankings are based on real players. Take a quiz to appear here!
            </p>
          </div>

          {/* Podium — only show if 3+ players */}
          {sorted.length >= 3 && (
            <div className="flex items-end justify-center gap-4 mb-8">
              {/* 2nd Place */}
              <div className="text-center flex-1 max-w-[140px]">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600 mx-auto mb-2">
                  {sorted[1].name.charAt(0).toUpperCase()}
                </div>
                <div className="bg-gray-100 rounded-t-xl pt-4 pb-3 px-2">
                  <div className="text-2xl mb-1">🥈</div>
                  <p className="font-bold text-gray-900 text-sm truncate">{sorted[1].name}</p>
                  <p className="text-gray-600 font-bold">{sorted[1][sortBy]} pts</p>
                </div>
              </div>

              {/* 1st Place */}
              <div className="text-center flex-1 max-w-[160px]">
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center text-3xl font-bold text-yellow-700 mx-auto mb-2">
                  {sorted[0].name.charAt(0).toUpperCase()}
                </div>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-t-xl pt-4 pb-3 px-2">
                  <div className="text-3xl mb-1">🥇</div>
                  <p className="font-bold text-gray-900 text-sm truncate">{sorted[0].name}</p>
                  <p className="text-yellow-600 font-bold">{sorted[0][sortBy]} pts</p>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="text-center flex-1 max-w-[140px]">
                <div className="w-14 h-14 bg-orange-200 rounded-full flex items-center justify-center text-2xl font-bold text-orange-700 mx-auto mb-2">
                  {sorted[2].name.charAt(0).toUpperCase()}
                </div>
                <div className="bg-orange-50 rounded-t-xl pt-4 pb-3 px-2">
                  <div className="text-2xl mb-1">🥉</div>
                  <p className="font-bold text-gray-900 text-sm truncate">{sorted[2].name}</p>
                  <p className="text-orange-600 font-bold">{sorted[2][sortBy]} pts</p>
                </div>
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="flex-1 relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search players..."
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
              </div>

              {/* Sort */}
              <div className="flex gap-2">
                {(["totalPoints", "bestScore", "averageScore"] as SortKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSortBy(key)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                      sortBy === key
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {key === "totalPoints" ? "Total Pts" : key === "bestScore" ? "Best Score" : "Avg Score"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 px-4 py-3 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              <div className="col-span-1">Rank</div>
              <div className="col-span-4">Player</div>
              <div className="col-span-2 text-center">Quizzes</div>
              <div className="col-span-2 text-center">Best</div>
              <div className="col-span-2 text-center">Avg</div>
              <div className="col-span-1 text-center">Pts</div>
            </div>

            {sorted.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="text-5xl mb-4">🏏</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No players yet!</h3>
                <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                  The leaderboard is empty. Be the first to take a quiz and claim the top spot!
                </p>
                {currentUserId ? (
                  <Link
                    href="/quiz"
                    className="inline-block px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                    style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                  >
                    Take a Quiz Now →
                  </Link>
                ) : (
                  <Link
                    href="/register"
                    className="inline-block px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                    style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                  >
                    Register & Play →
                  </Link>
                )}
              </div>
            ) : (
              sorted.map((entry, idx) => {
                const rank = idx + 1;
                const isCurrentUser = entry.id === currentUserId;
                return (
                  <div
                    key={entry.id}
                    className={`grid grid-cols-12 px-4 py-3.5 border-b border-gray-50 items-center ${getRankBg(rank, isCurrentUser)}`}
                  >
                    <div className="col-span-1 font-bold text-sm">
                      {getRankIcon(rank)}
                    </div>
                    <div className="col-span-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-sm font-bold text-indigo-600 flex-shrink-0">
                          {entry.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-gray-900 text-sm truncate">
                            {entry.name}
                            {isCurrentUser && (
                              <span className="ml-1 text-xs text-indigo-500">(You)</span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 text-center text-sm text-gray-600">
                      {entry.quizzesTaken}
                    </div>
                    <div className="col-span-2 text-center text-sm font-medium text-gray-900">
                      {entry.bestScore}/30
                    </div>
                    <div className="col-span-2 text-center text-sm text-gray-600">
                      {entry.averageScore}/30
                    </div>
                    <div className="col-span-1 text-center">
                      <span className="text-sm font-bold text-indigo-600">{entry.totalPoints}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            {currentUserId ? (
              <Link
                href="/quiz"
                className="inline-block px-8 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
              >
                Play Quiz to Improve Your Rank →
              </Link>
            ) : (
              <div>
                <p className="text-gray-500 mb-4">Register and play a quiz to appear on the leaderboard!</p>
                <Link
                  href="/register"
                  className="inline-block px-8 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                >
                  Join the Competition →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
