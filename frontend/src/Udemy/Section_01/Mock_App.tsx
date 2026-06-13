import { useState } from "react";

const API_BASE_URL = "http://127.0.0.1:8000/api";

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900">
      <section className="mx-auto max-w-2xl rounded-xl bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold tracking-wide text-slate-500">
          JobHunt Lite
        </p>

        <h1 className="mt-3 text-3xl font-bold">
          React から Laravel API を呼び出す
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          このボタンを押して、React 側から Laravel の
          <code className="mx-1 rounded bg-slate-100 px-1 py-0.5">
            /api/hello
          </code>
          にアクセスできるか確認します。
        </p>

        <button
          type="button"
          // onClick={checkApiConnection}
          className="mt-6 rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-95"
        >
          ここを押して疎通確認
        </button>

        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-500">API Response</p>

          <p className="mt-2 text-lg font-bold text-slate-900">
            {/* {message || "まだAPIを呼び出していません。"} */}
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
