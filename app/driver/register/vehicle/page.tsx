import Link from 'next/link';

export default function VehicleRegistration() {
  return (
    <div className="flex-1 flex flex-col bg-[#f6f7f8] relative h-full">
      <div className="sticky top-0 z-50 bg-[#f6f7f8]/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center p-4 pt-12">
          <Link href="/driver/home" className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 transition-colors text-slate-900">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </Link>
          <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Vehicle Details</h2>
        </div>
        <div className="w-full h-1 bg-slate-200">
          <div className="h-full bg-[#1173d4] w-2/3 rounded-r-full"></div>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-4 py-6 w-full max-w-lg mx-auto pb-32 no-scrollbar">
        <div className="mb-8">
          <h1 className="text-slate-900 text-2xl font-bold leading-tight mb-2">Register your vehicle</h1>
          <p className="text-slate-500 text-base leading-relaxed">
            Provide accurate details about your vehicle to help us verify your profile and start receiving jobs.
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="block text-slate-900 text-sm font-medium">Vehicle Type</label>
            <div className="relative">
              <select className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-slate-900 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4] focus:outline-none transition-colors" defaultValue="">
                <option disabled value="">Select type</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="mini_truck">Mini Truck</option>
                <option value="van">Van</option>
                <option value="heavy_truck">Heavy Truck</option>
                <option value="flatbed">Flatbed Truck</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-slate-900 text-sm font-medium">License Plate</label>
            <div className="relative">
              <input type="text" placeholder="e.g., LD-12-34-AB" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 pl-11 text-slate-900 placeholder:text-slate-400 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4] focus:outline-none transition-colors uppercase" />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-slate-400">
                <span className="material-symbols-outlined text-xl">directions_car</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-slate-900 text-sm font-medium">Vehicle Model</label>
              <input type="text" placeholder="e.g., Toyota Hilux" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4] focus:outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="block text-slate-900 text-sm font-medium">Year</label>
              <input type="number" placeholder="YYYY" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4] focus:outline-none transition-colors" />
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <h3 className="text-slate-900 text-base font-semibold">Documents</h3>
            
            <div className="rounded-xl border border-dashed border-gray-300 bg-white p-4 flex items-center justify-between group cursor-pointer hover:border-[#1173d4] hover:bg-slate-50 transition-all">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1173d4]">
                  <span className="material-symbols-outlined text-xl">description</span>
                </div>
                <div>
                  <p className="text-slate-900 font-medium text-sm">Livrete / Title Document</p>
                  <p className="text-slate-500 text-xs">Upload PDF or JPG</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-[#1173d4] transition-colors">upload_file</span>
            </div>

            <div className="rounded-xl border border-dashed border-gray-300 bg-white p-4 flex items-center justify-between group cursor-pointer hover:border-[#1173d4] hover:bg-slate-50 transition-all">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1173d4]">
                  <span className="material-symbols-outlined text-xl">verified_user</span>
                </div>
                <div>
                  <p className="text-slate-900 font-medium text-sm">Insurance Policy</p>
                  <p className="text-slate-500 text-xs">Valid proof of insurance</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-[#1173d4] transition-colors">upload_file</span>
            </div>
          </div>
        </form>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#f6f7f8] border-t border-gray-200 z-40 max-w-[400px] mx-auto">
        <div className="max-w-lg mx-auto flex flex-col gap-3">
          <div className="flex items-start gap-2 bg-blue-50 rounded-lg p-3">
            <span className="material-symbols-outlined text-[#1173d4] text-sm mt-0.5">info</span>
            <p className="text-xs text-slate-600">
              Your vehicle profile will be reviewed by our admin team within 24 hours. You cannot accept jobs until approved.
            </p>
          </div>
          <button className="w-full bg-[#1173d4] hover:bg-blue-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-[#1173d4]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <span>Submit for Verification</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
