import Link from 'next/link';
import Image from 'next/image';

export default function CreateOrder() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50 relative h-full">
      <div className="w-full flex justify-between items-end px-6 pb-2 pt-12 text-black font-semibold text-xs z-20 bg-white">
        <span>9:41</span>
        <div className="flex gap-1.5 items-center">
          <span className="material-symbols-outlined text-[16px] font-bold">signal_cellular_alt</span>
          <span className="material-symbols-outlined text-[16px] font-bold">wifi</span>
          <span className="material-symbols-outlined text-[16px] font-bold">battery_full</span>
        </div>
      </div>
      <header className="px-5 py-3 flex items-center gap-4 border-b border-gray-100 bg-white sticky top-0 z-10">
        <Link href="/customer/home" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
          <span className="material-symbols-outlined text-gray-800">arrow_back</span>
        </Link>
        <h1 className="text-lg font-bold text-gray-900">Novo Pedido de Frete</h1>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-32 bg-gray-50">
        <section className="p-5 bg-white mb-2">
          <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">1. O que vamos transportar?</h2>
          <div className="grid grid-cols-3 gap-3">
            <label className="cursor-pointer group relative">
              <input type="radio" name="cargo_type" className="peer sr-only" defaultChecked />
              <div className="flex flex-col items-center p-3 rounded-xl border border-gray-200 bg-white peer-checked:border-[#FF6B00] peer-checked:bg-orange-50 transition-all">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined">box</span>
                </div>
                <span className="text-xs font-medium text-gray-700">Pequeno</span>
              </div>
              <div className="absolute top-1 right-1 opacity-0 peer-checked:opacity-100 text-[#FF6B00]">
                <span className="material-symbols-outlined text-base">check_circle</span>
              </div>
            </label>
            <label className="cursor-pointer group relative">
              <input type="radio" name="cargo_type" className="peer sr-only" />
              <div className="flex flex-col items-center p-3 rounded-xl border border-gray-200 bg-white peer-checked:border-[#FF6B00] peer-checked:bg-orange-50 transition-all">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined">local_shipping</span>
                </div>
                <span className="text-xs font-medium text-gray-700">Mudança</span>
              </div>
              <div className="absolute top-1 right-1 opacity-0 peer-checked:opacity-100 text-[#FF6B00]">
                <span className="material-symbols-outlined text-base">check_circle</span>
              </div>
            </label>
            <label className="cursor-pointer group relative">
              <input type="radio" name="cargo_type" className="peer sr-only" />
              <div className="flex flex-col items-center p-3 rounded-xl border border-gray-200 bg-white peer-checked:border-[#FF6B00] peer-checked:bg-orange-50 transition-all">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined">factory</span>
                </div>
                <span className="text-xs font-medium text-gray-700">Empresarial</span>
              </div>
              <div className="absolute top-1 right-1 opacity-0 peer-checked:opacity-100 text-[#FF6B00]">
                <span className="material-symbols-outlined text-base">check_circle</span>
              </div>
            </label>
          </div>
        </section>

        <section className="p-5 bg-white mb-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">2. Fotos da Carga</h2>
            <span className="text-xs text-gray-400">Opcional</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            <button className="flex-shrink-0 w-24 h-24 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-1 text-gray-400 hover:bg-gray-50 hover:border-gray-400 transition">
              <span className="material-symbols-outlined text-2xl">add_a_photo</span>
              <span className="text-[10px] font-medium">Adicionar</span>
            </button>
            <div className="relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-gray-200">
              <Image alt="Carga" fill className="object-cover" src="https://picsum.photos/200/200?random=3" referrerPolicy="no-referrer" />
              <button className="absolute top-1 right-1 w-5 h-5 bg-black/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm z-10">
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </div>
            <div className="relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-gray-200">
              <Image alt="Carga" fill className="object-cover" src="https://picsum.photos/200/200?random=4" referrerPolicy="no-referrer" />
              <button className="absolute top-1 right-1 w-5 h-5 bg-black/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm z-10">
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Fotos ajudam os motoristas a dar lances mais precisos.</p>
        </section>

        <section className="p-5 bg-white mb-2">
          <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">3. Detalhes da Rota</h2>
          <div className="relative pl-8">
            <div className="absolute left-3 top-4 bottom-10 w-0.5 bg-gray-200 border-l border-dashed border-gray-300"></div>
            <div className="mb-6 relative">
              <div className="absolute -left-8 top-1">
                <div className="w-6 h-6 rounded-full bg-[#FF6B00] border-4 border-white shadow-sm flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Ponto de Coleta</label>
              <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3 focus-within:ring-2 focus-within:ring-[#FF6B00] focus-within:border-transparent transition">
                <span className="material-symbols-outlined text-gray-400 mr-2">my_location</span>
                <input type="text" className="bg-transparent w-full text-sm font-medium text-gray-900 focus:outline-none" placeholder="Onde buscar?" defaultValue="Maianga, Luanda" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-1">
                <div className="w-6 h-6 rounded-full bg-gray-800 border-4 border-white shadow-sm flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-[10px] text-white">flag</span>
                </div>
              </div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Destino</label>
              <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3 focus-within:ring-2 focus-within:ring-gray-800 focus-within:border-transparent transition">
                <span className="material-symbols-outlined text-gray-400 mr-2">location_on</span>
                <input type="text" className="bg-transparent w-full text-sm font-medium text-gray-900 focus:outline-none" placeholder="Para onde vai?" />
              </div>
            </div>
          </div>
          <div className="mt-4 w-full h-32 rounded-xl bg-gray-200 overflow-hidden relative">
            <Image alt="Map Preview" fill className="object-cover opacity-60" src="https://picsum.photos/400/200?random=5" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/5">
              <button className="bg-white px-3 py-1.5 rounded-full shadow-sm text-xs font-semibold text-gray-700 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">map</span>
                Ajustar no mapa
              </button>
            </div>
          </div>
        </section>
      </main>

      <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-5 py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20 max-w-[400px] mx-auto">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-500 text-xs">Estimativa de preço</span>
          <span className="text-lg font-bold text-gray-900">Kz 15.000 - 20.000</span>
        </div>
        <button className="w-full bg-[#FF6B00] hover:bg-[#E65100] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 flex items-center justify-center gap-2 transition active:scale-[0.98]">
          <span>Publicar Pedido</span>
          <span className="material-symbols-outlined text-xl">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
