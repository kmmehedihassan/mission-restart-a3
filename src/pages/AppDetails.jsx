import { useParams, useNavigate } from "react-router-dom";
import apps from "../data/apps.json";
import { useInstall } from "../context/InstallContext";
import { FaDownload, FaStar } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import toast from "react-hot-toast";
import AppNotFound from "../components/AppNotFound";

const MAX_RATING_SCALE_LABELS = ["0", "3000", "6000", "9000", "12000"];

export default function AppDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { installApp, installedApps } = useInstall();

  const app = apps.find((item) => item.id === Number(id));

  if (!app) return <AppNotFound />;

  const isInstalled = installedApps.some((i) => i.id === app.id);
  const maxRatingCount = Math.max(...app.ratings.map((r) => r.count));

  const handleInstall = () => {
    installApp(app);
    toast.success("App Installed Successfully");
    navigate("/my-installations");
  };

  const installBtnClass = isInstalled
    ? "px-8 py-3 rounded-lg font-semibold bg-gray-300 text-gray-500 cursor-not-allowed"
    : "px-8 py-3 rounded-lg font-semibold bg-green-500 hover:bg-green-600 text-white shadow-md transition-colors duration-200";

  // Render multi-paragraph descriptions (split on double newlines)
  const descriptionParagraphs = app.description
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen w-11/12 mx-auto py-20 space-y-12">

      {/* App overview: image + info */}
      <section className="flex flex-col lg:flex-row gap-12 items-center" aria-label="App overview">

        {/* App thumbnail */}
        <div className="flex-1 flex justify-center">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-sm">
            <img
              src={app.image}
              alt={`${app.title} app icon`}
              className="rounded-xl w-full object-contain"
            />
          </div>
        </div>

        {/* App metadata */}
        <div className="flex-1 space-y-6">

          <div className="space-y-1">
            <h1 className="text-4xl font-bold text-gray-800">{app.title}</h1>
            <p className="text-gray-500">
              Developed by{" "}
              <span className="text-indigo-600 font-semibold hover:underline cursor-pointer">
                {app.companyName}
              </span>
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Stats row */}
          <div className="flex flex-wrap gap-10 items-center" aria-label="App statistics">

            <div className="flex flex-col gap-2">
              <FaDownload className="text-green-500 text-2xl" aria-hidden="true" />
              <div>
                <p className="text-gray-500 text-sm">Downloads</p>
                <p className="text-xl font-bold text-gray-800">{app.downloads.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <FaStar className="text-orange-400 text-2xl" aria-hidden="true" />
              <div>
                <p className="text-gray-500 text-sm">Average Ratings</p>
                <p className="text-xl font-bold text-gray-800">{app.ratingAvg}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <MdReviews className="text-purple-500 text-2xl" aria-hidden="true" />
              <div>
                <p className="text-gray-500 text-sm">Total Reviews</p>
                <p className="text-xl font-bold text-gray-800">{app.reviews.toLocaleString()}</p>
              </div>
            </div>

          </div>

          {/* Install button */}
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            aria-label={isInstalled ? "App already installed" : `Install ${app.title}`}
            className={installBtnClass}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>

        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Ratings chart */}
      <section aria-label="User ratings breakdown">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ratings</h2>

        <div className="space-y-4">
          {app.ratings.map((ratingItem) => {
            const barWidthPercent = (ratingItem.count / maxRatingCount) * 100;

            return (
              <div key={ratingItem.name} className="flex items-center gap-4">
                <span className="w-12 text-gray-600 text-sm shrink-0">
                  {ratingItem.name}
                </span>
                <div className="flex-1 h-4 bg-gray-100 rounded overflow-hidden">
                  <div
                    role="progressbar"
                    aria-valuenow={ratingItem.count}
                    aria-valuemin={0}
                    aria-valuemax={maxRatingCount}
                    aria-label={`${ratingItem.name}: ${ratingItem.count} reviews`}
                    className="h-full bg-orange-500 rounded transition-all duration-500"
                    style={{ width: `${barWidthPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Scale labels */}
        <div className="mt-4 flex justify-between text-xs text-gray-400 pl-16">
          {MAX_RATING_SCALE_LABELS.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Description */}
      <section aria-label="App description">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">Description</h2>
        <div className="space-y-4">
          {descriptionParagraphs.map((paragraph, idx) => (
            <p key={idx} className="text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

    </main>
  );
}