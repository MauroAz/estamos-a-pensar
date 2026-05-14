// ProjectCard receives a single project object as a prop
// All project data (image, title, description, type) comes from projects.js
export default function ProjectCard({ project }) {
  return (
    // overflow-hidden prevents the image from breaking out of rounded corners
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* ── IMAGE AREA ── relative so the type badge can sit on top */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        {/* Type badge — absolute positions it over the image */}
        {/* top-2 right-2 places it in the top-right corner */}
        <span className="absolute top-2 right-2 text-xs font-semibold text-blue-600 dark:text-white bg-blue-100 dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-400 px-3 py-1 rounded-full">
          {project.type}
        </span>
      </div>

      {/* ── TEXT AREA ── title and description below the image */}
      <div className="p-4 text-left">
        <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {project.description}
        </p>
      </div>
    </div>
  );
}
