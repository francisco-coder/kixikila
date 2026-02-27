import Link from 'next/link';

export default function Directory() {
  return (
    <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">App Screens</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3 text-gray-700 border-b pb-2">Driver App</h2>
          <div className="flex flex-col gap-3">
            <Link href="/driver/home" className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-500 transition-colors flex items-center justify-between">
              <span className="font-medium">Home Dashboard</span>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
            <Link href="/driver/wallet" className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-500 transition-colors flex items-center justify-between">
              <span className="font-medium">Wallet & Recharge</span>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
            <Link href="/driver/register/personal" className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-500 transition-colors flex items-center justify-between">
              <span className="font-medium">Personal Registration</span>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
            <Link href="/driver/register/vehicle" className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-500 transition-colors flex items-center justify-between">
              <span className="font-medium">Vehicle Registration</span>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 text-gray-700 border-b pb-2">Customer App</h2>
          <div className="flex flex-col gap-3">
            <Link href="/customer/home" className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-orange-500 transition-colors flex items-center justify-between">
              <span className="font-medium">Home Dashboard</span>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
            <Link href="/customer/order/new" className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-orange-500 transition-colors flex items-center justify-between">
              <span className="font-medium">Create Freight Order</span>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
            <Link href="/customer/order/offers" className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-orange-500 transition-colors flex items-center justify-between">
              <span className="font-medium">View Driver Offers</span>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
            <Link href="/customer/tracking" className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-orange-500 transition-colors flex items-center justify-between">
              <span className="font-medium">Real-time Tracking</span>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
