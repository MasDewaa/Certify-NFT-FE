import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wallet, CheckCircle, Shield } from 'lucide-react';

export default function Login() {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleWalletConnect = async () => {
    setIsLoading(true);
    
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnected(true);
      setIsLoading(false);
      
      // Simulate redirect to events page after successful login
      setTimeout(() => {
        navigate('/events');
      }, 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to Certify
            </h1>
            <p className="text-gray-600">
              Connect your wallet to access your certificates
            </p>
          </div>

          <div className="space-y-6">
            {/* Wallet Connection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Connect Your Wallet
              </label>
              
              {!isConnected ? (
                <button
                  onClick={handleWalletConnect}
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 transform hover:scale-105 disabled:transform-none"
                >
                  <Wallet className="h-5 w-5" />
                  <span>
                    {isLoading ? 'Connecting...' : 'Connect Wallet'}
                  </span>
                </button>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-green-800 font-medium">Wallet Connected</p>
                      <p className="text-green-600 text-sm">0x1234...5678</p>
                    </div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-3">
                    <p className="text-green-800 text-sm font-medium">
                      🎉 Login successful! Redirecting to events...
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 text-blue-600">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                  <span className="text-sm">Connecting to your wallet...</span>
                </div>
              </div>
            )}

            {/* Information */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">
                Why connect a wallet?
              </h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Secure authentication without passwords</li>
                <li>• Own your certificates as NFTs</li>
                <li>• Verify authenticity on the blockchain</li>
              </ul>
            </div>

            {/* Support */}
            <div className="text-center text-sm text-gray-600">
              <p>
                Need help connecting your wallet?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                  View our guide
                </a>
              </p>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}