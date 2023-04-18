const dataCurrency = {
    "date":"30.03.2023",
    "bank":"PB",
    "baseCurrency":980,
    "baseCurrencyLit":"UAH",
    "exchangeRate":[
        {"baseCurrency":"UAH","currency":"AUD","saleRateNB":12.8319250,"purchaseRateNB":12.8319250,"country":"Australia",flag:"58.1% 12.35%"},
        {"baseCurrency":"UAH","currency":"CAD","saleRateNB":13.2107400,"purchaseRateNB":13.2107400,"saleRate":15.0000000,"purchaseRate":13.0000000,"country":"Canada",flag:"90.45% 19.9%"},
        {"baseCurrency":"UAH","currency":"CZK","saleRateNB":0.6796950,"purchaseRateNB":0.6796950,"saleRate":0.8000000,"purchaseRate":0.6000000,"country":"Czech Republic",flag:"14.95% 72.7%"},
        {"baseCurrency":"UAH","currency":"DKK","saleRateNB":2.5258930,"purchaseRateNB":2.5258930,"country":"Denmark",flag:"74.3% 27.1%"},
        {"baseCurrency":"UAH","currency":"HUF","saleRateNB":0.0612592,"purchaseRateNB":0.0612592,"country":"Hungary",flag:"47.3% 42.5%"},
        {"baseCurrency":"UAH","currency":"ILS","saleRateNB":3.8627380,"purchaseRateNB":3.8627380,"saleRate":4.5000000,"purchaseRate":3.7000000,"country":"Israel",flag:"95.85% 42.4%"},
        {"baseCurrency":"UAH","currency":"JPY","saleRateNB":0.1272593,"purchaseRateNB":0.1272593,"saleRate":0.1500000,"purchaseRate":0.1200000,"country":"Japan",flag:"14.95% 50%"},
        {"baseCurrency":"UAH","currency":"LVL","saleRateNB":0.1272593,"purchaseRateNB":0.1272593,"country":"Latvia",flag:"68.9% 50.02%"},
        {"baseCurrency":"UAH","currency":"LTL","saleRateNB":5.4433850,"purchaseRateNB":5.4433850,"country":"Lithuania",flag:"90.45% 50.1%"},
        {"baseCurrency":"UAH","currency":"NOK","saleRateNB":2.1609570,"purchaseRateNB":2.1609570,"saleRate":2.6000000,"purchaseRate":2.1000000,"country":"Norway",flag:"25.7% 64.9%"},
        {"baseCurrency":"UAH","currency":"SKK","saleRateNB":2.1609570,"purchaseRateNB":2.1609570,"country":"Slovakia",flag:"14.95% 34.9%"},
        {"baseCurrency":"UAH","currency":"SEK","saleRateNB":2.0283750,"purchaseRateNB":2.0283750,"country":"Sweden",flag:"52.69% 80.3%"},
        {"baseCurrency":"UAH","currency":"CHF","saleRateNB":15.6389750,"purchaseRateNB":15.6389750,"saleRate":17.0000000,"purchaseRate":15.5000000,"country":"Switzerland",flag:"58.1% 80.3%"},
        {"baseCurrency":"UAH","currency":"GBP","saleRateNB":23.6324910,"purchaseRateNB":23.6324910,"saleRate":25.8000000,"purchaseRate":24.0000000,"country":"United Kingdom",flag:"4.15% 72.65%"},
        {"baseCurrency":"UAH","currency":"USD","saleRateNB":15.0564130,"purchaseRateNB":15.0564130,"saleRate":15.7000000,"purchaseRate":15.3500000,"country":"USA",flag:"36.5% 34.98%"},
        {"baseCurrency":"UAH","currency":"BYR","saleRateNB":0.0013900,"purchaseRateNB":0.0013900,"country":"Belarus",flag:"9.6% 19.9%"},
        {"baseCurrency":"UAH","currency":"EUR","saleRateNB":18.7949200,"purchaseRateNB":18.7949200,"saleRate":20.0000000,"purchaseRate":19.2000000,"country":"EU",flag:"4.3% 87.6%"},
        {"baseCurrency":"UAH","currency":"GEL","saleRateNB":8.1500890,"purchaseRateNB":8.1500890,"country":"Georgia",flag:"85.1% 34.9%"},
        {"baseCurrency":"UAH","currency":"PLZ","saleRateNB":4.4922010,"purchaseRateNB":4.4922010,"saleRate":5.0000000,"purchaseRate":4.2000000,"country":"Poland",flag:"90.45% 64.9%"},
    ]
}
function show (dataBase) {

    document.write (`<header><span>${dataCurrency.date}</span><span class="header">Exchange rate</span></header><table><tr><th colspan="2" class="center">Country</th><th class="center">Currency</th><th class="left">We buy at</th><th class="left">We sell at</th></tr>`)
        dataBase.exchangeRate.forEach(element =>
            document.write (`<tr><td class="center"><div class="image" style="background-position: ${element.flag};"></div></td><td class="left">${element.country}</td><td class="center">${element.currency}</td><td class="red">${element.purchaseRateNB.toFixed(2)}</td><td class="red">${element.saleRateNB.toFixed(2)}</td></tr>`))
            document.write (`</table>`)
}
        

show (dataCurrency);
      
