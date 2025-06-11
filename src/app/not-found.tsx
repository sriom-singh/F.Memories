// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="text-center min-h-[99vh] bg-gradient-to-b from-slate-500 via-slate-300 to-slate-100 m-auto w-full flex flex-col justify-center">
        <span className="text-6xl py-2">😓</span>
      <h1 className="text-4xl text-primary font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-600">Sorry, we couldn’t find what you’re looking for.</p>
    </div>
  );
}
