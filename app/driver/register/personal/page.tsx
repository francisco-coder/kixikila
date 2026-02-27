import Link from 'next/link';

export default function PersonalRegistration() {
  return (
    <div className="flex-1 flex flex-col bg-[#f6f7f8] relative h-full">
      <div className="flex items-center px-4 py-3 pb-2 justify-between sticky top-0 z-50 bg-[#f6f7f8]/95 backdrop-blur-sm pt-12">
        <Link href="/driver/home" className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 transition-colors">
          <span className="material-symbols-outlined text-slate-900" style={{ fontSize: '24px' }}>arrow_back</span>
        </Link>
        <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Personal Registration</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-24 no-scrollbar">
        <div className="pt-4 pb-6">
          <h2 className="text-slate-900 tracking-tight text-[28px] font-bold leading-tight mb-2">Let&apos;s get you started</h2>
          <p className="text-slate-500 text-base font-normal leading-normal">Please enter your personal details to create your driver account.</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-sm font-medium leading-normal">Full Name</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined" style={{ fontSize: '20px' }}>person</span>
              <input type="text" placeholder="Enter your full name" className="w-full rounded-xl border border-slate-200 bg-white p-4 pl-11 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#1173d4] focus:outline-none focus:ring-1 focus:ring-[#1173d4] h-14" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-sm font-medium leading-normal">Phone Number</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined" style={{ fontSize: '20px' }}>call</span>
              <input type="tel" placeholder="+244 9xx xxx xxx" className="w-full rounded-xl border border-slate-200 bg-white p-4 pl-11 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#1173d4] focus:outline-none focus:ring-1 focus:ring-[#1173d4] h-14" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-sm font-medium leading-normal">ID Card Number (BI)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined" style={{ fontSize: '20px' }}>badge</span>
              <input type="text" placeholder="000000000XX000" className="w-full rounded-xl border border-slate-200 bg-white p-4 pl-11 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#1173d4] focus:outline-none focus:ring-1 focus:ring-[#1173d4] h-14" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-sm font-medium leading-normal">Address</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined" style={{ fontSize: '20px' }}>location_on</span>
              <input type="text" placeholder="City, Street, House No." className="w-full rounded-xl border border-slate-200 bg-white p-4 pl-11 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#1173d4] focus:outline-none focus:ring-1 focus:ring-[#1173d4] h-14" />
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-slate-900 text-base font-bold mb-3">Driver&apos;s License</h3>
            <p className="text-slate-500 text-sm mb-4">Please upload a clear photo of the front and back of your license.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="group cursor-pointer flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-[#1173d4]/5 hover:border-[#1173d4] transition-all h-36 relative overflow-hidden">
                <div className="flex flex-col items-center gap-2 z-10">
                  <div className="bg-[#1173d4]/10 p-3 rounded-full text-[#1173d4]">
                    <span className="material-symbols-outlined">add_a_photo</span>
                  </div>
                  <span className="text-sm font-medium text-slate-600">Front Side</span>
                </div>
                <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>

              <div className="group cursor-pointer flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-[#1173d4]/5 hover:border-[#1173d4] transition-all h-36 relative overflow-hidden">
                <div className="flex flex-col items-center gap-2 z-10">
                  <div className="bg-[#1173d4]/10 p-3 rounded-full text-[#1173d4]">
                    <span className="material-symbols-outlined">add_a_photo</span>
                  </div>
                  <span className="text-sm font-medium text-slate-600">Back Side</span>
                </div>
                <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#f6f7f8] border-t border-slate-200 w-full max-w-[400px] mx-auto z-40">
        <button className="w-full rounded-xl bg-[#1173d4] hover:bg-[#1173d4]/90 text-white font-bold text-base h-12 shadow-lg shadow-[#1173d4]/20 transition-all active:scale-[0.98]">
          Continue
        </button>
      </div>
    </div>
  );
}
