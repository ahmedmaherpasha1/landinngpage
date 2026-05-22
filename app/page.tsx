import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="text-center">
        {userId ? (
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Welcome back!</h1>
            <p className="mt-2 text-gray-600">You are signed in.</p>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Welcome</h1>
            <p className="mt-2 text-gray-600">Sign in or create an account to get started.</p>
          </div>
        )}
      </div>
    </main>
  );
}
