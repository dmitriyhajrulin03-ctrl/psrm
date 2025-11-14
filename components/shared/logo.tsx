import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center hover:opacity-80 transition-opacity"
    >
      <Image
        src="/images/logo-psrm.svg"
        alt="PSRM Logo"
        width={120}
        height={40}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}

