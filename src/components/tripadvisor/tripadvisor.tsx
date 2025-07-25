"use client";

import Image from "next/image";
import Link from "next/link";

export const TripAdvisorWidget = () => {
  return (
    <Link
      href="https://www.tripadvisor.com.br/Hotel_Review-g3844531-d21510631-Reviews-Mero_Hotel_Boutique-Barra_Grande_Cajueiro_da_Praia_State_of_Piaui.html"
      target="_blank"
      className="fixed bottom-24 border border-l-0 shadow bg-white flex justify-end w-12 hover:w-18 transition-all duration-300 hover:shadow-3xl"
    >
      <Image
        src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2025_L.png"
        alt="TripAdvisor"
        width={50}
        height={50}
        id="CDSWIDCOELOGO"
        className="object-cover"
      />
    </Link>
  );
};

// const TripAdvisorWidget = () => {
//   useEffect(() => {
//     // Criar e adicionar o script do TripAdvisor
//     const script = document.createElement("script");
//     script.src =
//       "https://www.jscache.com/wejs?wtype=certificateOfExcellence&uniq=993&locationId=21510631&lang=pt&year=2025&display_version=2";
//     script.async = true;
//     script.setAttribute("data-loadtrk", "");
//     script.onload = function () {
//       (this as any).loadtrk = true;
//     };

//     document.body.appendChild(script);

//     // Cleanup: remover o script quando o componente for desmontado
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div
//       id="TA_certificateOfExcellence993"
//       className="TA_certificateOfExcellence"
//     >
//       <ul id="q9bxAGiJTTE" className="TA_links Unhel5qnfdP">
//         <li id="A2vLJGMnlOGY" className="MO7VNutEtv">
//           <a
//             target="_blank"
//             href="https://www.tripadvisor.com.br/Hotel_Review-g3844531-d21510631-Reviews-Mero_Hotel_Boutique-Barra_Grande_Cajueiro_da_Praia_State_of_Piaui.html"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2025_L.png"
//               alt="TripAdvisor"
//               className="widCOEImg"
//               id="CDSWIDCOELOGO"
//             />
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };
