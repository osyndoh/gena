'use client';

import { useState } from 'react';

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [isDonating, setIsDonating] = useState(false);

  const handleDonate = async (e) => {
    e.preventDefault();
    setIsDonating(true);

    try {
      const response = await fetch('/api/pesapal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          currency: 'KES',
          description: 'Donation to The Gena Initiative',
          callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
          notification_id: `${process.env.NEXT_PUBLIC_APP_URL}/api/pesapal/ipn`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to initiate donation.');
      }

      const { paymentUrl } = await response.json();
      window.location.href = paymentUrl;
    } catch (error) {
      console.error('Error initiating donation:', error);
      alert('There was an error processing your donation. Please try again.');
      setIsDonating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Support The Gena Initiative
        </h1>
        <form onSubmit={handleDonate}>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
              Donation Amount (KES)
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
              placeholder="Enter amount"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isDonating}
            className="w-full bg-[#1e3a5f] text-white hover:bg-[#1e3a5f] px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDonating ? 'Processing...' : 'Donate Now'}
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4 text-sm">
          You will be redirected to Pesapal to complete your donation.
        </p>
      </div>
    </div>
  );
}
