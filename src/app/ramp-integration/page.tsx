'use client';

import React from 'react';

const RampIntegrationPage = () => {
  return (
    <div className="pt-24 pb-16 grid-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6">
            Ramp <span className="blue-gradient-text">Integration</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Instructions for setting up Ramp Network integration for presale access, staking, and KYC/AML flow
          </p>
        </div>
        
        <div className="card max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <p className="mb-6">
            Ramp Network provides a secure and compliant way to handle KYC verification, token purchases, and staking for the Rise of Trash platform. 
            This guide will walk you through the process of setting up Ramp integration once you have your contract address.
          </p>
          
          <div className="bg-primary-blue/20 border border-primary-blue rounded-md p-4 mb-6">
            <h3 className="text-lg font-bold mb-2">Prerequisites</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Smart contract address for the $TRASH token</li>
              <li>Business email address for Ramp developer account</li>
              <li>Company/DAO registration documents</li>
              <li>Website domain (riseoftrash.com)</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card h-full">
              <div className="flex items-center mb-4">
                <div className="bg-primary-blue rounded-full w-10 h-10 flex items-center justify-center text-black font-bold mr-4">1</div>
                <h3 className="text-xl font-bold">Create a Developer Account</h3>
              </div>
              <ul className="space-y-3 pl-14">
                <li>Visit <a href="https://ramp.network" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">https://ramp.network</a></li>
                <li>Click &quot;Get Started&quot; and register a business developer account</li>
                <li>Use an official Rise of Trash DAO email</li>
                <li>Await approval email from Ramp</li>
              </ul>
            </div>
            
            <div className="card h-full">
              <div className="flex items-center mb-4">
                <div className="bg-primary-blue rounded-full w-10 h-10 flex items-center justify-center text-black font-bold mr-4">2</div>
                <h3 className="text-xl font-bold">Setup Project Dashboard</h3>
              </div>
              <ul className="space-y-3 pl-14">
                <li>Go to Dashboard → Create New Project</li>
                <li>Project Name: Rise of Trash</li>
                <li>Use Case: Presale / Token Sale</li>
                <li>Domain: https://riseoftrash.com</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card h-full">
              <div className="flex items-center mb-4">
                <div className="bg-primary-blue rounded-full w-10 h-10 flex items-center justify-center text-black font-bold mr-4">3</div>
                <h3 className="text-xl font-bold">Get API Keys</h3>
              </div>
              <ul className="space-y-3 pl-14">
                <li>In your dashboard, go to Developer → API Keys</li>
                <li>Copy both Public Key and Secret Key</li>
                <li>Store these securely in your .env file</li>
                <li>Never expose the Secret Key in client-side code</li>
              </ul>
            </div>
            
            <div className="card h-full">
              <div className="flex items-center mb-4">
                <div className="bg-primary-blue rounded-full w-10 h-10 flex items-center justify-center text-black font-bold mr-4">4</div>
                <h3 className="text-xl font-bold">Implement Ramp SDK</h3>
              </div>
              <ul className="space-y-3 pl-14">
                <li>Add the Ramp SDK script to your HTML:</li>
                <li><code className="bg-black/50 px-2 py-1 rounded">&lt;script src=&quot;https://buy.ramp.network/&quot; async&gt;&lt;/script&gt;</code></li>
                <li>Or use the React component as shown below</li>
              </ul>
            </div>
          </div>
          
          <div className="card mb-12">
            <h3 className="text-xl font-bold mb-4">React Integration Code</h3>
            <div className="bg-black/50 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm text-gray-300">
{`import { useEffect } from 'react';

const RampIntegration = () => {
  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://buy.ramp.network/';
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  const openRamp = () => {
    if (typeof window !== 'undefined' && window.RampInstantSDK) {
      new window.RampInstantSDK({
        hostAppName: "Rise of Trash",
        hostLogoUrl: "https://riseoftrash.com/logo.png",
        variant: "auto",
        defaultAsset: "USDT",
        defaultFiatCurrency: "USD",
        userAddress: "0xYourUserWallet", // Replace with user's wallet
        // Add your contract address when available
        // swapAsset: "TRASH_CONTRACT_ADDRESS",
      }).show();
    }
  };

  return (
    <button 
      onClick={openRamp}
      className="btn-primary"
    >
      Buy $TRASH Tokens
    </button>
  );
};

export default RampIntegration;`}
              </pre>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card h-full">
              <div className="flex items-center mb-4">
                <div className="bg-primary-blue rounded-full w-10 h-10 flex items-center justify-center text-black font-bold mr-4">5</div>
                <h3 className="text-xl font-bold">Sandbox Testing</h3>
              </div>
              <ul className="space-y-3 pl-14">
                <li>Use <a href="https://sandbox.ramp.network" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">https://sandbox.ramp.network</a> for testing</li>
                <li>Test wallet: 0xTESTADDRESS123</li>
                <li>Verify the complete user flow</li>
                <li>Check webhook logs in dashboard</li>
              </ul>
            </div>
            
            <div className="card h-full">
              <div className="flex items-center mb-4">
                <div className="bg-primary-blue rounded-full w-10 h-10 flex items-center justify-center text-black font-bold mr-4">6</div>
                <h3 className="text-xl font-bold">Move to Production</h3>
              </div>
              <ul className="space-y-3 pl-14">
                <li>Swap to production API keys</li>
                <li>Enable production mode in dashboard</li>
                <li>Update SDK URL to production</li>
                <li>Perform final testing with real KYC</li>
              </ul>
            </div>
          </div>
          
          <div className="card mb-12">
            <h3 className="text-xl font-bold mb-6">Adding Your Contract Address</h3>
            <p className="mb-4">
              Once your $TRASH token contract is deployed and verified, you&apos;ll need to add it to your Ramp configuration:
            </p>
            
            <ol className="space-y-4 pl-6 list-decimal">
              <li>
                <strong>Register Your Token:</strong> In the Ramp dashboard, go to &quot;Assets&quot; and click &quot;Add Custom Token&quot;
              </li>
              <li>
                <strong>Provide Contract Details:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Token Symbol: TRASH</li>
                  <li>Contract Address: Your verified contract address</li>
                  <li>Decimals: 18 (standard for ERC-20)</li>
                  <li>Chain: Ethereum (or your deployment chain)</li>
                </ul>
              </li>
              <li>
                <strong>Update SDK Configuration:</strong> Add your token as the swapAsset in the SDK configuration
                <div className="bg-black/50 p-2 rounded-md mt-2">
                  <code>swapAsset: &quot;TRASH_YOUR_CONTRACT_ADDRESS&quot;</code>
                </div>
              </li>
              <li>
                <strong>Test the Integration:</strong> Perform a complete test transaction to ensure tokens are delivered correctly
              </li>
            </ol>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Support & Documentation</h3>
            <p className="mb-6">
              For additional help with Ramp integration, refer to these resources:
            </p>
            
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://docs.ramp.network" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-blue hover:underline flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Official Ramp Documentation
                </a>
              </li>
              <li>
                <a 
                  href="mailto:developers@ramp.network" 
                  className="text-primary-blue hover:underline flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Ramp Support: developers@ramp.network
                </a>
              </li>
              <li>
                <a 
                  href="https://community.riseoftrash.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-blue hover:underline flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  Rise of Trash Community Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RampIntegrationPage;
