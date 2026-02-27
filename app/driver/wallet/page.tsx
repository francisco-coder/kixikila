import DriverBottomNav from '@/components/DriverBottomNav';
import Link from 'next/link';

export default function DriverWallet() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50 relative h-full">
      <header className="bg-white shadow-sm z-20 sticky top-0">
        <div className="pt-12 bg-white"></div>
        <div className="px-4 py-3 flex items-center justify-between">
          <Link href="/driver/home" className="p-2 -ml-2 rounded-full active:bg-gray-100 text-gray-600">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <h1 className="text-lg font-bold text-gray-900">Carteira do Motorista</h1>
          <button className="p-2 -mr-2 rounded-full active:bg-gray-100 text-gray-600 relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="p-4">
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-6 shadow-lg text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
            <div className="flex justify-between items-start mb-2 relative z-10">
              <span className="text-blue-200 text-sm font-medium tracking-wide">SALDO DISPONÍVEL</span>
              <span className="bg-blue-800 bg-opacity-50 text-xs px-2 py-1 rounded-lg border border-blue-600/30 backdrop-blur-sm">
                ID: 8402-A
              </span>
            </div>
            <div className="flex items-baseline gap-1 mb-6 relative z-10">
              <span className="text-2xl font-light text-blue-200">Kz</span>
              <h2 className="text-4xl font-bold tracking-tight">45.200,00</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-blue-600/30 pt-4 relative z-10">
              <div>
                <span className="block text-xs text-blue-300">Em curso (bloqueado)</span>
                <span className="font-semibold">Kz 5.000,00</span>
              </div>
              <div className="text-right">
                <span className="block text-xs text-blue-300">Status</span>
                <span className="font-semibold text-green-300 flex items-center justify-end gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span> Ativo
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mb-2">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
            <span className="material-symbols-outlined text-yellow-600 mt-0.5">pending_actions</span>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900">Validação Pendente</h3>
              <p className="text-xs text-gray-600 mt-1">Recibo de Kz 15.000 enviado há 20 min. O backoffice está analisando.</p>
            </div>
            <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full animate-pulse mt-2"></div>
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900">Recarregar Saldo</h3>
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded font-medium">Transferência</span>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mb-4 flex justify-between items-center group cursor-pointer active:bg-gray-100 transition-colors">
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">IBAN da Plataforma (BAI)</p>
                <p className="font-mono text-gray-800 text-sm font-medium tracking-wide break-all">AO06 0040 0000 1234 5678 9012 3</p>
              </div>
              <button className="text-blue-600 p-2 hover:bg-blue-50 rounded-full">
                <span className="material-symbols-outlined text-[20px]">content_copy</span>
              </button>
            </div>
            <button className="w-full bg-gray-900 text-white font-medium py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
              <span className="material-symbols-outlined">add_a_photo</span>
              Enviar Comprovativo
            </button>
            <p className="text-[10px] text-center text-gray-400 mt-3">
              A validação ocorre em até 30 minutos em horário comercial.
            </p>
          </div>
        </div>

        <div className="px-4 pt-4 pb-20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900 text-lg">Extrato Recente</h3>
            <button className="text-sm text-blue-600 font-medium">Ver tudo</button>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between border-l-4 border-red-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                  <span className="material-symbols-outlined text-[20px]">percent</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Comissão de Serviço</p>
                  <p className="text-xs text-gray-500">Frete #LZ-992 • Mudança Local</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-red-600">- Kz 2.500</p>
                <p className="text-[10px] text-gray-400">Hoje, 14:30</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between border-l-4 border-green-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Recarga Aprovada</p>
                  <p className="text-xs text-gray-500">Transferência BAI</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-green-600">+ Kz 20.000</p>
                <p className="text-[10px] text-gray-400">Ontem, 09:15</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <DriverBottomNav active="wallet" />
    </div>
  );
}
