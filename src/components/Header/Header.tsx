'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import ThemeContext from '@/context/themeContext';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { data: session } = useSession();
  const router = useRouter();

  const handleScrollToFooter = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const footerElement = document.querySelector('footer');
    footerElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="flex items-center justify-between px-10 py-4 w-full">

      {/* LOGO */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo da pousada"
            width={200}
            height={200}
            className="h-24 w-auto object-contain"
            priority
          />
        </Link>
      </div>

      {/* MENU */}
      <ul className="flex items-center gap-8 text-lg">

        <li className="hover:-translate-y-1 duration-300 transition-all">
          <Link href="/">Início</Link>
        </li>

        <li className="hover:-translate-y-1 duration-300 transition-all">
          <Link href="/rooms">Acomodações</Link>
        </li>

        <li className="hover:-translate-y-1 duration-300 transition-all">
          <a href="#footer" onClick={handleScrollToFooter}>
            Contato
          </a>
        </li>

        {/* USER + DARKMODE */}
        <li className="flex items-center gap-3">

          {session?.user ? (
            <div className="flex items-center gap-2">

              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={session.user.image}
                      alt={session.user.name!}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <FaUserCircle className="cursor-pointer text-xl" />
                )}
              </Link>

              {/* botão sair */}
              <button
                onClick={() => signOut()}
                className="text-sm underline"
              >
                Sair
              </button>

            </div>
          ) : (
            <div className="flex items-center gap-2">
              
              {/* 👉 CORREÇÃO AQUI */}
              <button onClick={() => router.push("/auth/signin")}>
                <FaUserCircle className="cursor-pointer text-xl" />
              </button>

              <span className="text-xs text-gray-500">
                Entrar
              </span>
            </div>
          )}

          {darkTheme ? (
            <MdOutlineLightMode
              className="cursor-pointer text-xl"
              onClick={() => {
                setDarkTheme(false);
                localStorage.removeItem('hotel-theme');
              }}
            />
          ) : (
            <MdDarkMode
              className="cursor-pointer text-xl"
              onClick={() => {
                setDarkTheme(true);
                localStorage.setItem('hotel-theme', 'true');
              }}
            />
          )}

        </li>

      </ul>
    </header>
  );
};

export default Header;