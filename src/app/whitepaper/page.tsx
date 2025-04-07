'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PieChart from '@/components/PieChart';

const WhitepaperPage = () => {
  const [downloadClicked, setDownloadClicked] = useState(false);
  
  const tokenData = [
    { label: 'Staking', value: 50, color: '#00b7ff' },
    { label: 'Presale', value: 40, color: '#33c5ff' },
  ];

  const utilityData = [
    { label: 'Utility', value: 60, color: '#00b7ff' },
    { label: 'Max Supply', value: 40, color: '#33c5ff' },
  ];

  return (
    <div className="pt-20 pb-16 grid-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6">
            RISE OF <span className="blue-gradient-text">TRASH</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8">WHITEPAPER</h2>
          
          <div className="flex justify-center mb-8">
            <button 
              onClick={() => setDownloadClicked(true)}
              className="btn-primary flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
          </div>
          
          {downloadClicked && (
            <div className="bg-primary-blue/20 border border-primary-blue rounded-md p-4 max-w-2xl mx-auto mb-8">
              <p>
                The PDF whitepaper will be available for download once the contract address is finalized. 
                Please check back soon or join our community for updates.
              </p>
            </div>
          )}
        </div>
        
        {/* Introduction Section */}
        <div className="card mb-16 max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 mb-6">
            In an era where online fraud and financial scams cost victims over 100 billion annually, the need for a decentralized, 
            transparent and community-driven scam detection platform has never been greater. TRASH token ($TRASH) emerges as the 
            foundation of the Rise of Trash (RoT) ecosystem, a revolutionary decentralized technology-driven platform dedicated to 
            fighting scams, protecting victims, and rewarding active contributors to scam awareness and prevention.
          </p>
          
          <p className="text-lg text-gray-300 mb-6">
            The Rise of Trash way isn&apos;t the traditional slow, costly, and often ineffective method of scam prevention. Instead, 
            it harnesses decentralized technology to create a transparent, community-driven ecosystem where victims can share their 
            experiences, whistleblowers are incentivized to reveal fraudulent schemes, and active participants contribute to scam 
            awareness and prevention. Victims can tokenize their scam stories and invite the community to share in the recovery 
            through individual staking efforts, whistleblowers are incentivized to expose fraudulent schemes, and community members 
            earn rewards for uncovering and reporting scams.
          </p>
          
          <p className="text-lg text-gray-300">
            $TRASH fuels the ecosystem, serving as both an incentive mechanism and a governance tool for platform participants. 
            With a strong focus on transparency, decentralization, and economic empowerment, $TRASH is redefining the fight against 
            online fraud, ensuring that victims and advocates alike have the tools and incentives to create a safer digital world.
          </p>
        </div>
        
        {/* Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-8">
            The Story Behind <span className="blue-gradient-text">Rise of Trash</span>
          </h2>
          
          <div className="card max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              The idea for Rise of Trash was born out of frustration with a broken system. One where victims are often Trashed, 
              unable to recover their losses, and ignored by traditional institutions. Millions of people fall prey to fraudulent 
              schemes every year, yet legal processes are slow, expensive, and often ineffective.
            </p>
            
            <p className="text-lg text-gray-300">
              Seeing this widespread injustice, a group of blockchain enthusiasts, cybersecurity experts, and victims of scam came 
              together with a vision: to create a decentralized movement that enables individuals to fight back.
            </p>
          </div>
        </div>
        
        {/* Why It Matters Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-8">
            Why Rise of Trash <span className="blue-gradient-text">Matters Now</span>
          </h2>
          
          <div className="card max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              The digital landscape is evolving at an unprecedented pace, and with it, scams are becoming more sophisticated, 
              global, and difficult to track. Traditional fraud prevention methods are failing to keep up, leaving victims with 
              little to no recourse.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">The Rise of Digital Finance</h3>
              <p className="text-gray-300">
                With the explosion of cryptocurrency, decentralized finance (DeFi), and online investments, scammers now have more 
                tools than ever to exploit users.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Lack of Effective Regulation</h3>
              <p className="text-gray-300">
                Many fraudulent operations operate across borders, making it nearly impossible for authorities to take action. 
                Legal systems are slow, outdated, and often ill-equipped to handle blockchain-based crimes.
              </p>
            </div>
            
            <p className="text-lg text-gray-300">
              Rise of Trash offers a platform that aligns with this urgent demand, ensuring that victims and fraud fighters have 
              the tools they need.
            </p>
          </div>
        </div>
        
        {/* Token Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-8">
            $TRASH <span className="blue-gradient-text">Token</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <div className="card h-full">
                <h3 className="text-2xl font-bold mb-6">Token Allocation</h3>
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
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-primary-blue rounded-full mr-3"></div>
                    <span>1 billion (1,000,000,000) ERC-20 tokens</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-primary-blue-light rounded-full mr-3"></div>
                    <span>Max supply with deflationary mechanism</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center">
              <PieChart data={tokenData} size={250} className="transform hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
        
        {/* Utility Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-8">
            $TRASH <span className="blue-gradient-text">Utility</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="order-2 md:order-1">
              <PieChart data={utilityData} size={250} className="transform hover:scale-105 transition-transform mx-auto" />
            </div>
            
            <div className="order-1 md:order-2">
              <div className="card h-full">
                <h3 className="text-2xl font-bold mb-6">Token Utility</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-4 h-4 bg-primary-blue rounded-full mr-3 mt-1"></div>
                    <span>Utility for platform access, rewards, and governance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 bg-primary-blue rounded-full mr-3 mt-1"></div>
                    <span>Proposals voted on by stakers to determine platform direction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 bg-primary-blue rounded-full mr-3 mt-1"></div>
                    <span>Funds distributed to victims and legal support initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 bg-primary-blue rounded-full mr-3 mt-1"></div>
                    <span>Staking rewards for active community participation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 bg-primary-blue rounded-full mr-3 mt-1"></div>
                    <span>Whistleblower incentives for reporting scams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* DAO Governance Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-8">
            DAO <span className="blue-gradient-text">Governance</span>
          </h2>
          
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Staker-Driven Governance</h3>
            <p className="text-lg text-gray-300 mb-6">
              The Rise of Trash DAO operates on a staker-driven governance model, where token holders who stake their $TRASH 
              gain voting rights on platform decisions, fund allocations, and community initiatives.
            </p>
            
            <div className="flow-chart-container p-8 relative mb-8">
              <div className="flow-chart-node text-center mb-12 mx-auto w-32">DAO</div>
              
              <div className="flow-chart-line absolute top-20 left-1/2 w-2 h-12 transform -translate-x-1/2"></div>
              
              <div className="grid grid-cols-2 gap-8 relative">
                <div className="flow-chart-node text-center">Stakers</div>
                <div className="flow-chart-node text-center">Proposals</div>
                
                <div className="flow-chart-line absolute top-0 left-1/4 w-1/2 h-2"></div>
              </div>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">•</div>
                <span>Staking provides insurance-like protection for the ecosystem</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">•</div>
                <span>Proposals are voted on by stakers to determine platform direction</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">•</div>
                <span>Distribution of funds to victims and legal support initiatives</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">•</div>
                <span>UAE-registered legal entity providing regulatory compliance</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Referral System Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-8">
            Referral <span className="blue-gradient-text">System</span>
          </h2>
          
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Multi-Level Rewards</h3>
            <p className="text-lg text-gray-300 mb-6">
              Our referral system incentivizes community growth while rewarding those who help expand the network of 
              whistleblowers, victims, and advocates fighting against crypto scams.
            </p>
            
            <div className="relative w-full max-w-md mx-auto mb-8">
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
            
            <ul className="space-y-4">
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
              <li className="flex items-start">
                <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">•</div>
                <span>Three-tier referral system with 5%, 3%, and 1% commission structure</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* KYC Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-8">
            KYC & <span className="blue-gradient-text">Compliance</span>
          </h2>
          
          <div className="card max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center">
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
            
            <h3 className="text-2xl font-bold mb-6">Regulatory Compliance</h3>
            <p className="text-lg text-gray-300 mb-6">
              Rise of Trash operates within a robust legal framework, ensuring all activities comply with relevant regulations 
              while protecting the interests of legitimate users and victims.
            </p>
            
            <ul className="space-y-4">
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
              <li className="flex items-start">
                <div className="w-6 h-6 bg-primary-blue rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-black font-bold">•</div>
                <span>Third-party compliance provider for ongoing regulatory adherence</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-8">
            <span className="blue-gradient-text">Disclaimer</span>
          </h2>
          
          <div className="card max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              This whitepaper is for informational purposes only and does not constitute financial advice, investment recommendation, 
              or solicitation of any kind. The $TRASH token is a utility token designed for use within the Rise of Trash ecosystem 
              and is not intended as an investment vehicle.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              Cryptocurrency investments involve significant risk, and potential purchasers should conduct their own research and 
              consult with financial advisors before making any decisions. The Rise of Trash team makes no guarantees regarding 
              the future value or utility of the $TRASH token.
            </p>
            
            <p className="text-lg text-gray-300">
              By participating in the Rise of Trash ecosystem, users acknowledge that they have read and understood this disclaimer 
              and agree to comply with all applicable laws and regulations in their jurisdiction.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
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
            <a 
              href="https://community.riseoftrash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitepaperPage;
