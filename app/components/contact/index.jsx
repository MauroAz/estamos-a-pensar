"use client";

export default function Contact() {
  // Reusable class strings — update once here to change all labels/inputs
  // This is a common pattern in real codebases to keep Tailwind DRY
  const labelClass =
    "block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300";

  const inputClass =
    "w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  return (
    <section className="min-h-screen scroll-mt-24 px-4 text-center bg-white dark:bg-gray-900 py-20">
      {/* Section heading */}
      <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12">
        Contact Me
      </h3>

      {/* ── CONTACT INFO ── */}
      {/* Replace with your real phone and email */}
      <div className="mb-8">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          📞 +351 000 000 000
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          ✉️ your@email.com
        </p>
      </div>

      {/* ── CONTACT FORM ── */}
      {/* max-w-xl centers and constrains the form width */}
      {/* text-left overrides the section's text-center for form labels */}
      <form className="max-w-xl mx-auto text-left grid grid-cols-1 gap-6">
        {/* Name field */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        {/* Email field */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className={inputClass}
          />
        </div>

        {/* Message field — textarea instead of input for multi-line */}
        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          {/* rows={5} sets the initial visible height of the textarea */}
          <textarea
            id="message"
            placeholder="Your message"
            rows={5}
            className={inputClass}
          />
        </div>

        {/* Submit button */}
        {/* w-full on mobile, auto width on larger screens */}
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
