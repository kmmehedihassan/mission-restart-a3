export default function Loader() {
    return (
        <div
            role="status"
            aria-label="Loading content"
            className="flex justify-center items-center py-20"
        >
            <div
                className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"
                aria-hidden="true"
            />
            <span className="sr-only">Loading…</span>
        </div>
    );
}
