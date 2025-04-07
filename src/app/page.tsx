'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PieChart from '@/components/PieChart';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen grid-background flex flex-col justify-center items-center pt-20 pb-16 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-0"></div>
      
      <div className="container mx-auto z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in mb-6">
            <Image
              src="/logo.svg"
              alt="Rise of Trash Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 animate-slide-up">
            RISE OF <span className="blue-gradient-text">TRASH</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Turning Scams Into Justice, Empowering Web3 Victims
          </h2>
          
          <p className="text-gray-300 max-w-2xl mb-10 animate-slide-up" style={{animationDelay: '0.4s'}}>
            In an era where online fraud and financial scams cost victims over 100 billion annually, 
            the need for a decentralized, transparent and community-driven scam detection platform has never been greater.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Link href="/join" className="btn-primary">
              Join the Mission
            </Link>
            <Link href="/whitepaper" className="btn-secondary">
              Read Whitepaper
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

const SummarySection = () => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-16">
          Executive <span className="blue-gradient-text">Summary</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card transform hover:scale-105 transition-transform">
            <div className="flex items-start mb-4">
              <div className="bg-primary-blue p-2 rounded mr-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Expose Crypto Scams</h3>
            </div>
            <p className="text-gray-300">
              Transform victims into community-driven enforcers with tools to identify, report, and track fraudulent projects.
            </p>
          </div>
          
          <div className="card transform hover:scale-105 transition-transform">
            <div className="flex items-start mb-4">
              <div className="bg-primary-blue p-2 rounded mr-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Whistleblower Incentives</h3>
            </div>
            <p className="text-gray-300">
              Create a system where whistleblowers are rewarded for exposing fraudulent schemes before they can harm more victims.
            </p>
          </div>
          
          <div className="card transform hover:scale-105 transition-transform">
            <div className="flex items-start mb-4">
              <div className="bg-primary-blue p-2 rounded mr-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Recovery Support</h3>
            </div>
            <p className="text-gray-300">
              Help victims recover losses through community support, legal resources, and educational tools to prevent future scams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TokenSection = () => {
  const tokenData = [
    { label: 'Staking', value: 50, color: '#00b7ff' },
    { label: 'Presale', value: 40, color: '#33c5ff' },
  ];

  return (
    <div className="py-20 px-4 bg-black/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-16">
          $TRASH <span className="blue-gradient-text">Token</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Tokenomics</h3>
            <p className="text-gray-300 mb-8">
              The $TRASH token serves as both an incentive mechanism and governance tool for the Rise of Trash ecosystem, 
              enabling a transparent, community-driven approach to fighting online fraud.
            </p>
            
            <div className="card">
              <h4 className="text-xl font-bold mb-4">Token Allocation</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-primary-blue rounded-full mr-3"></div>
                  <span>Total Supply: 1,000,000,000 $TRASH</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-primary-blue rounded-full mr-3"></div>
                  <span>50% allocated to staking rewards</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-primary-blue-light rounded-full mr-3"></div>
                  <span>40% available through presale</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-primary-blue rounded-full mr-3"></div>
                  <span>5% transaction fee for ecosystem development</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center">
            <PieChart data={tokenData} size={300} className="transform hover:scale-105 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

const GovernanceSection = () => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-16">
          DAO <span className="blue-gradient-text">Governance</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flow-chart-container p-8 relative">
              <div className="flow-chart-node text-center mb-12 mx-auto w-32">DAO</div>
              
              <div className="flow-chart-line absolute top-20 left-1/2 w-2 h-12 transform -translate-x-1/2"></div>
              
              <div className="grid grid-cols-2 gap-8 relative">
                <div className="flow-chart-node text-center">Stakers</div>
                <div className="flow-chart-node text-center">Proposals</div>
                
                <div className="flow-chart-line absolute top-0 left-1/4 w-1/2 h-2"></div>
              </div>
              
              <ul className="mt-12 space-y-4 arrow-list">
                <li>Staking for insurance-like protection</li>
                <li>Proposals voted on by stakers</li>
                <li>Distribution funds to victims</li>
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-6">Staker-Driven Governance</h3>
            <p className="text-gray-300 mb-6">
              The Rise of Trash DAO operates on a staker-driven governance model, where token holders who stake their $TRASH 
              gain voting rights on platform decisions, fund allocations, and community initiatives.
            </p>
            
            <div className="card mb-6">
              <h4 className="text-xl font-bold mb-4">Key Governance Features</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">1</div>
                  <span>UAE-registered legal entity providing regulatory compliance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">2</div>
                  <span>Transparent voting mechanism for all platform decisions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">3</div>
                  <span>Community-managed fund for victim compensation and legal action</span>
                </li>
              </ul>
            </div>
            
            <Link href="/governance" className="btn-primary">
              Learn More About DAO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReferralSection = () => {
  return (
    <div className="py-20 px-4 bg-black/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-16">
          Referral <span className="blue-gradient-text">System</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Multi-Level Rewards</h3>
            <p className="text-gray-300 mb-6">
              Our referral system incentivizes community growth while rewarding those who help expand the network of 
              whistleblowers, victims, and advocates fighting against crypto scams.
            </p>
            
            <div className="card mb-6">
              <h4 className="text-xl font-bold mb-4">Referral Benefits</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">•</div>
                  <span>Report risky projects/tokens and earn rewards</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">•</div>
                  <span>Community votes determine legitimacy of reports</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">•</div>
                  <span>Early detection prevents further victim exploitation</span>
                </li>
              </ul>
            </div>
            
            <Link href="/referral" className="btn-primary">
              Join Referral Program
            </Link>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="blue-gradient-bg p-4 rounded-t-lg font-bold">
                  <div className="text-2xl text-black">1st</div>
                  <div className="text-sm text-black">Level</div>
                </div>
                <div className="blue-gradient-bg p-4 rounded-t-lg font-bold">
                  <div className="text-2xl text-black">2nd</div>
                  <div className="text-sm text-black">Level</div>
                </div>
                <div className="blue-gradient-bg p-4 rounded-t-lg font-bold">
                  <div className="text-2xl text-black">3rd</div>
                  <div className="text-sm text-black">Level</div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-black/50 border border-primary-blue p-4 rounded-lg text-center">
                  <div className="bg-primary-blue rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div className="text-sm">Report risky</div>
                </div>
                <div className="bg-black/50 border border-primary-blue p-4 rounded-lg text-center">
                  <div className="bg-primary-blue rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-sm">Buy/vote early</div>
                </div>
                <div className="bg-black/50 border border-primary-blue p-4 rounded-lg text-center">
                  <div className="bg-primary-blue rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="text-sm">Early alerts</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="text-xl font-bold blue-gradient-text">5% / 3% / 1%</div>
                <div className="text-sm text-gray-300">Referral Commission Structure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const KYCSection = () => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-16">
          KYC & <span className="blue-gradient-text">Compliance</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="card w-full max-w-md">
              <div className="flex items-center mb-8">
                <div className="bg-primary-blue p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold">User Verification</h4>
                  <p className="text-gray-300">KYC process for all platform participants</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary-blue p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Legal Framework</h4>
                  <p className="text-gray-300">UAE jurisdiction with third-party compliance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-6">Regulatory Compliance</h3>
            <p className="text-gray-300 mb-6">
              Rise of Trash operates within a robust legal framework, ensuring all activities comply with relevant regulations 
              while protecting the interests of legitimate users and victims.
            </p>
            
            <div className="card mb-6">
              <h4 className="text-xl font-bold mb-4">Compliance Features</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">•</div>
                  <span>Secure KYC verification through Ramp Network</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">•</div>
                  <span>Anti-money laundering (AML) protocols</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">•</div>
                  <span>UAE legal entity registration for global operations</span>
                </li>
              </ul>
            </div>
            
            <Link href="/kyc" className="btn-primary">
              Learn About KYC Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CTASection = () => {
  return (
    <div className="py-20 px-4 bg-black/70 grid-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-8">
          Join the <span className="blue-gradient-text">Movement</span>
        </h2>
        
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Whether you&apos;re an investor, a whistleblower, or someone passionate about fighting scams, 
          now is the time to join a mission that pays back in more ways than one.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/join" className="btn-primary">
            Join Now
          </Link>
          <Link href="/whitepaper" className="btn-secondary">
            Read Whitepaper
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SummarySection />
      <TokenSection />
      <GovernanceSection />
      <ReferralSection />
      <KYCSection />
      <CTASection />
    </main>
  );
}
