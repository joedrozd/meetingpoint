import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image'

const HeroSection = () => {
  const { t } = useTranslation('common');
  return (
    <div className="hero py-52">
      <div className="hero-content text-center">
        <div className="max-w-7xl">
              <Image
            src="/logo.png"
            alt="cyberheroes logo"
            width={350}
            height={200}
              />
          <p className="py-6 text-2xl font-normal text-white">
            Stay safe on the net, and keep scams in the bin
          </p>
          <div className="flex items-center justify-center gap-2 ">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
