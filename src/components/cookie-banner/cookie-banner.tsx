"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const consentData = localStorage.getItem("cookie-consent");

    if (!consentData) {
      setShowBanner(true);
      return;
    }

    try {
      const parsed = JSON.parse(consentData);
      const consentDate = new Date(parsed.timestamp);
      const now = new Date();
      const monthsAgo = new Date();
      monthsAgo.setMonth(now.getMonth() - 12); // Expira em 12 meses

      // Verificar se consentimento expirou ou versão mudou
      if (consentDate < monthsAgo || parsed.version !== "1.0") {
        setShowBanner(true);
      }
    } catch (error) {
      // Se erro ao parsear, pedir consentimento novamente
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Salvar dados completos do consentimento
    const consentData = {
      accepted: true,
      timestamp: new Date().toISOString(),
      version: "1.0", // Versão das suas políticas de privacidade
      userAgent: navigator.userAgent, // Para rastreabilidade
      url: window.location.href, // Onde foi dado o consentimento
    };

    localStorage.setItem("cookie-consent", JSON.stringify(consentData));

    setShowBanner(false);
  };

  // Não mostrar se já foi aceito
  if (!showBanner) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-[999] bg-black/40">
      <div className="bg-white fixed bottom-0 w-full p-8 md:py-6 px-8 flex flex-col justify-between items-center gap-2 md:flex-row">
        {/* Container */}
        <div className="flex flex-col justify-between items-center gap-6 md:flex-row w-full max-w-6xl mx-auto ">
          <h4 className="text-xs max-w-2xl text-justify">
            Nosso site utiliza cookies com algumas finalidades específicas. Ao
            clicar em “Aceitar”, você concorda com o uso de TODOS os cookies.
            Para mais informações acesse a nossa{" "}
            <Link
              href="/politicas-de-privacidade"
              className="font-bold hover:underline"
            >
              Política de Privacidade
            </Link>
          </h4>
          <div>
            <Button
              variant="primary"
              className="uppercase text-xs tracking-widest"
              onClick={handleAccept}
            >
              Aceitar todos os cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
