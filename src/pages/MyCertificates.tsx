import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, ExternalLink, Download, Search, Calendar, MapPin, Wallet } from 'lucide-react';

interface Certificate {
  id: string;
  tokenId: string;
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
  organizer: string;
  mintDate: string;
  ipfsUrl: string;
  status: 'valid' | 'revoked';
}

export default function MyCertificates() {
  const [isConnected, setIsConnected] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock certificates data
  const certificates: Certificate[] = [
    {
      id: '1',
      tokenId: '12345',
      eventTitle: 'Web3 Development Workshop',
      eventDate: '2024-04-15',
      eventLocation: 'Virtual Event',
      organizer: 'Blockchain Education Foundation',
      mintDate: '2024-04-16',
      ipfsUrl: 'ipfs://QmX1234567890abcdef',
      status: 'valid'
    },
    {
      id: '2',
      tokenId: '12346',
      eventTitle: 'Blockchain Security Summit',
      eventDate: '2024-04-10',
      eventLocation: 'San Francisco, CA',
      organizer: 'CyberSec Institute',
      mintDate: '2024-04-11',
      ipfsUrl: 'ipfs://QmY9876543210fedcba',
      status: 'valid'
    },
    {
      id: '3',
      tokenId: '12347',
      eventTitle: 'DeFi Masterclass',
      eventDate: '2024-03-28',
      eventLocation: 'New York, NY',
      organizer: 'DeFi Academy',
      mintDate: '2024-03-29',
      ipfsUrl: 'ipfs://QmZ1122334455667788',
      status: 'valid'
    }
  ];

  const filteredCertificates = certificates.filter(cert =>
    cert.eventTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.organizer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWalletConnect = () => {
    setIsConnected(true);
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wallet className="h-8 w-8 text-blue-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Connect Your Wallet
            </h1>
            
            <p className="text-gray-600 mb-6">
              Connect your wallet to view your NFT certificates
            </p>
            
            <button
              onClick={handleWalletConnect}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Wallet className="h-5 w-5" />
              <span>Connect Wallet</span>
            </button>
            
            <div className="text-center mt-6">
              <Link to="/events" className="text-blue-600 hover:text-blue-700 underline">
                Browse available events
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Certificates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your blockchain-verified certificates and achievements
          </p>
        </div>

        {/* Connected Wallet Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center">
                <Wallet className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Wallet Connected</p>
                <p className="text-gray-600 text-sm">0x1234...5678</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">{certificates.length}</p>
              <p className="text-sm text-gray-600">Total Certificates</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Certificates Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map(certificate => (
              <div
                key={certificate.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Certificate Preview */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                  <div className="text-center">
                    <Award className="h-12 w-12 mx-auto mb-3 opacity-90" />
                    <h3 className="font-bold text-lg mb-2">{certificate.eventTitle}</h3>
                    <p className="text-sm opacity-90">Certificate of Completion</p>
                    <p className="text-xs opacity-75 mt-2">Token ID: #{certificate.tokenId}</p>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>Event: {new Date(certificate.eventDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{certificate.eventLocation}</span>
                    </div>
                    
                    <div className="flex items-start space-x-2 text-sm text-gray-600">
                      <Award className="h-4 w-4 mt-0.5" />
                      <div>
                        <p>Issued by {certificate.organizer}</p>
                        <p>Minted: {new Date(certificate.mintDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="mb-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      certificate.status === 'valid' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {certificate.status === 'valid' ? '✓ Valid' : '✗ Revoked'}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <Link
                      to={`/verify/${certificate.tokenId}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Verify Certificate</span>
                    </Link>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg font-semibold transition-all text-sm flex items-center justify-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                      
                      <a
                        href={certificate.ipfsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg font-semibold transition-all text-sm flex items-center justify-center space-x-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>IPFS</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {searchTerm ? 'No certificates found' : 'No certificates yet'}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm 
                ? 'Try adjusting your search terms'
                : 'Attend events and mint your first certificate!'
              }
            </p>
            <Link
              to="/events"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              <Calendar className="h-5 w-5" />
              <span>Browse Events</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}