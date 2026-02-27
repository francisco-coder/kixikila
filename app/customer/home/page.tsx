import CustomerBottomNav from '@/components/CustomerBottomNav';
import Image from 'next/image';

export default function CustomerHome() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50 relative h-full">
      <div className="h-12 w-full bg-[#0A2647] flex items-end justify-between px-6 pb-2 text-white text-xs pt-12">
        <span className="font-medium">9:41</span>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px]">signal_cellular_alt</span>
          <span className="material-symbols-outlined text-[16px]">wifi</span>
          <span className="material-symbols-outlined text-[16px] -rotate-90">battery_full</span>
        </div>
      </div>
      <header className="bg-[#0A2647] px-6 pb-6 pt-2 text-white rounded-b-[2rem] shadow-lg relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-blue-200 text-sm">Welcome back,</p>
            <h1 className="text-xl font-bold">Mateus Silva</h1>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center border-2 border-blue-400 overflow-hidden relative">
              <Image alt="User" fill className="object-cover" src="https://picsum.photos/100/100?random=2" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0A2647]"></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-xl text-gray-800">
          <div className="relative flex items-center mb-3">
            <span className="material-symbols-outlined text-green-600 mr-3">my_location</span>
            <input type="text" placeholder="Origin (e.g. Luanda)" className="w-full border-b border-gray-100 py-2 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors placeholder-gray-400" />
          </div>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined text-red-500 mr-3">location_on</span>
            <input type="text" placeholder="Destination (e.g. Benguela)" className="w-full py-2 text-sm focus:outline-none placeholder-gray-400" />
          </div>
          <button className="w-full mt-4 bg-[#FF6B00] text-white py-3 rounded-xl font-semibold shadow-md active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">search</span>
            Find Truck
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24 no-scrollbar">
        <section className="mt-6 pl-6">
          <div className="flex justify-between items-center pr-6 mb-3">
            <h2 className="font-bold text-gray-800 text-lg">Services</h2>
            <span className="text-[#FF6B00] text-xs font-semibold">View All</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 pr-6 no-scrollbar snap-x">
            <div className="snap-start min-w-[100px] flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center shadow-sm border border-blue-100">
                <span className="material-symbols-outlined text-[32px] text-[#0A2647]">local_shipping</span>
              </div>
              <span className="text-xs font-medium text-gray-600 text-center w-full truncate">Interprovincial</span>
            </div>
            <div className="snap-start min-w-[100px] flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center shadow-sm border border-orange-100">
                <span className="material-symbols-outlined text-[32px] text-[#FF6B00]">home_work</span>
              </div>
              <span className="text-xs font-medium text-gray-600 text-center w-full truncate">Moving</span>
            </div>
            <div className="snap-start min-w-[100px] flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center shadow-sm border border-blue-100">
                <span className="material-symbols-outlined text-[32px] text-[#0A2647]">apartment</span>
              </div>
              <span className="text-xs font-medium text-gray-600 text-center w-full truncate">Business</span>
            </div>
          </div>
        </section>

        <section className="px-6 mb-2">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-4 flex justify-between items-center text-white shadow-lg">
            <div>
              <p className="text-xs text-gray-400 mb-1">Wallet Balance</p>
              <p className="text-xl font-bold font-mono">245,000 KZ</p>
            </div>
            <button className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-medium hover:bg-white/20 transition-colors">
              Add Funds
            </button>
          </div>
        </section>

        <section className="px-6 mt-6">
          <h2 className="font-bold text-gray-800 text-lg mb-4">Recent Shipments</h2>
          <div className="flex flex-col gap-3">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                PENDING OFFERS
              </div>
              <div className="flex items-center gap-3 mb-3 mt-1">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-500">package_2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">Electronics Pallet</h3>
                  <p className="text-xs text-gray-500">#TRK-8821 • Today</p>
                </div>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <div className="flex flex-col items-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="w-0.5 h-6 bg-gray-200 my-0.5"></div>
                  <div className="w-2 h-2 rounded-full bg-red-500 border border-white ring-1 ring-red-500"></div>
                </div>
                <div className="text-xs flex-1 space-y-3">
                  <p className="text-gray-700">Viana Industrial Park, Luanda</p>
                  <p className="text-gray-700">Lobito Port, Benguela</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                <span className="text-xs font-medium text-[#FF6B00]">3 Drivers interested</span>
                <button className="text-xs bg-[#0A2647] text-white px-3 py-1.5 rounded-lg">View Offers</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CustomerBottomNav active="home" />
    </div>
  );
}
