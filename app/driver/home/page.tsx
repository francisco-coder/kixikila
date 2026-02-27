import DriverBottomNav from '@/components/DriverBottomNav';
import Image from 'next/image';

export default function DriverHome() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50 relative h-full">
      <header className="bg-white px-5 pt-12 pb-4 shadow-sm z-10 sticky top-0">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 relative">
              <Image alt="Driver Profile" fill className="object-cover" src="https://picsum.photos/100/100?random=1" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-gray-900">Hello, João</h1>
              <div className="flex items-center text-xs text-green-600 font-medium">
                <span className="material-symbols-outlined text-[14px] mr-1">verified</span>
                Active Driver
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500">Offline</span>
            <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:translate-x-6 checked:border-green-500 transition-transform duration-200 ease-in-out border-gray-300 left-0 z-10" defaultChecked />
              <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-green-500 transition-colors duration-200"></label>
            </div>
            <span className="text-xs font-bold text-gray-900">Online</span>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="px-5 mt-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">Available Balance</p>
                <h2 className="text-3xl font-bold tracking-tight">Kz 124.500</h2>
              </div>
              <button className="bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors p-2 rounded-full backdrop-blur-sm">
                <span className="material-symbols-outlined text-white">account_balance_wallet</span>
              </button>
            </div>
            <div className="flex justify-between items-end relative z-10">
              <div>
                <p className="text-slate-400 text-xs mb-1">Blocked Balance</p>
                <div className="flex items-center gap-1 text-amber-400">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  <span className="font-semibold text-sm">Kz 15.000</span>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold py-2.5 px-6 rounded-lg shadow-md transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">add</span>
                Recharge
              </button>
            </div>
          </div>
        </div>

        <div className="px-5 mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 text-lg">Nearby Orders</h3>
            <button className="text-blue-600 text-sm font-medium">View Map</button>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4 relative">
            <div className="flex justify-between items-start mb-3">
              <div className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">box</span>
                Furniture Moving
              </div>
              <span className="text-gray-400 text-xs">2 min ago</span>
            </div>
            <div className="relative pl-6 border-l-2 border-dashed border-gray-200 ml-2 space-y-4 my-4">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-500"></div>
                <p className="text-xs text-gray-500">From</p>
                <p className="text-sm font-semibold text-gray-900 line-clamp-1">Maianga, Luanda</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-red-500"></div>
                <p className="text-xs text-gray-500">To</p>
                <p className="text-sm font-semibold text-gray-900 line-clamp-1">Kilamba, Luanda</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-gray-600">
                  <span className="material-symbols-outlined text-[18px]">distance</span>
                  <span className="text-xs font-medium">18 km</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <span className="material-symbols-outlined text-[18px]">weight</span>
                  <span className="text-xs font-medium">~500kg</span>
                </div>
              </div>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-gray-800 transition-colors">
                Make Offer
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4 relative">
            <div className="flex justify-between items-start mb-3">
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">local_shipping</span>
                Business Freight
              </div>
              <span className="text-gray-400 text-xs">15 min ago</span>
            </div>
            <div className="relative pl-6 border-l-2 border-dashed border-gray-200 ml-2 space-y-4 my-4">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-500"></div>
                <p className="text-xs text-gray-500">From</p>
                <p className="text-sm font-semibold text-gray-900 line-clamp-1">Port of Luanda</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-red-500"></div>
                <p className="text-xs text-gray-500">To</p>
                <p className="text-sm font-semibold text-gray-900 line-clamp-1">Viana Industrial Park</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-gray-600">
                  <span className="material-symbols-outlined text-[18px]">distance</span>
                  <span className="text-xs font-medium">24 km</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <span className="material-symbols-outlined text-[18px]">weight</span>
                  <span className="text-xs font-medium">2.5 Ton</span>
                </div>
              </div>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-gray-800 transition-colors">
                Make Offer
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[360px] bg-gray-900/90 backdrop-blur text-white text-sm py-3 px-4 rounded-lg shadow-xl flex items-center justify-between z-50 animate-bounce cursor-pointer">
        <div className="flex items-center gap-3">
          <span className="bg-green-500 w-2 h-2 rounded-full"></span>
          <span>New cargo posted nearby!</span>
        </div>
        <span className="material-symbols-outlined text-gray-400 text-sm">close</span>
      </div>

      <DriverBottomNav active="home" />
    </div>
  );
}
