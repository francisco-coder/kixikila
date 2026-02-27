import Link from 'next/link';

export default function CustomerBottomNav({ active = 'home' }: { active?: string }) {
  return (
    <nav className="bg-white border-t border-gray-200 px-6 py-3 pb-6 flex justify-between items-center absolute bottom-0 w-full z-20">
      <Link href="/customer/home" className={`flex flex-col items-center gap-1 ${active === 'home' ? 'text-[#0A2647]' : 'text-gray-400 hover:text-[#0A2647] transition-colors'}`}>
        <span className="material-symbols-outlined text-[24px]">home</span>
        <span className="text-[10px] font-medium">Home</span>
      </Link>
      <Link href="#" className={`flex flex-col items-center gap-1 ${active === 'loads' ? 'text-[#0A2647]' : 'text-gray-400 hover:text-[#0A2647] transition-colors'}`}>
        <span className="material-symbols-outlined text-[24px]">local_shipping</span>
        <span className="text-[10px] font-medium">My Loads</span>
      </Link>
      <Link href="#" className={`flex flex-col items-center gap-1 ${active === 'wallet' ? 'text-[#0A2647]' : 'text-gray-400 hover:text-[#0A2647] transition-colors'}`}>
        <span className="material-symbols-outlined text-[24px]">account_balance_wallet</span>
        <span className="text-[10px] font-medium">Wallet</span>
      </Link>
      <Link href="#" className={`flex flex-col items-center gap-1 ${active === 'profile' ? 'text-[#0A2647]' : 'text-gray-400 hover:text-[#0A2647] transition-colors'}`}>
        <span className="material-symbols-outlined text-[24px]">person</span>
        <span className="text-[10px] font-medium">Profile</span>
      </Link>
    </nav>
  );
}
