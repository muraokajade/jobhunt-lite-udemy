<section className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow-sm mb-4">
  <form id="register" className="mt-6 rounded-lg p-4">
    <h2 className="mb-4 text-xl font-bold">企業登録</h2>

    <div className="grid gap-4 md:grid-cols-2">
      <div>
        <label className="mb-1 block text-sm font-semibold">企業名</label>
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="例：株式会社サンプル"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold">媒体</label>
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="例：Green"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold">志望度</label>

        <select className="w-full rounded border bg-white px-3 py-2">
          <option value="1.0">1.0 なんとなく（練習用）</option>
          <option value="1.5">1.5 低め</option>
          <option value="2.0">2.0 少し気になる</option>
          <option value="2.5">2.5 検討中</option>
          <option value="3.0">3.0 普通</option>
          <option value="3.5">3.5 やや高め</option>
          <option value="4.0">4.0 かなり興味あり</option>
          <option value="4.5">4.5 本命</option>
          <option value="5.0">5.0 大本命</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold">状況</label>
        <select className="w-full rounded border bg-white px-3 py-2"></select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold">求人URL</label>
        <input
          type="url"
          className="w-full rounded border px-3 py-2"
          placeholder="例：https://example.com/jobs/123"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold">応募日</label>
        <input type="date" className="w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold">メモ</label>
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="例：React経験が活かせそう"
        />
      </div>
    </div>

    <button
      type="button"
      className="mt-4 rounded bg-slate-900 px-4 py-2 font-semibold text-white"
    >
      保存
    </button>
  </form>
</section>;
