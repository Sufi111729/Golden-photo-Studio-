"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-8">
          We encountered an unexpected error.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-colors duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
