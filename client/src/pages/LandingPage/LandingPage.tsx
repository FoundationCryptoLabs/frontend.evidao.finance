import { Collapse } from "bootstrap";
import { format, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaMedium, FaTwitter } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import eviLogo from "../../assets/images/evi_logo.svg";
import feature1 from "../../assets/images/feature-1.svg";
import feature2 from "../../assets/images/feature-2.svg";
import feature4 from "../../assets/images/feature-4.svg";
import xbtcLogo from "../../assets/images/logo.png";
import { ReactComponent as Logo } from "../../assets/images/xbtc_logo.svg";
import { Collapsible } from "../../Components/Collapsible/Collapsible";

type Props = {};

type IBlogPost = {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: {};
  categories: string[];
};

export const LandingPage = (props: Props) => {
  const posts2 = [
    {
      title: "The Stablecoin to End All Stablecoins — xBTC",
      pubDate: "2022-03-08 10:03:34",
      link: "https://evidao.medium.com/the-stablecoin-to-end-all-stablecoins-xbtc-c4ab342e7107?source=rss-b1aac17391d4------2",
      guid: "https://medium.com/p/c4ab342e710s7",
      author: "EVI DAO",
      thumbnail:
        "https://cdn-images-1.medium.com/max/770/1*wNK8GCCVvT8QgUJ8ldZ2HQ.jpeg",
      description:
        '\n<h3>The Stablecoin to End All Stablecoins — xBTC</h3>\n<p><strong>I. Introduction</strong></p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/770/1*wNK8GCCVvT8QgUJ8ldZ2HQ.jpeg"></figure><p>The volatility of cryptocurrencies has become its definitive feature at this point. Just this year itself, we have seen multiple dips in values of various cryptocurrencies; which may have been foreseen by keen observers post the all-time high levels observed in November to early December, 2021; even so, it is undeniable that such extreme volatility severely caps mainstream utilization of cryptos for DeFi purposes and otherwise. In order to access the benefits of cryptos for DeFi, while also providing scope for value appreciation, a distinctive subset of cryptos have emerged– stablecoins.</p>\n<p>However, the historical performance of these stablecoins leaves much to be desired; while they may have been able to provide “stability” with respect to its USD price, the cost for such stability has been an utter lack of value appreciation, which severely limits its appeal and functionality. The need of the hour is for a stablecoin that provides a complete solution, one that hits all sides of the equation– the properties of stability, of inflation-resistant price appreciation, while also being decentralized. One of the ways in which this can be achieved is through the utilization of a crypto-native stablecoin, and this is exactly where xBTC comes in. But before this synergistic and dynamic solution to the predicament of erstwhile one-sided stablecoins can be discussed, we must understand what these solutions were and why they are sub-optimal.</p>\n<p><strong>II. A Short History on Stablecoins</strong></p>\n<p>Stablecoins are not a new phenomenon in the world of crypto. MakerDAO (DAI) stablecoin, established in December, 2017, sought to tether its value to the USD in order to function as a coin that, on one hand, obtains the benefits of secure and instant-time transactions that cryptocurrencies provide, while at the same time protecting itself against the wild volatility that is the hallmark of cryptocurrencies. Reflexer (RAI), a more recent entrant in 2021, sought a similar <em>modus operandi</em>, with the major difference being that its value was to be determined by market forces of supply-demand (as opposed to being pegged with the USD), and which is to be regulated by its DAO community.</p>\n<p>Yet, both of these suffer from severe bottlenecks that prevent it from actually serving its purpose. In the case of DAI, as its value is pegged to the USD, it negates the value appreciation potential that cryptocurrencies possess, and this also hampers its potential to be inflation resistant. While RAI’s DAO community could theoretically rectify the aforementioned obstacle, the community lacks any real incentive towards appreciating the value of the coin — a fact that is evidenced by its empirical market rate continuing to hover around the 3$ mark.</p>\n<p>Crucially, both these coins (as well as any stablecoin presently in existence) fail to detach itself from fiat currencies, and in the process access the crypto market and its legitimate scope for price appreciation. DAI actually links its value entirely to a centralized fiat currency, and thereby sacrifices the very ethos of decentralization that lies at the core of cryptos. While it may seem that RAI is decentralized due to its price being determined by its community, the decision-making underlying such operation is paralyzed due to the community’s inability to reach any consensus; and further, RAI is denominated in USD — which inextricably links its exposure to the centralized currency. The landscape for stablecoins is calling out for a truly crypto-native stablecoin, that without any exposure to a fiat currency (hence remaining decentralized), is able to both capture the price appreciation as well as temper the volatility that have become the hallmarks of cryptos.</p>\n<p><strong>III. Not All Stablecoins Are Made Equal — The Superiority of xBTC</strong></p>\n<p>In comes xBTC. A bitcoin-backed reserve currency, here we find a genuinely inflation and volatility resistant stablecoin, that at the same time provides tangible avenues to capture the asset-appreciation of its underlying collateral — Bitcoin, while also stabilizing its value against market volatility. This is the first crypto-native stablecoin, that allows its holders to obtain a stable asset that has zero exposure to any centralized asset, and it achieves this feat with the utilization of the EVI DAO protocol.</p>\n<p>Briefly, the EVI DAO is a protocol comprising a dynamic, multi-layered mechanism — consisting of Collateralized Debt Positions (CDPs), inflation and volatility adjusted algorithmic redemption rates that do not just depend on the current BTC price, and is further backed by a probabilistic model for the floor of bitcoin prices, which ensures collateral sufficiency and thus redeemability of xBTC for BTC at all times. Although the underlying technology can get complicated, what must be kept in mind is the core element of this novel protocol — i.e., even in the worst-case scenarios, it provides a slow but gradual return, with what may be referred to as a “dampened bitcoin price”.</p>\n<p>With xBTC, token holders will never have to worry about the large volatility of its underlying collateral — BTC prices — as the return it produces is determined by a Simple Moving Average calculation based on its exchange rates over the past 1458-day period. This means that in both situations of a bull or a bear run, the exchange rate of xBTC is stable and absorbs the demand/supply shocks of BTC price like no other stablecoin, thereby providing the stability that DAI or RAI provides, while providing the genuine potential for market appreciation which neither of the above entail. Further, given that the redemption rate is algorithmically crypto-native — i.e., it is not exposed in any manner to a fiat currency and nor is it contingent on a consensus-based decision-making process, it avoids the paralyzing pitfalls of RAI that have failed to make it a crypto-native and inflation-resistant stablecoin.</p>\n<p>An algorithmically computed crypto-native stablecoin, which provides a return that is both inflation resistant and non-volatile, are the defining features of xBTC. Although the algorithm providing for such a redemption rate is an important feature of stabilizing the price, it is not the only mechanism in place to protect its holders from sweeping market volatility.</p>\n<p><strong>IV. XSR</strong></p>\n<p>xBTC savings rate is also controlled by governance as an additional means of securing the peg using the redemption rate. When xBTC starts trading above the rate of redemption the xBTC savings rate (XSR) can be increased to encourage more BTC to be locked up causing an increase in the supply of xBTC which eventually brings down the price to the redemption rate. The redemption rate serves as the floor of the trading price for xBTC. The following mechanisms are in place to prevent upward volatility and speculation beyond redemption rate: EVI token holders can decide to reduce xBTC savings rate (XSR) making it cheaper to borrow xBTC hence increasing the supply. Conversely, if xBTC is trading at or close to redemption rate, EVI holders may vote to increase XSR to maximize internal revenue thus acting like a central bank.</p>\n<p><strong>V. Test-Cases</strong></p>\n<p>As with any novel solution, describing the use-cases of xBTC is the most efficient display of its functionality, and here we discuss two polar instances of the same. Firstly, take the case of the 2019 — here, while USD experienced a 6% inflation, BTC appreciated close to a cool 100% (of course, with volatility). For DAI, it meant that, by virtue of it tethering its value to the USD, it failed miserably to capitalize on the massive rise in BTC value, thereby missing out on the appreciation of value that makes cryptos so attractive. However, xBTC, due to the operation of its dynamic protocol, provides a smaller net gain of about 50%, without the extreme volatility of BTC.</p>\n<p>Secondly, let’s consider the contra case — that of the BTC crash of 2018. In this year, BTC crashed to about 50% of its value, volatility characterizing its every move. xBTC manages to overcome the crash by maintaining a redemption rate that continues a slow but gradual, sustainable rise, and also without becoming under-collateralized at any point.</p>\n<p><strong>VI. Conclusion</strong></p>\n<p>With xBTC, token holders have access to the first crypto-native stablecoin that genuinely serves its titular purpose: firstly, of being volatility resistant; and secondly, of being able to capture market gains that have made cryptocurrencies such a lucrative venture for so many. Its two primary competitors (DAI, RAI) are incomplete solutions, as while they have been able to achieve the volatility-resistant functionality, their coins fail to capture market appreciation that cryptos have the potentiality of providing in abundance. By virtue of its novel collateralization of BTC and regulation by the dynamic and multi-layered EVI DAO protocol, token holders have access to a complex but synergistic mechanism that returns a “dampened Bitcoin price”, i.e., a baseline return on BTC price that protects token holders in all situations. This is the stablecoin to end all stablecoins, and is one not to be taken lightly.</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=c4ab342e7107" width="1" height="1" alt="">\n',
      content:
        '\n<h3>The Stablecoin to End All Stablecoins — xBTC</h3>\n<p><strong>I. Introduction</strong></p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/770/1*wNK8GCCVvT8QgUJ8ldZ2HQ.jpeg"></figure><p>The volatility of cryptocurrencies has become its definitive feature at this point. Just this year itself, we have seen multiple dips in values of various cryptocurrencies; which may have been foreseen by keen observers post the all-time high levels observed in November to early December, 2021; even so, it is undeniable that such extreme volatility severely caps mainstream utilization of cryptos for DeFi purposes and otherwise. In order to access the benefits of cryptos for DeFi, while also providing scope for value appreciation, a distinctive subset of cryptos have emerged– stablecoins.</p>\n<p>However, the historical performance of these stablecoins leaves much to be desired; while they may have been able to provide “stability” with respect to its USD price, the cost for such stability has been an utter lack of value appreciation, which severely limits its appeal and functionality. The need of the hour is for a stablecoin that provides a complete solution, one that hits all sides of the equation– the properties of stability, of inflation-resistant price appreciation, while also being decentralized. One of the ways in which this can be achieved is through the utilization of a crypto-native stablecoin, and this is exactly where xBTC comes in. But before this synergistic and dynamic solution to the predicament of erstwhile one-sided stablecoins can be discussed, we must understand what these solutions were and why they are sub-optimal.</p>\n<p><strong>II. A Short History on Stablecoins</strong></p>\n<p>Stablecoins are not a new phenomenon in the world of crypto. MakerDAO (DAI) stablecoin, established in December, 2017, sought to tether its value to the USD in order to function as a coin that, on one hand, obtains the benefits of secure and instant-time transactions that cryptocurrencies provide, while at the same time protecting itself against the wild volatility that is the hallmark of cryptocurrencies. Reflexer (RAI), a more recent entrant in 2021, sought a similar <em>modus operandi</em>, with the major difference being that its value was to be determined by market forces of supply-demand (as opposed to being pegged with the USD), and which is to be regulated by its DAO community.</p>\n<p>Yet, both of these suffer from severe bottlenecks that prevent it from actually serving its purpose. In the case of DAI, as its value is pegged to the USD, it negates the value appreciation potential that cryptocurrencies possess, and this also hampers its potential to be inflation resistant. While RAI’s DAO community could theoretically rectify the aforementioned obstacle, the community lacks any real incentive towards appreciating the value of the coin — a fact that is evidenced by its empirical market rate continuing to hover around the 3$ mark.</p>\n<p>Crucially, both these coins (as well as any stablecoin presently in existence) fail to detach itself from fiat currencies, and in the process access the crypto market and its legitimate scope for price appreciation. DAI actually links its value entirely to a centralized fiat currency, and thereby sacrifices the very ethos of decentralization that lies at the core of cryptos. While it may seem that RAI is decentralized due to its price being determined by its community, the decision-making underlying such operation is paralyzed due to the community’s inability to reach any consensus; and further, RAI is denominated in USD — which inextricably links its exposure to the centralized currency. The landscape for stablecoins is calling out for a truly crypto-native stablecoin, that without any exposure to a fiat currency (hence remaining decentralized), is able to both capture the price appreciation as well as temper the volatility that have become the hallmarks of cryptos.</p>\n<p><strong>III. Not All Stablecoins Are Made Equal — The Superiority of xBTC</strong></p>\n<p>In comes xBTC. A bitcoin-backed reserve currency, here we find a genuinely inflation and volatility resistant stablecoin, that at the same time provides tangible avenues to capture the asset-appreciation of its underlying collateral — Bitcoin, while also stabilizing its value against market volatility. This is the first crypto-native stablecoin, that allows its holders to obtain a stable asset that has zero exposure to any centralized asset, and it achieves this feat with the utilization of the EVI DAO protocol.</p>\n<p>Briefly, the EVI DAO is a protocol comprising a dynamic, multi-layered mechanism — consisting of Collateralized Debt Positions (CDPs), inflation and volatility adjusted algorithmic redemption rates that do not just depend on the current BTC price, and is further backed by a probabilistic model for the floor of bitcoin prices, which ensures collateral sufficiency and thus redeemability of xBTC for BTC at all times. Although the underlying technology can get complicated, what must be kept in mind is the core element of this novel protocol — i.e., even in the worst-case scenarios, it provides a slow but gradual return, with what may be referred to as a “dampened bitcoin price”.</p>\n<p>With xBTC, token holders will never have to worry about the large volatility of its underlying collateral — BTC prices — as the return it produces is determined by a Simple Moving Average calculation based on its exchange rates over the past 1458-day period. This means that in both situations of a bull or a bear run, the exchange rate of xBTC is stable and absorbs the demand/supply shocks of BTC price like no other stablecoin, thereby providing the stability that DAI or RAI provides, while providing the genuine potential for market appreciation which neither of the above entail. Further, given that the redemption rate is algorithmically crypto-native — i.e., it is not exposed in any manner to a fiat currency and nor is it contingent on a consensus-based decision-making process, it avoids the paralyzing pitfalls of RAI that have failed to make it a crypto-native and inflation-resistant stablecoin.</p>\n<p>An algorithmically computed crypto-native stablecoin, which provides a return that is both inflation resistant and non-volatile, are the defining features of xBTC. Although the algorithm providing for such a redemption rate is an important feature of stabilizing the price, it is not the only mechanism in place to protect its holders from sweeping market volatility.</p>\n<p><strong>IV. XSR</strong></p>\n<p>xBTC savings rate is also controlled by governance as an additional means of securing the peg using the redemption rate. When xBTC starts trading above the rate of redemption the xBTC savings rate (XSR) can be increased to encourage more BTC to be locked up causing an increase in the supply of xBTC which eventually brings down the price to the redemption rate. The redemption rate serves as the floor of the trading price for xBTC. The following mechanisms are in place to prevent upward volatility and speculation beyond redemption rate: EVI token holders can decide to reduce xBTC savings rate (XSR) making it cheaper to borrow xBTC hence increasing the supply. Conversely, if xBTC is trading at or close to redemption rate, EVI holders may vote to increase XSR to maximize internal revenue thus acting like a central bank.</p>\n<p><strong>V. Test-Cases</strong></p>\n<p>As with any novel solution, describing the use-cases of xBTC is the most efficient display of its functionality, and here we discuss two polar instances of the same. Firstly, take the case of the 2019 — here, while USD experienced a 6% inflation, BTC appreciated close to a cool 100% (of course, with volatility). For DAI, it meant that, by virtue of it tethering its value to the USD, it failed miserably to capitalize on the massive rise in BTC value, thereby missing out on the appreciation of value that makes cryptos so attractive. However, xBTC, due to the operation of its dynamic protocol, provides a smaller net gain of about 50%, without the extreme volatility of BTC.</p>\n<p>Secondly, let’s consider the contra case — that of the BTC crash of 2018. In this year, BTC crashed to about 50% of its value, volatility characterizing its every move. xBTC manages to overcome the crash by maintaining a redemption rate that continues a slow but gradual, sustainable rise, and also without becoming under-collateralized at any point.</p>\n<p><strong>VI. Conclusion</strong></p>\n<p>With xBTC, token holders have access to the first crypto-native stablecoin that genuinely serves its titular purpose: firstly, of being volatility resistant; and secondly, of being able to capture market gains that have made cryptocurrencies such a lucrative venture for so many. Its two primary competitors (DAI, RAI) are incomplete solutions, as while they have been able to achieve the volatility-resistant functionality, their coins fail to capture market appreciation that cryptos have the potentiality of providing in abundance. By virtue of its novel collateralization of BTC and regulation by the dynamic and multi-layered EVI DAO protocol, token holders have access to a complex but synergistic mechanism that returns a “dampened Bitcoin price”, i.e., a baseline return on BTC price that protects token holders in all situations. This is the stablecoin to end all stablecoins, and is one not to be taken lightly.</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=c4ab342e7107" width="1" height="1" alt="">\n',
      enclosure: {},
      categories: ["stable-coin", "cryptocurrency", "defi"],
    },
    {
      title: "The Stablecoin to End All Stablecoins — xBTC",
      pubDate: "2022-03-08 10:03:34",
      link: "https://evidao.medium.com/the-stablecoin-to-end-all-stablecoins-xbtc-c4ab342e7107?source=rss-b1aac17391d4------2",
      guid: "https://medium.com/p/c4ab342e7107",
      author: "EVI DAO",
      thumbnail:
        "https://cdn-images-1.medium.com/max/770/1*wNK8GCCVvT8QgUJ8ldZ2HQ.jpeg",
      description:
        '\n<h3>The Stablecoin to End All Stablecoins — xBTC</h3>\n<p><strong>I. Introduction</strong></p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/770/1*wNK8GCCVvT8QgUJ8ldZ2HQ.jpeg"></figure><p>The volatility of cryptocurrencies has become its definitive feature at this point. Just this year itself, we have seen multiple dips in values of various cryptocurrencies; which may have been foreseen by keen observers post the all-time high levels observed in November to early December, 2021; even so, it is undeniable that such extreme volatility severely caps mainstream utilization of cryptos for DeFi purposes and otherwise. In order to access the benefits of cryptos for DeFi, while also providing scope for value appreciation, a distinctive subset of cryptos have emerged– stablecoins.</p>\n<p>However, the historical performance of these stablecoins leaves much to be desired; while they may have been able to provide “stability” with respect to its USD price, the cost for such stability has been an utter lack of value appreciation, which severely limits its appeal and functionality. The need of the hour is for a stablecoin that provides a complete solution, one that hits all sides of the equation– the properties of stability, of inflation-resistant price appreciation, while also being decentralized. One of the ways in which this can be achieved is through the utilization of a crypto-native stablecoin, and this is exactly where xBTC comes in. But before this synergistic and dynamic solution to the predicament of erstwhile one-sided stablecoins can be discussed, we must understand what these solutions were and why they are sub-optimal.</p>\n<p><strong>II. A Short History on Stablecoins</strong></p>\n<p>Stablecoins are not a new phenomenon in the world of crypto. MakerDAO (DAI) stablecoin, established in December, 2017, sought to tether its value to the USD in order to function as a coin that, on one hand, obtains the benefits of secure and instant-time transactions that cryptocurrencies provide, while at the same time protecting itself against the wild volatility that is the hallmark of cryptocurrencies. Reflexer (RAI), a more recent entrant in 2021, sought a similar <em>modus operandi</em>, with the major difference being that its value was to be determined by market forces of supply-demand (as opposed to being pegged with the USD), and which is to be regulated by its DAO community.</p>\n<p>Yet, both of these suffer from severe bottlenecks that prevent it from actually serving its purpose. In the case of DAI, as its value is pegged to the USD, it negates the value appreciation potential that cryptocurrencies possess, and this also hampers its potential to be inflation resistant. While RAI’s DAO community could theoretically rectify the aforementioned obstacle, the community lacks any real incentive towards appreciating the value of the coin — a fact that is evidenced by its empirical market rate continuing to hover around the 3$ mark.</p>\n<p>Crucially, both these coins (as well as any stablecoin presently in existence) fail to detach itself from fiat currencies, and in the process access the crypto market and its legitimate scope for price appreciation. DAI actually links its value entirely to a centralized fiat currency, and thereby sacrifices the very ethos of decentralization that lies at the core of cryptos. While it may seem that RAI is decentralized due to its price being determined by its community, the decision-making underlying such operation is paralyzed due to the community’s inability to reach any consensus; and further, RAI is denominated in USD — which inextricably links its exposure to the centralized currency. The landscape for stablecoins is calling out for a truly crypto-native stablecoin, that without any exposure to a fiat currency (hence remaining decentralized), is able to both capture the price appreciation as well as temper the volatility that have become the hallmarks of cryptos.</p>\n<p><strong>III. Not All Stablecoins Are Made Equal — The Superiority of xBTC</strong></p>\n<p>In comes xBTC. A bitcoin-backed reserve currency, here we find a genuinely inflation and volatility resistant stablecoin, that at the same time provides tangible avenues to capture the asset-appreciation of its underlying collateral — Bitcoin, while also stabilizing its value against market volatility. This is the first crypto-native stablecoin, that allows its holders to obtain a stable asset that has zero exposure to any centralized asset, and it achieves this feat with the utilization of the EVI DAO protocol.</p>\n<p>Briefly, the EVI DAO is a protocol comprising a dynamic, multi-layered mechanism — consisting of Collateralized Debt Positions (CDPs), inflation and volatility adjusted algorithmic redemption rates that do not just depend on the current BTC price, and is further backed by a probabilistic model for the floor of bitcoin prices, which ensures collateral sufficiency and thus redeemability of xBTC for BTC at all times. Although the underlying technology can get complicated, what must be kept in mind is the core element of this novel protocol — i.e., even in the worst-case scenarios, it provides a slow but gradual return, with what may be referred to as a “dampened bitcoin price”.</p>\n<p>With xBTC, token holders will never have to worry about the large volatility of its underlying collateral — BTC prices — as the return it produces is determined by a Simple Moving Average calculation based on its exchange rates over the past 1458-day period. This means that in both situations of a bull or a bear run, the exchange rate of xBTC is stable and absorbs the demand/supply shocks of BTC price like no other stablecoin, thereby providing the stability that DAI or RAI provides, while providing the genuine potential for market appreciation which neither of the above entail. Further, given that the redemption rate is algorithmically crypto-native — i.e., it is not exposed in any manner to a fiat currency and nor is it contingent on a consensus-based decision-making process, it avoids the paralyzing pitfalls of RAI that have failed to make it a crypto-native and inflation-resistant stablecoin.</p>\n<p>An algorithmically computed crypto-native stablecoin, which provides a return that is both inflation resistant and non-volatile, are the defining features of xBTC. Although the algorithm providing for such a redemption rate is an important feature of stabilizing the price, it is not the only mechanism in place to protect its holders from sweeping market volatility.</p>\n<p><strong>IV. XSR</strong></p>\n<p>xBTC savings rate is also controlled by governance as an additional means of securing the peg using the redemption rate. When xBTC starts trading above the rate of redemption the xBTC savings rate (XSR) can be increased to encourage more BTC to be locked up causing an increase in the supply of xBTC which eventually brings down the price to the redemption rate. The redemption rate serves as the floor of the trading price for xBTC. The following mechanisms are in place to prevent upward volatility and speculation beyond redemption rate: EVI token holders can decide to reduce xBTC savings rate (XSR) making it cheaper to borrow xBTC hence increasing the supply. Conversely, if xBTC is trading at or close to redemption rate, EVI holders may vote to increase XSR to maximize internal revenue thus acting like a central bank.</p>\n<p><strong>V. Test-Cases</strong></p>\n<p>As with any novel solution, describing the use-cases of xBTC is the most efficient display of its functionality, and here we discuss two polar instances of the same. Firstly, take the case of the 2019 — here, while USD experienced a 6% inflation, BTC appreciated close to a cool 100% (of course, with volatility). For DAI, it meant that, by virtue of it tethering its value to the USD, it failed miserably to capitalize on the massive rise in BTC value, thereby missing out on the appreciation of value that makes cryptos so attractive. However, xBTC, due to the operation of its dynamic protocol, provides a smaller net gain of about 50%, without the extreme volatility of BTC.</p>\n<p>Secondly, let’s consider the contra case — that of the BTC crash of 2018. In this year, BTC crashed to about 50% of its value, volatility characterizing its every move. xBTC manages to overcome the crash by maintaining a redemption rate that continues a slow but gradual, sustainable rise, and also without becoming under-collateralized at any point.</p>\n<p><strong>VI. Conclusion</strong></p>\n<p>With xBTC, token holders have access to the first crypto-native stablecoin that genuinely serves its titular purpose: firstly, of being volatility resistant; and secondly, of being able to capture market gains that have made cryptocurrencies such a lucrative venture for so many. Its two primary competitors (DAI, RAI) are incomplete solutions, as while they have been able to achieve the volatility-resistant functionality, their coins fail to capture market appreciation that cryptos have the potentiality of providing in abundance. By virtue of its novel collateralization of BTC and regulation by the dynamic and multi-layered EVI DAO protocol, token holders have access to a complex but synergistic mechanism that returns a “dampened Bitcoin price”, i.e., a baseline return on BTC price that protects token holders in all situations. This is the stablecoin to end all stablecoins, and is one not to be taken lightly.</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=c4ab342e7107" width="1" height="1" alt="">\n',
      content:
        '\n<h3>The Stablecoin to End All Stablecoins — xBTC</h3>\n<p><strong>I. Introduction</strong></p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/770/1*wNK8GCCVvT8QgUJ8ldZ2HQ.jpeg"></figure><p>The volatility of cryptocurrencies has become its definitive feature at this point. Just this year itself, we have seen multiple dips in values of various cryptocurrencies; which may have been foreseen by keen observers post the all-time high levels observed in November to early December, 2021; even so, it is undeniable that such extreme volatility severely caps mainstream utilization of cryptos for DeFi purposes and otherwise. In order to access the benefits of cryptos for DeFi, while also providing scope for value appreciation, a distinctive subset of cryptos have emerged– stablecoins.</p>\n<p>However, the historical performance of these stablecoins leaves much to be desired; while they may have been able to provide “stability” with respect to its USD price, the cost for such stability has been an utter lack of value appreciation, which severely limits its appeal and functionality. The need of the hour is for a stablecoin that provides a complete solution, one that hits all sides of the equation– the properties of stability, of inflation-resistant price appreciation, while also being decentralized. One of the ways in which this can be achieved is through the utilization of a crypto-native stablecoin, and this is exactly where xBTC comes in. But before this synergistic and dynamic solution to the predicament of erstwhile one-sided stablecoins can be discussed, we must understand what these solutions were and why they are sub-optimal.</p>\n<p><strong>II. A Short History on Stablecoins</strong></p>\n<p>Stablecoins are not a new phenomenon in the world of crypto. MakerDAO (DAI) stablecoin, established in December, 2017, sought to tether its value to the USD in order to function as a coin that, on one hand, obtains the benefits of secure and instant-time transactions that cryptocurrencies provide, while at the same time protecting itself against the wild volatility that is the hallmark of cryptocurrencies. Reflexer (RAI), a more recent entrant in 2021, sought a similar <em>modus operandi</em>, with the major difference being that its value was to be determined by market forces of supply-demand (as opposed to being pegged with the USD), and which is to be regulated by its DAO community.</p>\n<p>Yet, both of these suffer from severe bottlenecks that prevent it from actually serving its purpose. In the case of DAI, as its value is pegged to the USD, it negates the value appreciation potential that cryptocurrencies possess, and this also hampers its potential to be inflation resistant. While RAI’s DAO community could theoretically rectify the aforementioned obstacle, the community lacks any real incentive towards appreciating the value of the coin — a fact that is evidenced by its empirical market rate continuing to hover around the 3$ mark.</p>\n<p>Crucially, both these coins (as well as any stablecoin presently in existence) fail to detach itself from fiat currencies, and in the process access the crypto market and its legitimate scope for price appreciation. DAI actually links its value entirely to a centralized fiat currency, and thereby sacrifices the very ethos of decentralization that lies at the core of cryptos. While it may seem that RAI is decentralized due to its price being determined by its community, the decision-making underlying such operation is paralyzed due to the community’s inability to reach any consensus; and further, RAI is denominated in USD — which inextricably links its exposure to the centralized currency. The landscape for stablecoins is calling out for a truly crypto-native stablecoin, that without any exposure to a fiat currency (hence remaining decentralized), is able to both capture the price appreciation as well as temper the volatility that have become the hallmarks of cryptos.</p>\n<p><strong>III. Not All Stablecoins Are Made Equal — The Superiority of xBTC</strong></p>\n<p>In comes xBTC. A bitcoin-backed reserve currency, here we find a genuinely inflation and volatility resistant stablecoin, that at the same time provides tangible avenues to capture the asset-appreciation of its underlying collateral — Bitcoin, while also stabilizing its value against market volatility. This is the first crypto-native stablecoin, that allows its holders to obtain a stable asset that has zero exposure to any centralized asset, and it achieves this feat with the utilization of the EVI DAO protocol.</p>\n<p>Briefly, the EVI DAO is a protocol comprising a dynamic, multi-layered mechanism — consisting of Collateralized Debt Positions (CDPs), inflation and volatility adjusted algorithmic redemption rates that do not just depend on the current BTC price, and is further backed by a probabilistic model for the floor of bitcoin prices, which ensures collateral sufficiency and thus redeemability of xBTC for BTC at all times. Although the underlying technology can get complicated, what must be kept in mind is the core element of this novel protocol — i.e., even in the worst-case scenarios, it provides a slow but gradual return, with what may be referred to as a “dampened bitcoin price”.</p>\n<p>With xBTC, token holders will never have to worry about the large volatility of its underlying collateral — BTC prices — as the return it produces is determined by a Simple Moving Average calculation based on its exchange rates over the past 1458-day period. This means that in both situations of a bull or a bear run, the exchange rate of xBTC is stable and absorbs the demand/supply shocks of BTC price like no other stablecoin, thereby providing the stability that DAI or RAI provides, while providing the genuine potential for market appreciation which neither of the above entail. Further, given that the redemption rate is algorithmically crypto-native — i.e., it is not exposed in any manner to a fiat currency and nor is it contingent on a consensus-based decision-making process, it avoids the paralyzing pitfalls of RAI that have failed to make it a crypto-native and inflation-resistant stablecoin.</p>\n<p>An algorithmically computed crypto-native stablecoin, which provides a return that is both inflation resistant and non-volatile, are the defining features of xBTC. Although the algorithm providing for such a redemption rate is an important feature of stabilizing the price, it is not the only mechanism in place to protect its holders from sweeping market volatility.</p>\n<p><strong>IV. XSR</strong></p>\n<p>xBTC savings rate is also controlled by governance as an additional means of securing the peg using the redemption rate. When xBTC starts trading above the rate of redemption the xBTC savings rate (XSR) can be increased to encourage more BTC to be locked up causing an increase in the supply of xBTC which eventually brings down the price to the redemption rate. The redemption rate serves as the floor of the trading price for xBTC. The following mechanisms are in place to prevent upward volatility and speculation beyond redemption rate: EVI token holders can decide to reduce xBTC savings rate (XSR) making it cheaper to borrow xBTC hence increasing the supply. Conversely, if xBTC is trading at or close to redemption rate, EVI holders may vote to increase XSR to maximize internal revenue thus acting like a central bank.</p>\n<p><strong>V. Test-Cases</strong></p>\n<p>As with any novel solution, describing the use-cases of xBTC is the most efficient display of its functionality, and here we discuss two polar instances of the same. Firstly, take the case of the 2019 — here, while USD experienced a 6% inflation, BTC appreciated close to a cool 100% (of course, with volatility). For DAI, it meant that, by virtue of it tethering its value to the USD, it failed miserably to capitalize on the massive rise in BTC value, thereby missing out on the appreciation of value that makes cryptos so attractive. However, xBTC, due to the operation of its dynamic protocol, provides a smaller net gain of about 50%, without the extreme volatility of BTC.</p>\n<p>Secondly, let’s consider the contra case — that of the BTC crash of 2018. In this year, BTC crashed to about 50% of its value, volatility characterizing its every move. xBTC manages to overcome the crash by maintaining a redemption rate that continues a slow but gradual, sustainable rise, and also without becoming under-collateralized at any point.</p>\n<p><strong>VI. Conclusion</strong></p>\n<p>With xBTC, token holders have access to the first crypto-native stablecoin that genuinely serves its titular purpose: firstly, of being volatility resistant; and secondly, of being able to capture market gains that have made cryptocurrencies such a lucrative venture for so many. Its two primary competitors (DAI, RAI) are incomplete solutions, as while they have been able to achieve the volatility-resistant functionality, their coins fail to capture market appreciation that cryptos have the potentiality of providing in abundance. By virtue of its novel collateralization of BTC and regulation by the dynamic and multi-layered EVI DAO protocol, token holders have access to a complex but synergistic mechanism that returns a “dampened Bitcoin price”, i.e., a baseline return on BTC price that protects token holders in all situations. This is the stablecoin to end all stablecoins, and is one not to be taken lightly.</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=c4ab342e7107" width="1" height="1" alt="">\n',
      enclosure: {},
      categories: ["stable-coin", "cryptocurrency", "defi"],
    },
    {
      title: "The Stablecoin to End All Stablecoins — xBTC",
      pubDate: "2022-03-08 10:03:34",
      link: "https://evidao.medium.com/the-stablecoin-to-end-all-stablecoins-xbtc-c4ab342e7107?source=rss-b1aac17391d4------2",
      guid: "httdps://medium.com/p/c4ab342e7107",
      author: "EVI DAO",
      thumbnail:
        "https://cdn-images-1.medium.com/max/770/1*wNK8GCCVvT8QgUJ8ldZ2HQ.jpeg",
      description:
        '\n<h3>The Stablecoin to End All Stablecoins — xBTC</h3>\n<p><strong>I. Introduction</strong></p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/770/1*wNK8GCCVvT8QgUJ8ldZ2HQ.jpeg"></figure><p>The volatility of cryptocurrencies has become its definitive feature at this point. Just this year itself, we have seen multiple dips in values of various cryptocurrencies; which may have been foreseen by keen observers post the all-time high levels observed in November to early December, 2021; even so, it is undeniable that such extreme volatility severely caps mainstream utilization of cryptos for DeFi purposes and otherwise. In order to access the benefits of cryptos for DeFi, while also providing scope for value appreciation, a distinctive subset of cryptos have emerged– stablecoins.</p>\n<p>However, the historical performance of these stablecoins leaves much to be desired; while they may have been able to provide “stability” with respect to its USD price, the cost for such stability has been an utter lack of value appreciation, which severely limits its appeal and functionality. The need of the hour is for a stablecoin that provides a complete solution, one that hits all sides of the equation– the properties of stability, of inflation-resistant price appreciation, while also being decentralized. One of the ways in which this can be achieved is through the utilization of a crypto-native stablecoin, and this is exactly where xBTC comes in. But before this synergistic and dynamic solution to the predicament of erstwhile one-sided stablecoins can be discussed, we must understand what these solutions were and why they are sub-optimal.</p>\n<p><strong>II. A Short History on Stablecoins</strong></p>\n<p>Stablecoins are not a new phenomenon in the world of crypto. MakerDAO (DAI) stablecoin, established in December, 2017, sought to tether its value to the USD in order to function as a coin that, on one hand, obtains the benefits of secure and instant-time transactions that cryptocurrencies provide, while at the same time protecting itself against the wild volatility that is the hallmark of cryptocurrencies. Reflexer (RAI), a more recent entrant in 2021, sought a similar <em>modus operandi</em>, with the major difference being that its value was to be determined by market forces of supply-demand (as opposed to being pegged with the USD), and which is to be regulated by its DAO community.</p>\n<p>Yet, both of these suffer from severe bottlenecks that prevent it from actually serving its purpose. In the case of DAI, as its value is pegged to the USD, it negates the value appreciation potential that cryptocurrencies possess, and this also hampers its potential to be inflation resistant. While RAI’s DAO community could theoretically rectify the aforementioned obstacle, the community lacks any real incentive towards appreciating the value of the coin — a fact that is evidenced by its empirical market rate continuing to hover around the 3$ mark.</p>\n<p>Crucially, both these coins (as well as any stablecoin presently in existence) fail to detach itself from fiat currencies, and in the process access the crypto market and its legitimate scope for price appreciation. DAI actually links its value entirely to a centralized fiat currency, and thereby sacrifices the very ethos of decentralization that lies at the core of cryptos. While it may seem that RAI is decentralized due to its price being determined by its community, the decision-making underlying such operation is paralyzed due to the community’s inability to reach any consensus; and further, RAI is denominated in USD — which inextricably links its exposure to the centralized currency. The landscape for stablecoins is calling out for a truly crypto-native stablecoin, that without any exposure to a fiat currency (hence remaining decentralized), is able to both capture the price appreciation as well as temper the volatility that have become the hallmarks of cryptos.</p>\n<p><strong>III. Not All Stablecoins Are Made Equal — The Superiority of xBTC</strong></p>\n<p>In comes xBTC. A bitcoin-backed reserve currency, here we find a genuinely inflation and volatility resistant stablecoin, that at the same time provides tangible avenues to capture the asset-appreciation of its underlying collateral — Bitcoin, while also stabilizing its value against market volatility. This is the first crypto-native stablecoin, that allows its holders to obtain a stable asset that has zero exposure to any centralized asset, and it achieves this feat with the utilization of the EVI DAO protocol.</p>\n<p>Briefly, the EVI DAO is a protocol comprising a dynamic, multi-layered mechanism — consisting of Collateralized Debt Positions (CDPs), inflation and volatility adjusted algorithmic redemption rates that do not just depend on the current BTC price, and is further backed by a probabilistic model for the floor of bitcoin prices, which ensures collateral sufficiency and thus redeemability of xBTC for BTC at all times. Although the underlying technology can get complicated, what must be kept in mind is the core element of this novel protocol — i.e., even in the worst-case scenarios, it provides a slow but gradual return, with what may be referred to as a “dampened bitcoin price”.</p>\n<p>With xBTC, token holders will never have to worry about the large volatility of its underlying collateral — BTC prices — as the return it produces is determined by a Simple Moving Average calculation based on its exchange rates over the past 1458-day period. This means that in both situations of a bull or a bear run, the exchange rate of xBTC is stable and absorbs the demand/supply shocks of BTC price like no other stablecoin, thereby providing the stability that DAI or RAI provides, while providing the genuine potential for market appreciation which neither of the above entail. Further, given that the redemption rate is algorithmically crypto-native — i.e., it is not exposed in any manner to a fiat currency and nor is it contingent on a consensus-based decision-making process, it avoids the paralyzing pitfalls of RAI that have failed to make it a crypto-native and inflation-resistant stablecoin.</p>\n<p>An algorithmically computed crypto-native stablecoin, which provides a return that is both inflation resistant and non-volatile, are the defining features of xBTC. Although the algorithm providing for such a redemption rate is an important feature of stabilizing the price, it is not the only mechanism in place to protect its holders from sweeping market volatility.</p>\n<p><strong>IV. XSR</strong></p>\n<p>xBTC savings rate is also controlled by governance as an additional means of securing the peg using the redemption rate. When xBTC starts trading above the rate of redemption the xBTC savings rate (XSR) can be increased to encourage more BTC to be locked up causing an increase in the supply of xBTC which eventually brings down the price to the redemption rate. The redemption rate serves as the floor of the trading price for xBTC. The following mechanisms are in place to prevent upward volatility and speculation beyond redemption rate: EVI token holders can decide to reduce xBTC savings rate (XSR) making it cheaper to borrow xBTC hence increasing the supply. Conversely, if xBTC is trading at or close to redemption rate, EVI holders may vote to increase XSR to maximize internal revenue thus acting like a central bank.</p>\n<p><strong>V. Test-Cases</strong></p>\n<p>As with any novel solution, describing the use-cases of xBTC is the most efficient display of its functionality, and here we discuss two polar instances of the same. Firstly, take the case of the 2019 — here, while USD experienced a 6% inflation, BTC appreciated close to a cool 100% (of course, with volatility). For DAI, it meant that, by virtue of it tethering its value to the USD, it failed miserably to capitalize on the massive rise in BTC value, thereby missing out on the appreciation of value that makes cryptos so attractive. However, xBTC, due to the operation of its dynamic protocol, provides a smaller net gain of about 50%, without the extreme volatility of BTC.</p>\n<p>Secondly, let’s consider the contra case — that of the BTC crash of 2018. In this year, BTC crashed to about 50% of its value, volatility characterizing its every move. xBTC manages to overcome the crash by maintaining a redemption rate that continues a slow but gradual, sustainable rise, and also without becoming under-collateralized at any point.</p>\n<p><strong>VI. Conclusion</strong></p>\n<p>With xBTC, token holders have access to the first crypto-native stablecoin that genuinely serves its titular purpose: firstly, of being volatility resistant; and secondly, of being able to capture market gains that have made cryptocurrencies such a lucrative venture for so many. Its two primary competitors (DAI, RAI) are incomplete solutions, as while they have been able to achieve the volatility-resistant functionality, their coins fail to capture market appreciation that cryptos have the potentiality of providing in abundance. By virtue of its novel collateralization of BTC and regulation by the dynamic and multi-layered EVI DAO protocol, token holders have access to a complex but synergistic mechanism that returns a “dampened Bitcoin price”, i.e., a baseline return on BTC price that protects token holders in all situations. This is the stablecoin to end all stablecoins, and is one not to be taken lightly.</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=c4ab342e7107" width="1" height="1" alt="">\n',
      content:
        '\n<h3>The Stablecoin to End All Stablecoins — xBTC</h3>\n<p><strong>I. Introduction</strong></p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/770/1*wNK8GCCVvT8QgUJ8ldZ2HQ.jpeg"></figure><p>The volatility of cryptocurrencies has become its definitive feature at this point. Just this year itself, we have seen multiple dips in values of various cryptocurrencies; which may have been foreseen by keen observers post the all-time high levels observed in November to early December, 2021; even so, it is undeniable that such extreme volatility severely caps mainstream utilization of cryptos for DeFi purposes and otherwise. In order to access the benefits of cryptos for DeFi, while also providing scope for value appreciation, a distinctive subset of cryptos have emerged– stablecoins.</p>\n<p>However, the historical performance of these stablecoins leaves much to be desired; while they may have been able to provide “stability” with respect to its USD price, the cost for such stability has been an utter lack of value appreciation, which severely limits its appeal and functionality. The need of the hour is for a stablecoin that provides a complete solution, one that hits all sides of the equation– the properties of stability, of inflation-resistant price appreciation, while also being decentralized. One of the ways in which this can be achieved is through the utilization of a crypto-native stablecoin, and this is exactly where xBTC comes in. But before this synergistic and dynamic solution to the predicament of erstwhile one-sided stablecoins can be discussed, we must understand what these solutions were and why they are sub-optimal.</p>\n<p><strong>II. A Short History on Stablecoins</strong></p>\n<p>Stablecoins are not a new phenomenon in the world of crypto. MakerDAO (DAI) stablecoin, established in December, 2017, sought to tether its value to the USD in order to function as a coin that, on one hand, obtains the benefits of secure and instant-time transactions that cryptocurrencies provide, while at the same time protecting itself against the wild volatility that is the hallmark of cryptocurrencies. Reflexer (RAI), a more recent entrant in 2021, sought a similar <em>modus operandi</em>, with the major difference being that its value was to be determined by market forces of supply-demand (as opposed to being pegged with the USD), and which is to be regulated by its DAO community.</p>\n<p>Yet, both of these suffer from severe bottlenecks that prevent it from actually serving its purpose. In the case of DAI, as its value is pegged to the USD, it negates the value appreciation potential that cryptocurrencies possess, and this also hampers its potential to be inflation resistant. While RAI’s DAO community could theoretically rectify the aforementioned obstacle, the community lacks any real incentive towards appreciating the value of the coin — a fact that is evidenced by its empirical market rate continuing to hover around the 3$ mark.</p>\n<p>Crucially, both these coins (as well as any stablecoin presently in existence) fail to detach itself from fiat currencies, and in the process access the crypto market and its legitimate scope for price appreciation. DAI actually links its value entirely to a centralized fiat currency, and thereby sacrifices the very ethos of decentralization that lies at the core of cryptos. While it may seem that RAI is decentralized due to its price being determined by its community, the decision-making underlying such operation is paralyzed due to the community’s inability to reach any consensus; and further, RAI is denominated in USD — which inextricably links its exposure to the centralized currency. The landscape for stablecoins is calling out for a truly crypto-native stablecoin, that without any exposure to a fiat currency (hence remaining decentralized), is able to both capture the price appreciation as well as temper the volatility that have become the hallmarks of cryptos.</p>\n<p><strong>III. Not All Stablecoins Are Made Equal — The Superiority of xBTC</strong></p>\n<p>In comes xBTC. A bitcoin-backed reserve currency, here we find a genuinely inflation and volatility resistant stablecoin, that at the same time provides tangible avenues to capture the asset-appreciation of its underlying collateral — Bitcoin, while also stabilizing its value against market volatility. This is the first crypto-native stablecoin, that allows its holders to obtain a stable asset that has zero exposure to any centralized asset, and it achieves this feat with the utilization of the EVI DAO protocol.</p>\n<p>Briefly, the EVI DAO is a protocol comprising a dynamic, multi-layered mechanism — consisting of Collateralized Debt Positions (CDPs), inflation and volatility adjusted algorithmic redemption rates that do not just depend on the current BTC price, and is further backed by a probabilistic model for the floor of bitcoin prices, which ensures collateral sufficiency and thus redeemability of xBTC for BTC at all times. Although the underlying technology can get complicated, what must be kept in mind is the core element of this novel protocol — i.e., even in the worst-case scenarios, it provides a slow but gradual return, with what may be referred to as a “dampened bitcoin price”.</p>\n<p>With xBTC, token holders will never have to worry about the large volatility of its underlying collateral — BTC prices — as the return it produces is determined by a Simple Moving Average calculation based on its exchange rates over the past 1458-day period. This means that in both situations of a bull or a bear run, the exchange rate of xBTC is stable and absorbs the demand/supply shocks of BTC price like no other stablecoin, thereby providing the stability that DAI or RAI provides, while providing the genuine potential for market appreciation which neither of the above entail. Further, given that the redemption rate is algorithmically crypto-native — i.e., it is not exposed in any manner to a fiat currency and nor is it contingent on a consensus-based decision-making process, it avoids the paralyzing pitfalls of RAI that have failed to make it a crypto-native and inflation-resistant stablecoin.</p>\n<p>An algorithmically computed crypto-native stablecoin, which provides a return that is both inflation resistant and non-volatile, are the defining features of xBTC. Although the algorithm providing for such a redemption rate is an important feature of stabilizing the price, it is not the only mechanism in place to protect its holders from sweeping market volatility.</p>\n<p><strong>IV. XSR</strong></p>\n<p>xBTC savings rate is also controlled by governance as an additional means of securing the peg using the redemption rate. When xBTC starts trading above the rate of redemption the xBTC savings rate (XSR) can be increased to encourage more BTC to be locked up causing an increase in the supply of xBTC which eventually brings down the price to the redemption rate. The redemption rate serves as the floor of the trading price for xBTC. The following mechanisms are in place to prevent upward volatility and speculation beyond redemption rate: EVI token holders can decide to reduce xBTC savings rate (XSR) making it cheaper to borrow xBTC hence increasing the supply. Conversely, if xBTC is trading at or close to redemption rate, EVI holders may vote to increase XSR to maximize internal revenue thus acting like a central bank.</p>\n<p><strong>V. Test-Cases</strong></p>\n<p>As with any novel solution, describing the use-cases of xBTC is the most efficient display of its functionality, and here we discuss two polar instances of the same. Firstly, take the case of the 2019 — here, while USD experienced a 6% inflation, BTC appreciated close to a cool 100% (of course, with volatility). For DAI, it meant that, by virtue of it tethering its value to the USD, it failed miserably to capitalize on the massive rise in BTC value, thereby missing out on the appreciation of value that makes cryptos so attractive. However, xBTC, due to the operation of its dynamic protocol, provides a smaller net gain of about 50%, without the extreme volatility of BTC.</p>\n<p>Secondly, let’s consider the contra case — that of the BTC crash of 2018. In this year, BTC crashed to about 50% of its value, volatility characterizing its every move. xBTC manages to overcome the crash by maintaining a redemption rate that continues a slow but gradual, sustainable rise, and also without becoming under-collateralized at any point.</p>\n<p><strong>VI. Conclusion</strong></p>\n<p>With xBTC, token holders have access to the first crypto-native stablecoin that genuinely serves its titular purpose: firstly, of being volatility resistant; and secondly, of being able to capture market gains that have made cryptocurrencies such a lucrative venture for so many. Its two primary competitors (DAI, RAI) are incomplete solutions, as while they have been able to achieve the volatility-resistant functionality, their coins fail to capture market appreciation that cryptos have the potentiality of providing in abundance. By virtue of its novel collateralization of BTC and regulation by the dynamic and multi-layered EVI DAO protocol, token holders have access to a complex but synergistic mechanism that returns a “dampened Bitcoin price”, i.e., a baseline return on BTC price that protects token holders in all situations. This is the stablecoin to end all stablecoins, and is one not to be taken lightly.</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=c4ab342e7107" width="1" height="1" alt="">\n',
      enclosure: {},
      categories: ["stable-coin", "cryptocurrency", "defi"],
    },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [blogLoading, setBlogLoading] = useState(true);
  const [posts, setPosts] = useState<IBlogPost[] | []>([]);

  useEffect(() => {
    const collapsible = document.getElementById("landingPageNav");
    if (collapsible) {
      var bsCollapse = new Collapse(collapsible, { toggle: false });
      navbarOpen ? bsCollapse.show() : bsCollapse.hide();
    }
  }, [navbarOpen, setNavbarOpen]);

  useEffect(() => {
    const getBlogPosts = async () => {
      const res = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fevidao.medium.com%2Ffeed"
      );
      // const res = await fetch(
      //   "https://cors-anywhere.herokuapp.com/https://www.toptal.com/developers/feed2json/convert?url=https%3A%2F%2Fevidao.medium.com%2Ffeed"
      // );
      // const res = await rssParser(
      //   "https://cors-anywhere.herokuapp.com/https://evidao.medium.com/feed",
      //   {}
      // );
      const data: { items: IBlogPost[] } = await res.json();
      if (data.items?.length) {
        setPosts(data.items);
        setBlogLoading(false);
      }
    };
    // (function () {
    //   var cors_api_host = "cors-anywhere.herokuapp.com";
    //   var cors_api_url = "https://" + cors_api_host + "/";
    //   var slice = [].slice;
    //   var origin = window.location.protocol + "//" + window.location.host;
    //   var open = XMLHttpRequest.prototype.open;
    //   XMLHttpRequest.prototype.open = function () {
    //     var args = slice.call<any, any[], any>(arguments);
    //     var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
    //     if (
    //       targetOrigin &&
    //       targetOrigin[0].toLowerCase() !== origin &&
    //       targetOrigin[1] !== cors_api_host
    //     ) {
    //       args[1] = cors_api_url + args[1];
    //     }
    //     return open.apply(this, args);
    //   };
    // })();
    getBlogPosts();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <img src={eviLogo} alt="logo" />
        </a>
        <button
          className="navbarToggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#landingPageNav"
          aria-controls="landingPageNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setNavbarOpen((state) => !state)}
        >
          <HiOutlineMenuAlt3 />
        </button>
        <div className="collapse navbar-collapse" id="landingPageNav">
          <ul className="navbarLinks navbar-nav">
            <li className="navbarItem">
              <a href="">Home</a>
            </li>
            <li className="navbarItem">
              <a href="#features">The Project</a>
            </li>
            <li className="navbarItem">
              <a href="#community">Community</a>
            </li>
            <li className="navbarItem">
              <a href="#blog">Blog</a>
            </li>
            <li className="navbarItem">
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="hero">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-8 col-md-6 col-lg-3">
              {/* <img src={xbtcLogo} alt="" /> */}
              <Logo />
            </div>
          </div>
          <h1 className="mb-4">Introducing xBTC.</h1>
          <h3 className="mb-5">
            An algorithmically-backed stablecoin that's highly inflation
            resistant.
          </h3>
          <div className="buttons">
            <a
              href="https://github.com/FoundationCryptoLabs/XSS/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Github Project
            </a>
            <a
              href="https://github.com/FoundationCryptoLabs/XSS/blob/governance/Docs/xBTC%20-%20Technical%20Documentation%20(2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </section>
      <section className="features" id="features">
        <h1>Features</h1>
        <hr />
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-3 image">
              <img src={feature1} alt="Financial Freedom" />
            </div>
            <div className="col-md-6 offset-lg-1 description">
              <div className="title">True financial freedom</div>
              Leverage​ your Bitcoin​ assets​ to​ generate​ stable xBTC​, a new
              asset class that maintains purchasing power stability
              algorithmically, independent of fiat currency depreciation.
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-3 image">
              <img src={feature2} alt="Financial Freedom" />
            </div>
            <div className="col-md-6 offset-lg-1 description">
              <div className="title">Stable Value appreciation</div>
              Solves the twin problems of inflation of current stable assets
              (USDC, DAI, RAI), as well as high volatility in appreciating
              assets (BTC).
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-3 image">
              <img src={eviLogo} alt="Financial Freedom" />
            </div>
            <div className="col-md-6 offset-lg-1 description">
              <div className="title">Automated Governance</div>
              We follow the principle of governance minimisation, and focus on
              making important protocol decisions via algorithms rather than
              people wherever possible.
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-3 image">
              <img src={feature4} alt="Financial Freedom" />
            </div>
            <div className="col-md-6 offset-lg-1 description">
              <div className="title">Bitcoin Backed</div>
              xBTC is backed only by bitcoin, the largest, oldest, most secure
              and most valuable digital asset in existence.
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <a
                href="https://github.com/FoundationCryptoLabs/XSS/blob/governance/Docs/zBTC-stablecoin-system.pdf"
                target="_blank"
                className="btn btn-outline-primary"
              >
                Read our Whitepaper
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="tagline">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={xbtcLogo} alt="Financial Freedom" />
            </div>
            <div className="col-md-6">
              <div className="title">
                The first crypto native stablecoin, backed only by Bitcoin.
              </div>
              xBTC utilises a heavily backtested probabilistic model that allows
              users to mint stable xBTC assets at &gt;150% collateral ratio.
            </div>
          </div>
        </div>
      </section>
      <section className="community" id="community">
        <h1>Community</h1>
        <hr />
        <div className="container">
          <div className="links">
            <a href="https://twitter.com/evi_dao" target="_blank">
              <FaTwitter />
              <div className="linkText">Twitter</div>
            </a>
            <a href="https://discord.gg/E3fQbJju" target="_blank">
              <FaDiscord />
              <div className="linkText">Discord</div>
            </a>
            <a
              href="https://github.com/FoundationCryptoLabs/XSS"
              target="_blank"
            >
              <FaGithub />
              <div className="linkText">Github</div>
            </a>
            <a href="https://evidao.medium.com/" target="_blank">
              <FaMedium />
              <div className="linkText">Blog</div>
            </a>
          </div>
        </div>
      </section>
      <section className="blogFeature" id="blog">
        <h1>Blog Posts</h1>
        <hr />
        <div className="container">
          <div className="blogItems">
            {blogLoading
              ? "Loading blog posts..."
              : posts.map((post) => {
                  const date = parseISO(post.pubDate);
                  const img_tag =
                    post.content.match(/\<figure><img.+?src=\"(.+?)\" /)?.[1] ||
                    "";
                  return (
                    <div className="blogItem" key={post.guid}>
                      <a href={post.link} target="_blank">
                        <div className="imgContainer">
                          {/* {img_tag && <img src={img_tag} alt={post.title} />} */}
                          <img src={post.thumbnail} alt={post.title} />
                        </div>
                        <div className="postData">
                          <h4>{post.title}</h4>
                          {format(date, "dd MMM, yyyy")}
                        </div>
                      </a>
                    </div>
                  );
                })}
          </div>
          <div className="col-12">
            <a
              href="https://evidao.medium.com/"
              target="_blank"
              className="btn btn-primary"
            >
              View All
            </a>
          </div>
        </div>
      </section>
      <section className="faq" id="faq">
        <h1>FAQ</h1>
        <hr />
        <div className="container">
          <Collapsible title="What is xBTC?">
            xBTC is designed to be the ideal monetary asset. It combines the
            short-term stability of USD with the long term value appreciation of
            Bitcoin, to form the first stable yet appreciating asset. This is in
            contrast with all current ‘stable’ assets, which depreciate YoY,
            often by 5-10% or more.
          </Collapsible>
          <Collapsible title="How does xBTC work?">
            xBTC relies on a redemption rate algorithm that ensures collateral
            sufficiency while maximising value appreciation. Thus, you can
            expect the redemption rate (and thus price) of xBTC to slowly rise
            in USD terms, without any significant downward volatility.
          </Collapsible>
          <Collapsible title="What can xBTC be used for?">
            xBTC fulfils all the goals of money - medium of exchange, unit of
            account, and store of value - better than all existing monetary
            assets. By utilising xBTC as a unit of account instead of USD,
            businesses can be assured that the value of invoices paid by clients
            will not go down over time in purchasing power terms. By utilising
            xBTC as a store of value, holders can effectively expose themselves
            to the long term value appreciation of Bitcoin, without risking
            value loss due to short term fluctuations and high volatility. By
            using xBTC as a medium of exchange, users can benefit from all the
            advantages of smart contract based money, including programmed
            payments, automated dispute resolution, and on-chain investment.
          </Collapsible>
          <Collapsible title="How much appreciation can I expect from my xBTC?">
            Backtests show that annual xBTC appreciation can vary between 20% to
            70% in USD terms, depending on bitcoin price action. Roughly, you
            can definitely expect xBTC appreciation to outpace peak USD
            inflation, which is currently nearly 12% in leading metro cities.
          </Collapsible>
          <Collapsible title="How can I mint xBTC?">
            xBTC can be borrowed by depositing Bitcoin in the required
            collateral ratio (currently 150%). Borrowed xBTC accrues a small
            interest - this can be set to positive or negative interest. When
            xBTC is repaid, the initially locked bitcoin collateral is released.
            This can currently be done on testnet by directly interacting with
            the contract. A collateralisation dashboard to facilitate this is
            coming soon, alongside the Mainnet launch!
          </Collapsible>
          <Collapsible title="How can I buy xBTC?">
            For people using xBTC as an investment, it can be bought directly on
            any DEX on the RSK network, similar to other ERC20 tokens.
          </Collapsible>
          <Collapsible title="How can I redeem xBTC?">
            xBTC can be redeemed for the present redemption rate, either by
            directly calling the redeem function on the smart contract, or via
            our xBTC redemption dashboard (coming soon).
          </Collapsible>
          <Collapsible title="When does xBTC go live?">
            xBTC is currently deployed on RSK testnet, and is undergoing audits.
            You can expect it to launch in early April!
          </Collapsible>
          <Collapsible title="Can xBTC have a negative interest rate?">
            We’re exploring the possibility of negative interest rates for
            borrowing xBTC, to encourage early users to mint xBTC. This is to
            account for the fact that xBTC is designed to appreciate in real
            terms - thus when somebody borrows 1 xBTC and decides to return 1
            xBTC an year later, he will have to pay more in real terms (and in
            fiat terms) after accounting for the value appreciation. Adding a
            positive interest rate on top of this may discourage borrowing -
            hence negative interest, to compensate partly for the rising real
            value of the debt.
          </Collapsible>
        </div>
      </section>
      <footer>(c) Foundation Crypto Labs, 2022.</footer>
    </>
  );
};
