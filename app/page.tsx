import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end bg-[#2F5D50] bg-rounded-lg p-4 md:h-52">
        <div className="flex  gap-20 mx-auto">
        {<AcmeLogo />}
        <Link
        href="/dashboard"
        className="flex items-center gap-5 bg-[#7C5E3C] self-start rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#DAD7CD] md:text-base"
        >
        <span>Dashboard</span>
        </Link>
        <Link
        href="/dashboard/trips"
        className="flex items-center gap-5 bg-[#7C5E3C] self-start rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#DAD7CD] md:text-base"
        >
        <span>Trips</span>
        </Link>
        <Link
        href="/dashboard/map"
        className="flex items-center gap-5 bg-[#7C5E3C] self-start rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#DAD7CD] md:text-base"
        >
        <span>Map</span>
        </Link>
        <Link
        href="/dashboard/aboutme"
        className="flex items-center gap-5 bg-[#7C5E3C] self-start rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#DAD7CD] md:text-base"
        >
        <span>About me</span>
        </Link>
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"/>
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to my website.</strong> Here I will document and catalog my backcountry ski and snowboard trips.
          </p>
          <Link
            href="/dashboard/aboutme"
            className="flex items-center gap-5 self-start rounded-lg bg-[#2F5D50] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>About me</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        <Image
        src="/mayflower_gulch.jpg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
        />
        </div>
      </div>
    </main>
  );
}
