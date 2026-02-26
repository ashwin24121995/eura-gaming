"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCurrentUser, logoutUser, updateUserProfile, User } from "@/lib/auth";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Tab = "overview" | "history" | "settings";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [loading, setLoading] = useState(true);
  const [editName, setEditName] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editConfirm, setEditConfirm] = useState("");
  const [saveMsg, setSaveMsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push("/login");
      return;
    }
    setUser(currentUser);
    setEditName(currentUser.name);
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    logoutUser();
    router.push("/");
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const updates: { name?: string; password?: string } = {};
    if (editName && editName !== user.name) updates.name = editName;
    if (editPassword) {
      if (editPassword !== editConfirm) {
        setSaveMsg("Passwords do not match.");
        return;
      }
      if (editPassword.length < 6) {
        setSaveMsg("Password must be at least 6 characters.");
        return;
      }
      updates.password = editPassword;
    }

    if (Object.keys(updates).length === 0) {
      setSaveMsg("No changes to save.");
      return;
    }

    const result = updateUserProfile(user.id, updates);
    setSaveMsg(result.message);

    if (result.success) {
      const updatedUser = getCurrentUser();
      if (updatedUser) setUser(updatedUser);
      setEditPassword("");
      setEditConfirm("");
    }

    setTimeout(() => setSaveMsg(""), 3000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-spin">🏏</div>
          <p className="text-gray-500">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const memberSince = new Date(user.createdAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-indigo-200">{user.email}</p>
                <p className="text-indigo-200 text-sm">Member since {memberSince}</p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/quiz"
                  className="px-5 py-2.5 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors"
                >
                  🏏 Start New Quiz
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-5 py-2.5 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Quizzes Taken", value: user.quizzesTaken, icon: "📝" },
              { label: "Average Score", value: `${user.averageScore}/30`, icon: "📊" },
              { label: "Best Score", value: `${user.bestScore}/30`, icon: "🏆" },
              { label: "Total Points", value: user.totalPoints, icon: "⭐" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex border-b border-gray-100">
              {(["overview", "history", "settings"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 text-sm font-semibold capitalize transition-colors ${
                    activeTab === tab
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab === "overview" ? "📋 Overview" : tab === "history" ? "📜 Quiz History" : "⚙️ Settings"}
                </button>
              ))}
            </div>

            <div className="p-6">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Performance Overview</h2>
                  {user.quizzesTaken === 0 ? (
                    <div className="text-center py-12">
                      <div className="text-5xl mb-4">🏏</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">No quizzes yet!</h3>
                      <p className="text-gray-500 mb-6">
                        Take your first quiz and start climbing the leaderboard.
                      </p>
                      <Link
                        href="/quiz"
                        className="inline-block px-6 py-3 text-white font-semibold rounded-xl"
                        style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                      >
                        Start Your First Quiz
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-indigo-50 rounded-xl p-4">
                        <p className="text-sm text-indigo-600 font-medium mb-1">Score Progress</p>
                        <div className="w-full bg-indigo-100 rounded-full h-3">
                          <div
                            className="bg-indigo-600 h-3 rounded-full transition-all"
                            style={{ width: `${(user.averageScore / 30) * 100}%` }}
                          />
                        </div>
                        <p className="text-xs text-indigo-500 mt-1">
                          Average: {user.averageScore}/30 ({Math.round((user.averageScore / 30) * 100)}%)
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 rounded-xl p-4">
                          <p className="text-sm text-green-600 font-medium">Best Performance</p>
                          <p className="text-2xl font-bold text-green-700">{user.bestScore}/30</p>
                        </div>
                        <div className="bg-yellow-50 rounded-xl p-4">
                          <p className="text-sm text-yellow-600 font-medium">Total Points Earned</p>
                          <p className="text-2xl font-bold text-yellow-700">{user.totalPoints}</p>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-4">
                        <Link
                          href="/quiz"
                          className="flex-1 text-center py-3 text-white font-semibold rounded-xl"
                          style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                        >
                          Play Again
                        </Link>
                        <Link
                          href="/leaderboard"
                          className="flex-1 text-center py-3 text-indigo-600 font-semibold rounded-xl border-2 border-indigo-200 hover:bg-indigo-50"
                        >
                          View Leaderboard
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* History Tab */}
              {activeTab === "history" && (
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Quiz History</h2>
                  {user.quizHistory.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="text-5xl mb-4">📜</div>
                      <p className="text-gray-500">No quiz history yet. Start playing to see your results here!</p>
                      <Link
                        href="/quiz"
                        className="inline-block mt-4 px-6 py-3 text-white font-semibold rounded-xl"
                        style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                      >
                        Take a Quiz
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {user.quizHistory.map((result, idx) => (
                        <div
                          key={result.id}
                          className="flex items-center justify-between bg-gray-50 rounded-xl p-4"
                        >
                          <div>
                            <p className="font-semibold text-gray-900">Quiz #{user.quizHistory.length - idx}</p>
                            <p className="text-sm text-gray-500">
                              {new Date(result.date).toLocaleDateString("en-IN", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                          <div className="text-right">
                            <div
                              className={`text-xl font-bold ${
                                result.score >= 25
                                  ? "text-green-600"
                                  : result.score >= 15
                                  ? "text-yellow-600"
                                  : "text-red-500"
                              }`}
                            >
                              {result.score}/30
                            </div>
                            <div className="text-xs text-gray-500">
                              {Math.round((result.score / 30) * 100)}% correct
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Account Settings</h2>
                  <form onSubmit={handleSaveProfile} className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={user.email}
                        disabled
                        className="w-full px-4 py-3 border border-gray-100 rounded-xl bg-gray-50 text-gray-400 cursor-not-allowed"
                      />
                      <p className="text-xs text-gray-400 mt-1">Email cannot be changed.</p>
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                      <h3 className="font-semibold text-gray-700 mb-3">Change Password</h3>
                      <div className="space-y-3">
                        <input
                          type="password"
                          value={editPassword}
                          onChange={(e) => setEditPassword(e.target.value)}
                          placeholder="New password (leave blank to keep current)"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                          type="password"
                          value={editConfirm}
                          onChange={(e) => setEditConfirm(e.target.value)}
                          placeholder="Confirm new password"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>

                    {saveMsg && (
                      <div
                        className={`px-4 py-3 rounded-lg text-sm ${
                          saveMsg.includes("success") || saveMsg.includes("updated")
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {saveMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                      style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
