import { 
  User, 
  ChevronRight, 
  Check, 
  Bitcoin,
  TrendingUp,
  Building,
  Search,
  Clock,

} from 'lucide-react';
import { FaDollarSign } from 'react-icons/fa';

function App() {
  // Generate random cash balance between $10,000-$50,000
  const generateCashBalance = (): number => {
    return Math.floor(Math.random() * 40000) + 10000 + Math.random();
  };

  // Generate random savings balance between $0-$1000
  const generateSavingsBalance = (): number => {
    return Math.floor(Math.random() * 1000) + Math.random();
  };

  // Generate random bitcoin balance between $0-$500
  const generateBitcoinBalance = (): number => {
    return Math.floor(Math.random() * 500) + Math.random();
  };

  // Generate random bitcoin percentage change
  const generateBitcoinChange = (): number => {
    return (Math.random() - 0.5) * 10; // -5% to +5%
  };



  // Generate random account numbers
  const generateAccountNumber = (): string => {
    return '••' + Math.floor(Math.random() * 9000 + 1000).toString();
  };

  const generateRoutingNumber = (): string => {
    return '••' + Math.floor(Math.random() * 900 + 100).toString();
  };

  // Generate all dynamic values
  const cashBalance = generateCashBalance();
  const cashDollars = Math.floor(cashBalance);
  const cashCents = Math.floor((cashBalance - cashDollars) * 100);

  const savingsBalance = generateSavingsBalance();
  const savingsDollars = Math.floor(savingsBalance);
  const savingsCents = Math.floor((savingsBalance - savingsDollars) * 100);

  const bitcoinBalance = generateBitcoinBalance();
  const bitcoinDollars = Math.floor(bitcoinBalance);
  const bitcoinCents = Math.floor((bitcoinBalance - bitcoinDollars) * 100);

  const bitcoinChange = generateBitcoinChange();


  const accountNumber = generateAccountNumber();
  const routingNumber = generateRoutingNumber();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile container */}
      <div className="max-w-md mx-auto bg-black min-h-screen relative">
        
     

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-6">
          <h1 className="text-3xl font-bold">Money</h1>
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Cash Balance Card */}
        <div className="mx-0 mb-6">
          <div className="bg-[rgba(26,26,26)] rounded-3xl p-6 relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-gray-400 text-lg mb-2">Cash balance</h2>
                <div className="text-4xl font-bold mb-2">
                  ${cashDollars.toLocaleString()}<span className="text-4xl">.{cashCents.toString().padStart(2, '0')}</span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-500" />
            </div>
            
            <div className="flex gap-4 text-sm text-gray-400 mb-6">
              <span>Account {accountNumber}</span>
              <span>Routing {routingNumber}</span>
            </div>

            <div className="flex gap-4 mb-6">
              <button className="flex-1 bg-[rgba(34,34,34)] hover:bg-[rgba(40,40,40)] text-white py-3 px-4 rounded-2xl font-medium transition-colors">
                Add money
              </button>
              <button className="flex-1 bg-[rgba(34,34,34)] hover:bg-[rgba(40,40,40)] text-white py-3 px-4 rounded-2xl font-medium transition-colors">
                Withdraw
              </button>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">Paychecks</span>
              <span className="text-gray-500 ml-auto">Ready for next paycheck</span>
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Save & Invest Section */}
        <div className="px-0 mb-6">
          <h2 className="text-2xl font-bold mb-4">Save & Invest</h2>
          
          {/* Savings Card */}
          <div className="bg-[rgba(26,26,26)] rounded-3xl p-6 mb-4 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-400 text-lg mb-2">Savings</h3>
                <div className="text-3xl font-bold mb-2">
                  ${savingsDollars.toLocaleString()}<span className="text-3xl">.{savingsCents.toString().padStart(2, '0')}</span>
                </div>
                <p className="text-gray-400 text-sm">Up to 4% interest</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src="/dollar.png" alt="Dollar" className="w-16 h-16" />
                </div>
                <ChevronRight className="w-6 h-6 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Bitcoin Card */}
          <div className="bg-[rgba(26,26,26)] rounded-3xl p-6 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-400 text-lg mb-2">Bitcoin</h3>
                <div className="text-3xl font-bold mb-2">
                  ${bitcoinDollars.toLocaleString()}<span className="text-3xl">.{bitcoinCents.toString().padStart(2, '0')}</span>
                </div>
                <p className={`text-sm ${bitcoinChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {bitcoinChange >= 0 ? '+' : ''}{bitcoinChange.toFixed(2)}% today
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Bitcoin className="w-6 h-6 text-white" />
                </div>
                <ChevronRight className="w-6 h-6 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div className="px-0 mb-8">
          <h2 className="text-2xl font-bold mb-4">Explore</h2>
          
          <div className="flex gap-4">
            {/* Stocks Card */}
            <div className="flex-1 bg-[rgba(26,26,26)] rounded-3xl p-6 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">Stocks</h3>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Taxes Card */}
            <div className="flex-1 bg-[rgba(26,26,26)] rounded-3xl p-6 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">Taxes</h3>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom padding for navigation */}
        <div className="h-24"></div>
        
        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 px-6 py-4 max-w-md mx-auto">
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center gap-1">
              <div className="text-xl font-bold text-white">${cashDollars.toLocaleString()}</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-7 h-5 border-4 border-white relative">
                <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FaDollarSign className="w-6 h-6 text-white transform rotate-12" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <Search className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col items-center gap-1 relative">
              <Clock className="w-6 h-6 text-white" />
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white">3</span>
              </div>
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="w-32 h-1 bg-white/30 rounded-full mx-auto mt-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
