import Image from "next/image";

import Logo from "@/assets/logo-footer.svg";

export function Footer() {
  return (
    <footer className="mt-12 flex h-19.25 w-full items-center justify-between bg-surface px-30.75 py-6">
      <Image src={Logo} alt="food explorer" />
      <p className="text-sm text-surface-foreground">© 2023 - Todos os direitos reservados.</p>
    </footer>
  );
}
