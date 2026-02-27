import Link from 'next/link';

export default function DriverBottomNav({ active = 'home' }: { active?: string }) {
  return (
    <nav className="bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-20 absolute bottom-0 w-full pb-6">
      <Link href="/driver/home" className={`flex flex-col items-center ${active === 'home' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
        <span className="material-symbols-outlined text-[26px]">home</span>
        <span className="text-[10px] font-medium mt-1">Home</span>
      </Link>
      <Link href="#" className={`flex flex-col items-center ${active === 'loads' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
        <span className="material-symbols-outlined text-[26px]">list_alt</span>
        <span className="text-[10px] font-medium mt-1">My Loads</span>
      </Link>
      <Link href="/driver/wallet" className={`flex flex-col items-center ${active === 'wallet' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
        <span className="material-symbols-outlined text-[26px]">wallet</span>
        <span className="text-[10px] font-medium mt-1">Wallet</span>
      </Link>
      <Link href="#" className={`flex flex-col items-center ${active === 'profile' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
        <span className="material-symbols-outlined text-[26px]">person</span>
        <span className="text-[10px] font-medium mt-1">Profile</span>
      </Link>
    </nav>
  );
}
