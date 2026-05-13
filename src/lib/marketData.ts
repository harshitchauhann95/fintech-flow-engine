// src/lib/marketData.ts

export interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  isUp: boolean;
}

// Simulating an API endpoint or using a public API. 
// Note: In production, replace the URL with your actual stock API provider (e.g., AlphaVantage, Finnhub).
export async function fetchMarketData(symbols: string[]): Promise<MarketData[]> {
  try {
    // Simulated API Call
    // In a real scenario:
    // const response = await fetch(`https://api.example.com/quotes?symbols=${symbols.join(',')}`);
    // if (response.status === 429) throw new Error('API_LIMIT_REACHED');
    
    // Simulating network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Simulate API Limit randomly for demonstration purposes (10% chance)
    if (Math.random() > 0.9) {
      throw new Error('API_LIMIT_REACHED');
    }

    // Mock response based on requested symbols
    const data = symbols.map(symbol => {
      // Generate some random fluctuation
      const basePrice = symbol.includes('BTC') ? 64000 : symbol.includes('ETH') ? 3400 : 2000;
      const changePercent = (Math.random() * 4) - 2; // -2% to +2%
      const change = basePrice * (changePercent / 100);
      const currentPrice = basePrice + change;

      let name = symbol;
      if (symbol === 'RELIANCE.BSE') name = 'Reliance Ind.';
      if (symbol === 'TCS.NSE') name = 'TCS';
      if (symbol === 'HDFCBANK.NSE') name = 'HDFC Bank';

      return {
        symbol,
        name,
        price: currentPrice,
        change,
        changePercent,
        isUp: change >= 0
      };
    });

    return data;
  } catch (error: any) {
    if (error.message === 'API_LIMIT_REACHED' || error.status === 429) {
      throw new Error('API_LIMIT_REACHED');
    }
    throw new Error('FAILED_TO_FETCH');
  }
}
