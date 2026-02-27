import Link from 'next/link';
import Image from 'next/image';

export default function ViewOffers() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-50 relative">
      <header className="bg-white shadow-sm z-10 sticky top-0">
        <div className="px-4 h-14 flex items-center justify-between pt-12">
          <Link href="/customer/home" className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-700">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <h1 className="text-lg font-bold text-gray-900">Driver Offers</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24 no-scrollbar">
        <section className="bg-blue-900 text-white p-5 rounded-b-3xl shadow-lg mb-6 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-blue-800 rounded-full opacity-50 blur-xl"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-2">
              <span className="bg-blue-800 text-blue-200 text-xs font-semibold px-2.5 py-1 rounded">ORDER #AO-9284</span>
              <span className="text-blue-200 text-sm">Today, 10:30 AM</span>
            </div>
            <h2 className="text-xl font-bold mb-4">Interprovincial Delivery</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-2 h-2 rounded-full bg-green-400 shrink-0"></div>
                <div>
                  <p className="text-xs text-blue-300 uppercase font-medium">Origin</p>
                  <p className="text-sm font-semibold">Luanda, Maianga</p>
                </div>
              </div>
              <div className="absolute left-[11px] top-[108px] h-6 w-0.5 bg-blue-700/50"></div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-2 h-2 rounded-full bg-red-400 shrink-0"></div>
                <div>
                  <p className="text-xs text-blue-300 uppercase font-medium">Destination</p>
                  <p className="text-sm font-semibold">Benguela, Lobito</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-800 flex justify-between items-center text-sm">
              <div className="flex items-center gap-1.5 text-blue-200">
                <span className="material-symbols-outlined text-lg">inventory_2</span>
                <span>Furniture (250kg)</span>
              </div>
            </div>
          </div>
        </section>

        <div className="px-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800 text-lg">4 Drivers Available</h3>
            <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded border">Best Rating</span>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative">
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm z-10 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">verified</span> Recommended
              </div>
              <div className="flex gap-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden shrink-0 relative">
                    <Image alt="Driver" fill className="object-cover" src="https://picsum.photos/100/100?random=6" referrerPolicy="no-referrer" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <div className="bg-yellow-400 text-white rounded-full p-0.5">
                      <span className="material-symbols-outlined text-xs block">star</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">João M.</h4>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mt-0.5">
                        <span className="font-semibold text-yellow-600">4.9</span>
                        <span className="text-gray-400">•</span>
                        <span>342 trips</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">45.000 Kz</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-gray-500">local_shipping</span>
                    <span className="text-sm text-gray-700">Toyota Hilux (Pickup)</span>
                  </div>
                  <button className="w-full mt-4 bg-[#FBBF24] hover:bg-[#D97706] text-black font-semibold py-2.5 rounded-xl transition-colors shadow-sm">
                    Select Driver
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex gap-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden shrink-0 relative">
                    <Image alt="Driver" fill className="object-cover" src="https://picsum.photos/100/100?random=7" referrerPolicy="no-referrer" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <div className="bg-yellow-400 text-white rounded-full p-0.5">
                      <span className="material-symbols-outlined text-xs block">star</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">Antonio B.</h4>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mt-0.5">
                        <span className="font-semibold text-yellow-600">4.7</span>
                        <span className="text-gray-400">•</span>
                        <span>128 trips</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">42.500 Kz</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-gray-500">airport_shuttle</span>
                    <span className="text-sm text-gray-700">Mitsubishi Canter (Light Truck)</span>
                  </div>
                  <button className="w-full mt-4 bg-gray-900 text-white hover:bg-gray-800 font-semibold py-2.5 rounded-xl transition-colors shadow-sm">
                    Select Driver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-8"></div>
      </main>

      <div className="bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] absolute bottom-0 w-full z-20 max-w-[400px] mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500 text-sm">Need help?</span>
          <button className="text-[#D97706] text-sm font-semibold">Contact Support</button>
        </div>
        <button className="w-full border border-red-200 text-red-600 font-medium py-3 rounded-xl hover:bg-red-50 transition-colors">
          Cancel Order Request
        </button>
      </div>
    </div>
  );
}
