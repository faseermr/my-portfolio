"use client";

import { Mail, User, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // 👉 Later you can connect this to an API / email service
    setTimeout(() => {
      alert("Message sent successfully!");
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="max-w-3xl mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">Contact Me</h1>
      <p className="text-center text-gray-500 mt-4">Have a project or question? Let’s talk.</p>

      <form onSubmit={handleSubmit} className="mt-12 space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl border">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <div className="flex items-center gap-2 border rounded-lg px-3">
            <User size={18} className="text-gray-400" />
            <input type="text" required placeholder="Your name" className="w-full py-3 bg-transparent outline-none" />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <div className="flex items-center gap-2 border rounded-lg px-3">
            <Mail size={18} className="text-gray-400" />
            <input type="email" required placeholder="you@example.com" className="w-full py-3 bg-transparent outline-none" />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <div className="flex items-start gap-2 border rounded-lg px-3">
            <MessageSquare size={18} className="text-gray-400 mt-3" />
            <textarea required rows={5} placeholder="Write your message..." className="w-full py-3 bg-transparent outline-none resize-none" />
          </div>
        </div>

        {/* Submit */}
        <button type="submit" disabled={loading} className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition disabled:opacity-60">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
