import Link from 'next/link';
import Image from 'next/image';

export default function Tracking() {
  return (
    <div className="relative flex h-screen w-full flex-col bg-[#f6f7f8] overflow-hidden">
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 pt-12 pb-4 bg-gradient-to-b from-white/90 to-transparent pointer-events-none">
        <Link href="/customer/home" className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm text-slate-900 hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </Link>
        <div className="pointer-events-auto rounded-full bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm">
          <h2 className="text-sm font-semibold text-slate-900">Shipment #38491</h2>
        </div>
        <button className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm text-slate-900 hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-[24px]">more_horiz</span>
        </button>
      </header>

      <div className="relative flex-1 w-full bg-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center relative">
          <Image alt="Map" fill className="object-cover" src="https://picsum.photos/400/800?random=8" referrerPolicy="no-referrer" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent z-10"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="absolute -top-12 -left-8 flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1173d4] border-4 border-white shadow-lg text-white z-10 transform transition-transform hover:scale-110">
              <span className="material-symbols-outlined text-[24px]">local_shipping</span>
            </div>
            <div className="mt-1 rounded bg-slate-900/80 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
              JOÃO
            </div>
          </div>

          <div className="absolute top-16 right-[-80px] flex flex-col items-center">
            <div className="text-red-500 drop-shadow-md">
              <span className="material-symbols-outlined text-[40px] fill-current">location_on</span>
            </div>
          </div>

          <svg className="absolute top-0 left-0 h-32 w-48 -translate-x-6 overflow-visible" style={{ pointerEvents: 'none' }}>
            <path className="drop-shadow-sm opacity-80" d="M0,0 Q60,10 90,80" fill="none" stroke="#1173d4" strokeDasharray="8 4" strokeLinecap="round" strokeWidth="4"></path>
          </svg>
        </div>

        <div className="absolute right-4 top-1/3 flex flex-col gap-3 z-10">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-slate-700 hover:bg-slate-50">
            <span className="material-symbols-outlined text-[24px]">add</span>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-slate-700 hover:bg-slate-50">
            <span className="material-symbols-outlined text-[24px]">remove</span>
          </button>
          <button className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#1173d4] shadow-md text-white hover:bg-blue-600">
            <span className="material-symbols-outlined text-[24px]">near_me</span>
          </button>
        </div>
      </div>

      <div className="relative z-20 -mt-6 flex flex-col gap-4 rounded-t-xl bg-white p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-slate-200"></div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Arriving in 15 mins</h3>
            <p className="text-sm text-slate-500">On route to Luanda Port</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
            <span className="material-symbols-outlined text-[24px]">timer</span>
          </div>
        </div>

        <div className="mt-2">
          <div className="flex justify-between mb-1 text-xs font-medium text-slate-500">
            <span>Viana Warehouse</span>
            <span>75%</span>
            <span>Luanda Port</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-[#1173d4]" style={{ width: '75%' }}></div>
          </div>
        </div>

        <hr className="border-slate-100 my-1"/>

        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-white shadow-sm relative">
              <Image alt="Driver Portrait" fill className="object-cover" src="https://picsum.photos/100/100?random=9" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 ring-2 ring-white">
              <span className="material-symbols-outlined text-[12px] text-white">check</span>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-base font-bold text-slate-900">João Silva</h4>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                Volvo FH16
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-yellow-500">
                <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                4.9
              </span>
            </div>
          </div>
          <button className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#1173d4]/10 text-[#1173d4] hover:bg-[#1173d4] hover:text-white transition-all active:scale-95">
            <span className="material-symbols-outlined text-[20px]">call</span>
          </button>
          <button className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all active:scale-95">
            <span className="material-symbols-outlined text-[20px]">chat</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-1">
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs text-slate-500 mb-1">Load Type</p>
            <div className="flex items-center gap-2 font-medium text-slate-900">
              <span className="material-symbols-outlined text-[18px] text-[#1173d4]">inventory_2</span>
              Electronics
            </div>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs text-slate-500 mb-1">Weight</p>
            <div className="flex items-center gap-2 font-medium text-slate-900">
              <span className="material-symbols-outlined text-[18px] text-[#1173d4]">weight</span>
              2.5 Tons
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white px-4 pb-6 pt-3 z-20">
        <div className="flex justify-between">
          <Link href="/customer/home" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 hover:text-[#1173d4] transition-colors">
            <span className="material-symbols-outlined text-[24px]">home</span>
            <p className="text-xs font-medium">Home</p>
          </Link>
          <Link href="#" className="flex flex-1 flex-col items-center justify-end gap-1 text-[#1173d4]">
            <span className="material-symbols-outlined text-[24px] fill-current">local_shipping</span>
            <p className="text-xs font-medium">My Loads</p>
          </Link>
          <Link href="#" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 hover:text-[#1173d4] transition-colors">
            <span className="material-symbols-outlined text-[24px]">account_balance_wallet</span>
            <p className="text-xs font-medium">Wallet</p>
          </Link>
          <Link href="#" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 hover:text-[#1173d4] transition-colors">
            <span className="material-symbols-outlined text-[24px]">person</span>
            <p className="text-xs font-medium">Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
