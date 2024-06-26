import "@/assets/scss/style.scss";

export const metadata = {
  title: "Next.js를 이용한포트폴리오 사이트",
  description: "Next.js를 이용한 포트폴리오 사이트 입니다!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.ico" />
      <body>{children}</body>
    </html>
  );
}
