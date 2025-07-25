import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2025_L.png"
      ),
    ],
  },
};

export default nextConfig;
