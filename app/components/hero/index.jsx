export default function Hero() {
  return (
    <section className="min-h-screen pt-24 flex flex-col md:flex-row items-center justify-between dark:bg-gray-900 px-6 md:px-20">
      {/* ── LEFT SIDE ── text + call-to-action buttons */}
      <div className="max-w-lg space-y-4">
        {/* Greeting */}
        <p className="text-lg">Hello, I'm</p>

        {/* Your name — update "Your Name" to your actual name */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Mauro Az
        </h1>

        {/* Your title/profession */}
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Data Analyst / Frontend Dev / Facilitator / ESL Teacher
        </p>

        {/* Call-to-action buttons */}
        <div className="flex gap-4">
          {/* Scrolls to contact section */}
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
          >
            Let's Connect
          </a>

          {/* Links to your CV — update href to your actual CV file path */}
          <a
            href="/images/cv.pdf"
            className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* ── RIGHT SIDE ── profile image + floating tech icons */}
      {/* relative makes this a positioning context for the absolute icons */}
      <div className="relative mt-10 md:mt-0">
        {/* Profile photo — replace profile.jpg with your actual image filename */}
        <img
          src="/images/profile.png"
          alt="Profile photo"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />

        {/* Floating icon — top right of image */}
        {/* absolute positions it relative to the parent div above */}
        <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
          <img
            src="/images/icon1.png"
            alt="Tech icon 1"
            width={40}
            height={40}
          />
        </div>

        {/* Floating icon — bottom left of image */}
        <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
          <img
            src="/images/icon2.png"
            alt="Tech icon 2"
            width={40}
            height={40}
          />
        </div>
      </div>
    </section>
  );
}
