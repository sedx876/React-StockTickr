import { iex } from '../config/iex.js'

export const stock = {
  latestPrice: (ticker, callback) => {
    fetch(stock.latestPriceURL(ticker))
    .then((response) => response.json())
    .then((data) => callback(stock.formattedPriceData(data))) 
  },

  latestPriceURL: (ticker) => {
    return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
  },

  formattedPriceData: (data) => {
    const stockData = data[data.length - 1]
      const formattedData = {}
      formattedData.price = stockData.close
      formattedData.date = stockData.date
      formattedData.time = stockData.label
      return formattedData
  }
}