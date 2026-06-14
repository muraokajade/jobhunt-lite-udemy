{
  isModalOpen && selectedCompany && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">会社詳細</p>
            <h2 className="text-xl font-bold text-slate-900">
              {selectedCompany.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={handleCloseModal}
            className="rounded-xl border px-4 py-2 text-sm font-semibold"
          >
            閉じる
          </button>
        </div>

        <div className="space-y-6 p-6 text-sm">
          <section className="rounded-2xl border bg-slate-50 p-5">
            <h3 className="mb-4 text-base font-bold">基本情報</h3>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  企業名
                </label>
                <input
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, name: e.target.value })
                  }
                  className="h-11 w-full rounded-xl border px-3"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">媒体</label>
                <input
                  value={editForm.media}
                  onChange={(e) =>
                    setEditForm({ ...editForm, media: e.target.value })
                  }
                  className="h-11 w-full rounded-xl border px-3"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">
                  応募日
                </label>
                <input
                  type="date"
                  value={editForm.applied_date}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      applied_date: e.target.value,
                    })
                  }
                  className="h-11 w-full rounded-xl border px-3"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border bg-white p-5">
            <h3 className="mb-4 text-base font-bold">選考情報</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  志望度
                </label>
                <select
                  value={editForm.priority}
                  onChange={(e) =>
                    setEditForm({ ...editForm, priority: e.target.value })
                  }
                  className="h-11 w-full rounded-xl border bg-white px-3"
                >
                  {priorityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">状況</label>
                <select
                  value={editForm.status}
                  onChange={(e) =>
                    setEditForm({ ...editForm, status: e.target.value })
                  }
                  className="h-11 w-full rounded-xl border bg-white px-3"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">
                  面談日
                </label>
                <input
                  type="datetime-local"
                  value={editForm.interview_date}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      interview_date: e.target.value,
                    })
                  }
                  className="h-11 w-full rounded-xl border px-3"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">
                  次アクション
                </label>
                <input
                  value={editForm.next_action}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      next_action: e.target.value,
                    })
                  }
                  className="h-11 w-full rounded-xl border px-3"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border bg-slate-50 p-5">
            <h3 className="mb-4 text-base font-bold">URL情報</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  求人URL
                </label>
                <input
                  value={editForm.job_url}
                  onChange={(e) =>
                    setEditForm({ ...editForm, job_url: e.target.value })
                  }
                  className="h-11 w-full rounded-xl border px-3"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">
                  面談URL
                </label>
                <input
                  value={editForm.interview_url}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      interview_url: e.target.value,
                    })
                  }
                  className="h-11 w-full rounded-xl border px-3"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border bg-white p-5">
            <h3 className="mb-4 text-base font-bold">選考結果</h3>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  書類選考
                </label>
                <select
                  value={editForm.document_result}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      document_result: e.target.value,
                    })
                  }
                  className="h-11 w-full rounded-xl border bg-white px-3"
                >
                  {/* マップ */}
                  {resultOptions.map((result) => (
                    <option key={result} value={result}>
                      {result}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">
                  1次面接
                </label>
                <select
                  value={editForm.first_interview_result}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      first_interview_result: e.target.value,
                    })
                  }
                  className="h-11 w-full rounded-xl border bg-white px-3"
                >
                  {resultOptions.map((result) => (
                    <option key={result} value={result}>
                      {result}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">
                  2次面接
                </label>
                <select
                  value={editForm.second_interview_result}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      second_interview_result: e.target.value,
                    })
                  }
                  className="h-11 w-full rounded-xl border bg-white px-3"
                >
                  {resultOptions.map((result) => (
                    <option key={result} value={result}>
                      {result}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">
                  最終結果
                </label>
                <select
                  value={editForm.final_result}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      final_result: e.target.value,
                    })
                  }
                  className="h-11 w-full rounded-xl border bg-white px-3"
                >
                  {resultOptions.map((result) => (
                    <option key={result} value={result}>
                      {result}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">
                  落選段階
                </label>
                <select
                  value={editForm.rejection_stage}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      rejection_stage: e.target.value,
                    })
                  }
                  className="h-11 w-full rounded-xl border bg-white px-3"
                >
                  {rejectionStageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border bg-slate-50 p-5">
            <h3 className="mb-4 text-base font-bold">メモ</h3>

            <textarea
              value={editForm.memo}
              onChange={(e) =>
                setEditForm({ ...editForm, memo: e.target.value })
              }
              className="min-h-28 w-full rounded-xl border px-3 py-2"
            />
          </section>

          <div className="flex justify-end gap-3 border-t pt-5">
            <button
              type="button"
              onClick={handleCloseModal}
              className="rounded-xl border px-5 py-2 text-sm font-semibold"
            >
              キャンセル
            </button>

            <button
              type="button"
              onClick={handleUpdateCompany}
              className="rounded-xl bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
            >
              更新
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
