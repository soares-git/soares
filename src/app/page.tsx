            "use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  // タイピングアニメーションのための設定
  const [displayText, setDisplayText] = useState("");
  const [displayCompanyText, setDisplayCompanyText] = useState("");
  const fullText = "Build What's Next";
  const companyText = "Soares Inc.";
  const typingSpeed = 100; // タイピング速度（ミリ秒）
  
  // タイピングアニメーションを実行
  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (displayCompanyText.length < companyText.length) {
      const timeout = setTimeout(() => {
        setDisplayCompanyText(companyText.slice(0, displayCompanyText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, displayCompanyText, fullText, companyText]);
  
  // 各セクションのタイトルのタイピングアニメーション用の状態
  const [aboutTitle, setAboutTitle] = useState("");
  const [servicesTitle, setServicesTitle] = useState("");
  const [companyTitle, setCompanyTitle] = useState("");
  const [partnersTitle, setPartnersTitle] = useState("");
  const [contactTitle, setContactTitle] = useState("");
  
  // 各セクションの参照
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const companyRef = useRef(null);
  const partnersRef = useRef(null);
  const contactRef = useRef(null);
  
  // 各セクションが表示されているかどうかを確認
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
  const isCompanyInView = useInView(companyRef, { once: true, amount: 0.3 });
  const isPartnersInView = useInView(partnersRef, { once: true, amount: 0.3 });
  const isContactInView = useInView(contactRef, { once: true, amount: 0.3 });
  
  // 各セクションのタイトルのフルテキスト
  const aboutFullText = "About us";
  const servicesFullText = "Services";
  const companyFullText = "Company";
  const partnersFullText = "Partners";
  const contactFullText = "Contact Us";
  
  // About usセクションのタイピングアニメーション
  useEffect(() => {
    if (isAboutInView && aboutTitle.length < aboutFullText.length) {
      const timeout = setTimeout(() => {
        setAboutTitle(aboutFullText.slice(0, aboutTitle.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [isAboutInView, aboutTitle, aboutFullText]);
  
  // Servicesセクションのタイピングアニメーション
  useEffect(() => {
    if (isServicesInView && servicesTitle.length < servicesFullText.length) {
      const timeout = setTimeout(() => {
        setServicesTitle(servicesFullText.slice(0, servicesTitle.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [isServicesInView, servicesTitle, servicesFullText]);
  
  // Companyセクションのタイピングアニメーション
  useEffect(() => {
    if (isCompanyInView && companyTitle.length < companyFullText.length) {
      const timeout = setTimeout(() => {
        setCompanyTitle(companyFullText.slice(0, companyTitle.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [isCompanyInView, companyTitle, companyFullText]);
  
  // Partnersセクションのタイピングアニメーション
  useEffect(() => {
    if (isPartnersInView && partnersTitle.length < partnersFullText.length) {
      const timeout = setTimeout(() => {
        setPartnersTitle(partnersFullText.slice(0, partnersTitle.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [isPartnersInView, partnersTitle, partnersFullText]);
  
  // Contact Usセクションのタイピングアニメーション
  useEffect(() => {
    if (isContactInView && contactTitle.length < contactFullText.length) {
      const timeout = setTimeout(() => {
        setContactTitle(contactFullText.slice(0, contactTitle.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [isContactInView, contactTitle, contactFullText]);
  
  // カーソル点滅アニメーションの設定
  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear",
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative min-h-screen overflow-hidden">
        {/* ヒーロー画像 */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <div className="relative w-full h-full">
            <Image 
              src="/hero.jpg" 
              alt="株式会社Soares ヒーロー画像" 
              className="object-cover object-center"
              fill
              priority
              sizes="100vw"
            />
          </div>
          {/* 黒っぽいオーバーレイ */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        {/* コンテンツ */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative inline-block">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 inline-block">
                    {displayText}
                  </h2>
                  {!(displayText.length === fullText.length) && (
                    <motion.span
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-white inline-block ml-1"
                      variants={cursorVariants}
                      animate="blinking"
                    >
                      |  {/* カーソル表示 */}
                    </motion.span>
                  )}
                </div>
                {displayText.length === fullText.length && (
                  <div className="flex items-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white inline-block">
                      {displayCompanyText}
                    </h2>
                    {displayCompanyText.length === companyText.length && (
                      <motion.span
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white inline-block ml-1"
                        variants={cursorVariants}
                        animate="blinking"
                      >
                        |  {/* カーソル表示 */}
                      </motion.span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section id="about" className="py-16 bg-gray-50" ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative mx-auto flex justify-center h-12">
            <h2 className="text-3xl font-bold">
              {aboutTitle}
            </h2>
            {isAboutInView && aboutTitle.length === aboutFullText.length && (
              <motion.span
                className="text-3xl font-bold ml-1"
                variants={cursorVariants}
                animate="blinking"
              >
                |
              </motion.span>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            <div className="flex flex-col h-full md:w-3/5">
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">Mission</h3>
              <p className="text-xl font-semibold mb-6 leading-relaxed text-center md:text-left">「多様な価値を紡ぎ、新たな未来を共創する」</p>
              <div className="flex-grow">
                <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg text-center md:text-left">
                  私たち株式会社Soaresは、個人や企業が持つ潜在的な価値を見出し、それを次のステージへと飛躍させることで、持続可能な成長と新たな可能性を創造します。M&Aによる事業継承、デジタル技術の活用、そして実業の運営を通じて、人と企業の架け橋となり、共に未来を構築していきます。
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg text-center md:text-left">
                  私たちは単なる仲介者ではなく、真のパートナーとして、お客様の「次なるもの」を共に考え、実現へと導きます。信頼関係を基盤に、多様な価値観を尊重し、すべてのステークホルダーにとって価値ある選択肢を提供することで、社会に新たな風を吹き込みます。
                </p>
                <p className="text-gray-700 font-semibold leading-relaxed text-base sm:text-lg text-center md:text-left">
                  Build What&apos;s Next —— <br className="md:hidden" />次の時代を担う価値の創造に、<br className="md:hidden" />私たちは挑戦し続けます。
                </p>
              </div>
            </div>
            <div className="flex items-stretch md:w-2/5">
              <div className="w-full h-full bg-gray-300 rounded-lg relative overflow-hidden">
                <Image
                  src="/about.jpg"
                  alt="About Soares"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section id="services" className="py-16" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative mx-auto flex justify-center h-12">
            <h2 className="text-3xl font-bold">
              {servicesTitle}
            </h2>
            {isServicesInView && servicesTitle.length === servicesFullText.length && (
              <motion.span
                className="text-3xl font-bold ml-1"
                variants={cursorVariants}
                animate="blinking"
              >
                |
              </motion.span>
            )}
          </div>
          <div className="grid grid-cols-1 gap-8">
            {/* サービス1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              <div className="relative z-10 pl-0 pr-[40%]">
                <h3 className="text-xl font-bold mb-4">M&A仲介・事業承継</h3>
                <p className="text-gray-700">
                  デジタルアセットから実店舗まで、多様な事業承継をサポートします。SNSアカウント、ECサイト、不動産、飲食店など、あらゆる価値ある資産の売買をワンストップで実現。経営者様の想いを尊重しながら、次のステージへと橋渡しする専門チームが伴走します。
                </p>
              </div>
              <div className="absolute right-0 top-0 w-2/5 h-full transform overflow-hidden">
                <div 
                  className="absolute inset-0"
                  style={{ 
                    clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" 
                  }}
                >
                  <Image
                    src="/service1.jpg"
                    alt="M&A仲介・事業承継"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* サービス2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-2/5 h-full transform overflow-hidden">
                <div 
                  className="absolute inset-0"
                  style={{ 
                    clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)" 
                  }}
                >
                  <Image
                    src="/service2.jpg"
                    alt="デジタル資産評価・運用"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-start justify-center pl-[40%] pr-0">
                <h3 className="text-xl font-bold mb-4 text-left w-full">デジタル資産評価・運用</h3>
                <p className="text-gray-700 text-left">
                  SNS運用コンサルティングからWebメディア構築まで、デジタル資産の価値最大化をサポート。蓄積されたデータと経験に基づき、継続的な成長と収益化戦略を立案します。保有するデジタル資産の潜在価値を発掘し、長期的な資産形成をご提案します。
                </p>
              </div>
            </div>
            
            {/* サービス3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              <div className="relative z-10 pl-0 pr-[40%]">
                <h3 className="text-xl font-bold mb-4">システム開発・DX推進</h3>
                <p className="text-gray-700">
                  業務効率化から新規サービス創出まで、テクノロジーを活用した事業変革をサポート。お客様のビジョンを形にするWebアプリケーション開発、業務システム構築、AIソリューションの導入など、最新技術を駆使したDX推進を実現します。
                </p>
              </div>
              <div className="absolute right-0 top-0 w-2/5 h-full transform overflow-hidden">
                <div 
                  className="absolute inset-0"
                  style={{ 
                    clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" 
                  }}
                >
                  <Image
                    src="/service3.jpg"
                    alt="システム開発・DX推進"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* サービス4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-2/5 h-full transform overflow-hidden">
                <div 
                  className="absolute inset-0"
                  style={{ 
                    clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)" 
                  }}
                >
                  <Image
                    src="/service4.jpg"
                    alt="ホスピタリティ事業運営"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-start justify-center pl-[40%] pr-0">
                <h3 className="text-xl font-bold mb-4 text-left w-full">ホスピタリティ事業運営</h3>
                <p className="text-gray-700 text-left">
                  飲食店運営のノウハウを活かし、ホスピタリティ事業の立ち上げから運営までをトータルサポート。コンセプト設計、店舗開発、スタッフ教育、収益管理まで、成功に導くためのすべてのプロセスを伴走します。実業とデジタルの両面から、次世代の顧客体験を創造します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company */}
      <section id="company" className="py-16 bg-gray-50" ref={companyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative mx-auto flex justify-center h-12">
            <h2 className="text-3xl font-bold">
              {companyTitle}
            </h2>
            {isCompanyInView && companyTitle.length === companyFullText.length && (
              <motion.span
                className="text-3xl font-bold ml-1"
                variants={cursorVariants}
                animate="blinking"
              >
                |
              </motion.span>
            )}
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">会社概要</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-semibold w-1/3 sm:w-1/4">会社名</td>
                      <td className="py-3">株式会社Soares</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-semibold w-1/3 sm:w-1/4">設立</td>
                      <td className="py-3">2025年5月11日(登記予定日)</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-semibold w-1/3 sm:w-1/4">代表取締役</td>
                      <td className="py-3">田村 翔哉</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-semibold w-1/3 sm:w-1/4">資本金</td>
                      <td className="py-3">500万円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-semibold w-1/3 sm:w-1/4">所在地</td>
                      <td className="py-3">東京都中央区銀座一丁目22番11号 銀座大竹ビジデンス 2F</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-semibold w-1/3 sm:w-1/4">電話番号</td>
                      <td className="py-3">準備中</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-semibold w-1/3 sm:w-1/4">事業内容</td>
                      <td className="py-3">M&A仲介・事業承継、デジタル資産評価・運用、システム開発・DX推進、ホスピタリティ事業運営</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* パートナーセクション */}
      <section id="partners" className="py-16" ref={partnersRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative mx-auto flex justify-center h-12">
            <h2 className="text-3xl font-bold">
              {partnersTitle}
            </h2>
            {isPartnersInView && partnersTitle.length === partnersFullText.length && (
              <motion.span
                className="text-3xl font-bold ml-1"
                variants={cursorVariants}
                animate="blinking"
              >
                |
              </motion.span>
            )}
          </div>
          <div className="flex justify-center items-center p-2">
            <a href="https://e-pace.co.jp/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
              <Image 
                src="/partner1.png" 
                alt="Partner 1" 
                width={250} 
                height={125} 
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-16 bg-gray-100 text-gray-800" ref={contactRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative mx-auto flex justify-center h-12">
            <h2 className="text-3xl font-bold">
              {contactTitle}
            </h2>
            {isContactInView && contactTitle.length === contactFullText.length && (
              <motion.span
                className="text-3xl font-bold ml-1"
                variants={cursorVariants}
                animate="blinking"
              >
                |
              </motion.span>
            )}
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mb-8">
              ご質問やお見積りのご依頼など、お気軽にお問い合わせください。
            </p>
            
            <div className="flex flex-col items-center justify-center space-y-6 mb-10">
              <div className="flex items-center">
                <svg className="w-8 h-8 mr-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-2xl">info@soares.jp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-400">&copy; 2025 Soares Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
