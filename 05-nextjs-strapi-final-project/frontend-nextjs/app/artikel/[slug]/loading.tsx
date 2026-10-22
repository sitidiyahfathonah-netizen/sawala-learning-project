
export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
        <p className="font-medium text-slate-600">
          Memuat artikel...
        </p>
      </div>
    </main>
  );
}
