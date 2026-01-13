export function AppPreview() {
  return (
    <section id="preview" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            精心设计的界面
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            简洁优雅的设计，让每一次操作都成为享受。
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-center items-end gap-4 md:gap-8">
            {/* Left Phone */}
            <div className="hidden md:block w-48 lg:w-56 transform -rotate-6 translate-y-8">
              <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19]">
                  <div className="h-full bg-gradient-to-b from-blue-50 to-white p-4">
                    <div className="w-16 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-4 h-4 bg-blue-500 rounded"></div>
                          <div className="h-2 bg-gray-200 rounded w-20"></div>
                        </div>
                        <div className="h-2 bg-gray-100 rounded w-full mb-1"></div>
                        <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-4 h-4 bg-green-500 rounded"></div>
                          <div className="h-2 bg-gray-200 rounded w-16"></div>
                        </div>
                        <div className="h-2 bg-gray-100 rounded w-full mb-1"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-4 h-4 bg-purple-500 rounded"></div>
                          <div className="h-2 bg-gray-200 rounded w-24"></div>
                        </div>
                        <div className="h-2 bg-gray-100 rounded w-full mb-1"></div>
                        <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Phone (Main) */}
            <div className="w-64 md:w-72 lg:w-80 z-10">
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19]">
                  <div className="h-full bg-gradient-to-b from-blue-50 to-white">
                    <div className="p-4">
                      <div className="w-20 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>
                      <div className="text-center mb-4">
                        <div className="text-xs text-gray-500 mb-1">今天</div>
                        <div className="text-lg font-semibold text-gray-900">1月13日 周一</div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-blue-500 text-white rounded-xl p-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs opacity-80">09:00</span>
                            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">高优先级</span>
                          </div>
                          <div className="font-medium text-sm">团队周会</div>
                          <div className="text-xs opacity-80 mt-1">会议室 A</div>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                            <span className="text-sm text-gray-700">完成项目报告</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-400 line-through">回复邮件</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                            <span className="text-sm text-gray-700">准备演示文稿</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-3">
                      <div className="flex justify-around">
                        <div className="text-blue-500">
                          <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <div className="text-gray-400">
                          <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="text-gray-400">
                          <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Phone */}
            <div className="hidden md:block w-48 lg:w-56 transform rotate-6 translate-y-8">
              <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19]">
                  <div className="h-full bg-gradient-to-b from-indigo-50 to-white p-4">
                    <div className="w-16 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <div className="text-center mb-4">
                      <div className="text-xs text-gray-500">本周统计</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-sm mb-3">
                      <div className="text-2xl font-bold text-gray-900">87%</div>
                      <div className="text-xs text-gray-500">任务完成率</div>
                      <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[87%] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-50 rounded-lg p-2 text-center">
                        <div className="text-lg font-semibold text-blue-600">24</div>
                        <div className="text-xs text-gray-500">已完成</div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-2 text-center">
                        <div className="text-lg font-semibold text-orange-600">4</div>
                        <div className="text-xs text-gray-500">进行中</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
