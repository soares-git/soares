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
          
          {/* サービス概要 */}
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              個人クリエイターから中小企業、大手法人まで、規模や業種を問わず多様なお客様のニーズにお応えします。SNSアカウントを運営する個人事業主の方から資産活用を検討される企業様、事業拡大を目指す法人様まで、それぞれの状況に合わせた最適なソリューションをご提案いたします。
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              一社一社に真摯に向き合い、独自のマッチング力とシナジー創出の強みを活かした価値提供を行います。
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {/* サービス1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              {/* スマホ表示時の上部画像 */}
              <div className="block sm:hidden w-full h-48 mb-6 relative rounded-lg overflow-hidden">
                <Image
                  src="/service1.jpg"
                  alt="M&A仲介事業"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 pl-0 pr-0 sm:pr-[40%]">
                <h3 className="text-2xl font-bold mb-4 text-blue-700 relative inline-block text-left">
                  M&A仲介事業
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                </h3>
                <p className="text-gray-700 mb-4">
                  多様な分野でのM&A仲介を専門としており、特にYouTubeチャンネルの売買において豊富な実績と専門知識を持っています。豊富なネットワークを活かした独自のマッチング力で、買い手と売り手の最適なマッチングを実現。取引後も長期的な視点でシナジーを生み出し、事業価値を高める連携をサポートします。
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">YouTubeチャンネル</p>
                    <p className="text-gray-700 text-sm">
                      クリエイターの資産価値を最大化し、買い手企業には収益性の高いメディア獲得の機会を提供。チャンネル評価から交渉、譲渡手続きまでワンストップでサポートします。
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">SNSアカウント</p>
                    <p className="text-gray-700 text-sm">
                      X（旧Twitter）やInstagramなどのアカウント売買をサポート。フォロワー数やエンゲージメント率、コンテンツの質などを総合的に評価し、適正価格での取引を実現します。
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">不動産・土地</p>
                    <p className="text-gray-700 text-sm">
                      投資価値の高い物件の発掘から、売却を検討されるオーナー様とのマッチングまで、専門知識を活かした仲介サービスを提供します。
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">事業承継・譲渡</p>
                    <p className="text-gray-700 text-sm">
                      後継者問題から新規事業展開まで、企業の未来を見据えた最適な譲渡プランをご提案。事業の強みを最大限に活かす買い手選定を行います。
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-md border-l-4 border-blue-500">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">当社の強み</span>は「繰り返しの取引」にあります。リピーターを増やすことでより広範なネットワークを構築し、全体的なシナジーを生み出します。M&A後の事業成長をサポートする実践的なマーケティング支援により、取引だけで終わらない継続的な価値創造を提供します。
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-2/5 h-full transform overflow-hidden hidden sm:block">
                <div 
                  className="absolute inset-0"
                  style={{ 
                    clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" 
                  }}
                >
                  <Image
                    src="/service1.jpg"
                    alt="M&A仲介事業"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* サービス2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              {/* スマホ表示時の上部画像 */}
              <div className="block sm:hidden w-full h-48 mb-6 relative rounded-lg overflow-hidden">
                <Image
                  src="/service2.jpg"
                  alt="SNS運用代行"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-0 top-0 w-2/5 h-full transform overflow-hidden hidden sm:block">
                <div 
                  className="absolute inset-0"
                  style={{ 
                    clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)" 
                  }}
                >
                  <Image
                    src="/service2.jpg"
                    alt="SNS運用代行"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-start justify-center pl-0 sm:pl-[40%] pr-0">
                <h3 className="text-2xl font-bold mb-4 text-blue-700 relative inline-block text-left">
                  SNS運用代行
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                </h3>
                <p className="text-gray-700 text-left mb-4">
                  YouTube、X（旧Twitter）、Instagramなど各種SNSプラットフォームの分析から戦略立案、コンテンツ制作まで一責した運用サポートを提供します。フォロワー数増加と収益化を強力に後押しします。M&A事業で培ったSNSアカウントの価値評価ノウハウを活かし、再生数や登録者数、エンゲージメント率などの定量的な指標だけでなく、ブランド力や将来性も含めた総合的な価値向上を目指します。
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">YouTube</p>
                    <p className="text-gray-700 text-sm">チャンネル戦略立案、コンテンツ企画・制作、視聴者分析を実施。アルゴリズムを理解したサムネイル設計や動画構成、SEO対策で再生数と登録者数の増加を実現します。</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">X（旧Twitter）</p>
                    <p className="text-gray-700 text-sm">アカウント運用戦略、ツイート設計、フォロワー獲得施策を実行。トレンドを捕らえたタイムリーな投稿とエンゲージメントを高めるコンテンツ設計で、影響力あるアカウントへと成長させます。</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">Instagram</p>
                    <p className="text-gray-700 text-sm">フィード・ストーリー・リール戦略、ビジュアルデザインの最適化。高品質な写真や動画制作、ハッシュタグ戦略、インフルエンサーマーケティングまで、視覆率とフォロワー数の増加を実現します。</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">クロスプラットフォーム</p>
                    <p className="text-gray-700 text-sm">複数SNSの連携運用、一責したブランディングを実現。各プラットフォームの特性を活かしたコンテンツ配分とリポスト戦略で、相互送客とオーディエンスの拡大を実現します。</p>
                  </div>
                </div>
                

                
                <div className="bg-gray-50 p-3 rounded-md border-l-4 border-blue-500">
                  <p className="text-gray-700 text-sm">
                    当社のSNS運用は「単なる代行」ではなく、マーケティング戦略と資産価値向上を融合させた包括的なアプローチが特長です。M&A事業との連携により、アカウントの将来的な売却も視野に入れた価値最大化を実現します。
                  </p>
                </div>
              </div>
            </div>
            
            {/* サービス3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              {/* スマホ表示時の上部画像 */}
              <div className="block sm:hidden w-full h-48 mb-6 relative rounded-lg overflow-hidden">
                <Image
                  src="/service3.jpg"
                  alt="マーケティング支援"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 pl-0 pr-0 sm:pr-[40%]">
                <h3 className="text-2xl font-bold mb-4 text-blue-700 relative inline-block">
                  マーケティング支援
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                </h3>
                <p className="text-gray-700 mb-4">
                  企業の成長戦略に直結するマーケティング活動を包括的に支援します。M&A、SNS運用、システム開発の知見を活かした独自の視点で、従来の施策では得られない成果を実現。データに基づいた戦略立案から実行、効果測定までトータルにサポートし、持続的な事業成長を促進します。
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">マーケティング戦略策定</p>
                    <p className="text-gray-700 text-sm">市場分析と競合調査に基づく差別化戦略の立案。顧客ニーズの深堀りとターゲット設定の最適化により、限られたリソースで最大の効果を実現します。</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">デジタルマーケティング</p>
                    <p className="text-gray-700 text-sm">SEO、リスティング広告、SNS広告などの戦略立案と運用。検索エンジン最適化と費用対効果の高い広告運用で、投資対効果を最大化します。</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">コンテンツマーケティング</p>
                    <p className="text-gray-700 text-sm">顧客の各段階に響くコンテンツ制作と信頼構築。認知から購入までの各フェーズに最適化されたコンテンツで、ブランドの一貫性を保ちながら共感と信頼を構築します。</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">データ分析・DX</p>
                    <p className="text-gray-700 text-sm">顧客データ管理と自動化施策、マーケティングROI最大化。ウェブ解析とCRMを活用した顧客行動の可視化と、データドリブンな意思決定で継続的な改善を実現します。</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-md border-l-4 border-blue-500">
                  <p className="text-gray-700 text-sm">
                    当社のマーケティング支援は、M&A事業で培った「価値創造」の視点と、SNS運用で磨いた「エンゲージメント向上」のノウハウを融合させた独自のアプローチが特長です。単発の施策ではなく、企業の成長ステージに合わせた包括的な戦略で、持続的な事業拡大を実現します。
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-2/5 h-full transform overflow-hidden hidden sm:block">
                <div 
                  className="absolute inset-0"
                  style={{ 
                    clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" 
                  }}
                >
                  <Image
                    src="/service3.jpg"
                    alt="マーケティング支援"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* サービス4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              {/* スマホ表示時の上部画像 */}
              <div className="block sm:hidden w-full h-48 mb-6 relative rounded-lg overflow-hidden">
                <Image
                  src="/service4.jpg"
                  alt="システム開発・WEB制作"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-0 top-0 w-2/5 h-full transform overflow-hidden hidden sm:block">
                <div 
                  className="absolute inset-0"
                  style={{ 
                    clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)" 
                  }}
                >
                  <Image
                    src="/service4.jpg"
                    alt="システム開発・WEB制作"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-start justify-center pl-0 sm:pl-[40%] pr-0">
                <h3 className="text-2xl font-bold mb-4 text-blue-700 relative inline-block text-left">
                  システム開発・WEB制作
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                </h3>
                <p className="text-gray-700 text-left mb-4">
                  企業のデジタル戦略をサポートするシステム開発からWebサイト構築、効果的なランディングページ制作まで、ビジネス成長に必要なデジタルソリューションをご提供します。他事業で培った「価値創造」と「マッチング」のノウハウを活かし、単なる制作に留まらない事業成果に直結するシステム・サイト構築を実現します。
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">Webサイト制作</p>
                    <p className="text-gray-700 text-sm">企業の強みを最大限に引き出すデザインと構成、SEO対策を含めた総合的なWebブランディング。モバイルファースト設計と高速読み込みを実現し、ユーザー体験を向上させます。</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">ランディングページ制作</p>
                    <p className="text-gray-700 text-sm">コンバージョン率を最大化する高度なマーケティング視点でのLP設計。心理学に基づくデザインとA/Bテストによる継続的な改善で、収益向上に貢献します。</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">業務効率化システム</p>
                    <p className="text-gray-700 text-sm">社内プロセスの分析から最適なシステム設計、使いやすいインターフェースの実現。業務の自動化とデータの一元管理により、人的リソースを本来の価値创造業務に集中させます。</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-800 mb-1">フロントエンド・バックエンド一括開発</p>
                    <p className="text-gray-700 text-sm">UI/UXからデータベース設計まで一貫した開発体制。技術スタックの最適化と連携強化により、高品質なシステムを効率的に構築します。</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-md border-l-4 border-blue-500">
                  <p className="text-gray-700 text-sm">
                    当社のシステム開発・WEB制作は「ワンストップソリューション」の強みを活かし、企画・設計から開発・運用までトータルでサポート。他事業とのシナジーを生かした独自の視点で、競合との差別化を実現する戦略的なデジタルソリューションを提供します。
                  </p>
                </div>
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
                      <td className="py-3">2025年5月14日</td>
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
                      <td className="py-3">M&A仲介事業、SNS運用代行、マーケティング支援、システム開発・WEB制作</td>
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
