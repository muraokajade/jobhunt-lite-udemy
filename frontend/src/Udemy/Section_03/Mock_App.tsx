function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900">
      <section className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">JobHunt Lite</h1>
        <p className="mt-2 text-sm text-slate-600">
          Laravel API から取得した企業一覧を表示します。
        </p>

        <div className="mt-6">
          <h2 className="mb-4 text-xl font-bold">企業一覧</h2>
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b bg-slate-900 text-white">
                <th className="px-3 py-2">企業名</th>
                <th className="px-3 py-2">媒体</th>
                <th className="px-3 py-2">志望度</th>
                <th className="px-3 py-2">状況</th>
                <th className="px-3 py-2">応募日</th>
                <th className="px-3 py-2">メモ</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="px-3 py-2 font-semibold">モック株式会社</td>
                <td className="px-3 py-2">レバテック</td>
                <td className="px-3 py-2"> 3.0</td>
                <td className="px-3 py-2">面談日程調整中</td>
                <td className="px-3 py-2">2026-1-1</td>
                <td className="px-3 py-2">API叩いていません。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default App;
