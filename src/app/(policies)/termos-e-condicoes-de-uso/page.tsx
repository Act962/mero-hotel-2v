import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Termos e Condições de Uso do Site Mero Hotel Boutique
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Leia atentamente nossos Termos antes de utilizar o site.
          </p>
        </div>
      </header>

      {/* Conteúdo */}
      <article className="mx-auto max-w-4xl px-6 py-10 space-y-10">
        {/* Introdução */}
        <section className="space-y-4">
          <p>
            Bem-vindo ao site oficial do{" "}
            <span className="font-semibold">Mero Hotel Boutique</span> (
            <a
              href="https://www.merohotelboutique.com.br"
              className="text-blue-600 hover:underline"
            >
              https://www.merohotelboutique.com.br
            </a>
            ). Estes Termos e Condições de Uso estabelecem as regras para o
            acesso e a utilização das funcionalidades do nosso site.
          </p>
          <p>
            Ao acessar e usar o site, você declara ter mais de 18 anos e que
            leu, compreendeu e aceitou integralmente as condições deste
            documento e da nossa Política de Privacidade.
          </p>
          <p>
            Ao navegar em nosso site, e utilizar suas funcionalidades, você
            concorda automaticamente com os Termos e Condições de Uso em vigor
            na data do seu acesso.
          </p>
        </section>

        {/* 1 - Responsabilidades */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            1. Responsabilidades da W & S HOTEL RESORT LTDA (Mero Hotel
            Boutique)
          </h2>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">
              1.1. Manutenção e Qualidade do Site
            </h3>
            <ul className="mt-2 list-disc list-inside text-neutral-700 space-y-1">
              <li>Preservar a funcionalidade do site e links ativos.</li>
              <li>Exibir informações claras, completas e precisas.</li>
              <li>
                Proteger dados coletados com as melhores práticas disponíveis.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">
              1.2. Disponibilidade do Site
            </h3>
            <p className="mt-2 text-neutral-700">
              Esforçamo-nos para manter a disponibilidade contínua do site.
              Contudo, podem ocorrer indisponibilidades temporárias por motivos
              de manutenção, falhas de comunicação ou eventos externos.
            </p>
            <ul className="mt-2 list-disc list-inside text-neutral-700 space-y-1">
              <li>Restabelecimento rápido do acesso sempre que possível.</li>
              <li>
                Direito de alterar regras, critérios e serviços conforme
                necessário.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">
              1.3. Ausência de Direito à Indenização
            </h3>
            <p className="mt-2 text-neutral-700">
              Não há direito de exigir disponibilidade contínua do site ou
              indenização em caso de indisponibilidade, qualquer que seja o
              motivo.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">
              1.4. Exclusão de Responsabilidade
            </h3>
            <ul className="mt-2 list-disc list-inside text-neutral-700 space-y-1">
              <li>Problemas em equipamentos do usuário.</li>
              <li>
                Danos causados por ataques de terceiros ou falhas de internet.
              </li>
              <li>Navegação em links externos disponibilizados no site.</li>
              <li>
                Confiabilidade das informações encontradas em sites de
                terceiros.
              </li>
            </ul>
          </div>
        </section>

        {/* 2 - Responsabilidades do Usuário */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            2. Suas Responsabilidades como Usuário
          </h2>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm space-y-2">
            <h3 className="text-lg font-semibold">
              2.1. Conduta e Uso Adequado
            </h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-1">
              <li>Utilizar o site de forma ética e adequada.</li>
              <li>Fornecer dados corretos, completos e atualizados.</li>
              <li>Manter login e senha em sigilo.</li>
              <li>
                Reconhecer responsabilidade por acessos realizados após login.
              </li>
              <li>
                Receber comunicações oficiais sem bloqueio por filtros de spam.
              </li>
              <li>Respeitar direitos de propriedade intelectual.</li>
              <li>
                Não acessar áreas restritas ou realizar engenharia reversa.
              </li>
              <li>Não utilizar softwares para coleta automatizada de dados.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">
              2.2. Indenização por Danos
            </h3>
            <p className="mt-2 text-neutral-700">
              O usuário será responsável por indenizar prejuízos causados ao
              site ou a terceiros, inclusive por atos realizados através de sua
              conta.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">
              2.3. Suspensão ou Cancelamento de Conta
            </h3>
            <p className="mt-2 text-neutral-700">
              A conta poderá ser suspensa ou cancelada em caso de fraude,
              violação destes Termos ou da Política de Privacidade.
            </p>
          </div>
        </section>

        {/* 3 - Atendimento */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Canais de Atendimento</h2>
          <ul className="list-disc list-inside text-neutral-700 space-y-1">
            <li>
              Website:{" "}
              <a
                href="https://www.merohotelboutique.com.br"
                className="text-blue-600 hover:underline"
              >
                merohotelboutique.com.br
              </a>
            </li>
            <li>Central Telefônica (24h): +55 (86) 9-9835-7294</li>
            <li>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/meroboutique/"
                className="text-blue-600 hover:underline"
              >
                @meroboutique
              </a>
            </li>
          </ul>
        </section>

        {/* 4 - Modificações */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            4. Modificações Destes Termos
          </h2>
          <p>
            Estes Termos estão sujeitos a constantes melhorias e podem ser
            modificados unilateralmente pela W & S HOTEL RESORT LTDA. As
            alterações entram em vigor 10 dias após a publicação, salvo
            manifestação em contrário.
          </p>
          <p>
            Caso não concorde com as modificações, você deverá interromper o uso
            do site.
          </p>
        </section>

        {/* 5 - Disposições Gerais */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Disposições Gerais</h2>
          <ul className="list-disc list-inside text-neutral-700 space-y-1">
            <li>
              <span className="font-semibold">Não Renúncia:</span> A tolerância
              a descumprimentos não implica renúncia de direitos.
            </li>
            <li>
              <span className="font-semibold">Inaplicabilidade:</span> Caso
              alguma cláusula seja inválida, as demais continuarão válidas.
            </li>
          </ul>
        </section>

        {/* 6 - Lei Aplicável */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            6. Lei Aplicável e Jurisdição
          </h2>
          <p>
            O site é controlado pela W & S HOTEL RESORT LTDA em Teresina, Piauí,
            Brasil. A legislação aplicável é a da República Federativa do
            Brasil, e o foro eleito é o de Teresina-PI.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-14 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
          <p>
            © {new Date().getFullYear()} Grupo Mero — Todos os direitos
            reservados.
          </p>
        </footer>
      </article>
    </main>
  );
}
