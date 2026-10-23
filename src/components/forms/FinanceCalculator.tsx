import React, { useState } from 'react';
import { Calculator, IndianRupee, Percent, Calendar, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from '../common/Button';

interface FinanceCalculatorProps {
  initialPrice?: number;
  modelName?: string;
  className?: string;
}

export const FinanceCalculator: React.FC<FinanceCalculatorProps> = ({
  initialPrice = 85000,
  modelName = 'Hero Motorcycle / Scooter',
  className = '',
}) => {
  const [vehiclePrice, setVehiclePrice] = useState(initialPrice);
  const [downPayment, setDownPayment] = useState(Math.round(initialPrice * 0.15));
  const [tenureMonths, setTenureMonths] = useState(24);
  const [interestRate, setInterestRate] = useState(8.5);

  // Loan Calculation
  const principal = Math.max(0, vehiclePrice - downPayment);
  const monthlyRate = interestRate / 12 / 100;
  
  const monthlyEmi =
    principal > 0 && monthlyRate > 0
      ? Math.round((principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1))
      : 0;

  const totalAmount = monthlyEmi * tenureMonths + downPayment;
  const totalInterest = Math.max(0, totalAmount - vehiclePrice);

  const getWhatsAppLoanUrl = () => {
    const text = `Hello Kosmo Hero Finance Desk,\nI would like to apply for retail finance via Hero FinCorp for *${modelName}*.\n\n*Vehicle Price:* ₹${vehiclePrice.toLocaleString('en-IN')}\n*Down Payment:* ₹${downPayment.toLocaleString('en-IN')}\n*Tenure:* ${tenureMonths} Months\n*Estimated EMI:* ₹${monthlyEmi.toLocaleString('en-IN')}/month\n\nPlease let me know the documentation needed for spot approval.`;
    return `https://wa.me/917045169141?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className={`bg-white rounded-sm border border-gray-200 shadow-sm p-6 sm:p-8 ${className}`}>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ee2326] mb-1">
        <Calculator className="w-4 h-4" />
        <span>Hero FinCorp DigiFin Estimator</span>
      </div>
      <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-2">
        Instant EMI Calculator
      </h3>
      <p className="text-xs text-gray-500 mb-6">
        Customize your loan terms for {modelName} with zero hidden charges and competitive interest rates.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Inputs */}
        <div className="space-y-6">
          {/* Vehicle Price */}
          <div>
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              <span>Ex-Showroom Price</span>
              <span className="font-mono text-[#ee2326]">₹ {vehiclePrice.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min={50000}
              max={250000}
              step={2000}
              value={vehiclePrice}
              onChange={(e) => {
                const p = Number(e.target.value);
                setVehiclePrice(p);
                if (downPayment > p) setDownPayment(Math.round(p * 0.2));
              }}
              className="w-full accent-[#ee2326] cursor-pointer"
            />
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              <span>Down Payment</span>
              <span className="font-mono text-gray-900">₹ {downPayment.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min={4999}
              max={Math.round(vehiclePrice * 0.7)}
              step={1000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full accent-[#ee2326] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>Min ₹ 4,999</span>
              <span>{(downPayment / vehiclePrice * 100).toFixed(0)}% of total</span>
            </div>
          </div>

          {/* Tenure Selection */}
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Loan Duration (Months)
            </span>
            <div className="grid grid-cols-4 gap-2">
              {[12, 24, 36, 48].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTenureMonths(t)}
                  className={`py-2 text-xs font-bold uppercase rounded-sm border transition-colors cursor-pointer ${
                    tenureMonths === t
                      ? 'bg-[#181818] text-white border-[#181818]'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {t} M
                </button>
              ))}
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              <span>Annual Interest Rate (ROI)</span>
              <span className="font-mono text-gray-900">{interestRate}% p.a.</span>
            </div>
            <input
              type="range"
              min={6.99}
              max={14.0}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-[#ee2326] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>Special Festive 6.99%</span>
              <span>Standard 14%</span>
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-sm border border-neutral-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#ee2326] mb-2">
              <span>Monthly Installment</span>
              <Sparkles className="w-4 h-4" />
            </div>

            <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
              ₹ {monthlyEmi.toLocaleString('en-IN')}
              <span className="text-xs text-gray-400 font-normal ml-2">/ month</span>
            </div>

            <div className="space-y-3 py-4 border-t border-neutral-800 text-xs text-gray-300">
              <div className="flex justify-between">
                <span>Principal Loan Amount:</span>
                <span className="font-mono font-bold text-white">₹ {principal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Interest Payable:</span>
                <span className="font-mono font-bold text-white">₹ {totalInterest.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount Paid (with DP):</span>
                <span className="font-mono font-bold text-[#ee2326]">₹ {totalAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800">
            <a
              href={getWhatsAppLoanUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-sm bg-[#ee2326] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#d30000] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Apply Spot Approval via WhatsApp</span>
            </a>
            <span className="block text-[10px] text-gray-500 text-center mt-2">
              15-minute spot sanction across Jalandhar, Ludhiana, Dasuya & Hoshiarpur.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
