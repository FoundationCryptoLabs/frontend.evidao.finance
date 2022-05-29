import Web3 from "web3";

export const getListFromFunction = async (func: any, limit: number) => {
  const final: any = [];
  for (let i = 0; i < limit; i++) {
    const response = await func(i)();
    final.push();
  }
  return final;
};

export const truncateString = (str: string, numChars?: number) => {
  if (!str) return "";
  if (numChars) {
    return `${str.slice(0, Math.floor(numChars / 2))}...${str.slice(
      -Math.ceil(numChars / 2)
    )}`;
  } else {
    return `${str.slice(0, 5)}...${str.slice(-5)}`;
  }
};

export function splitArray<T>(arr: any[], predicate: (a0: T) => boolean) {
  const positive: T[] = [];
  const negative: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }
  return [positive, negative];
}

export const getAllLoansFromContract = async (contract: any) => {};

export const decodeSmartContractResult = (res: any) => {
  return res.words?.[0] ?? "";
};

const S_PER_DAY = 86400;
export const daysToS = (days: number) => days * S_PER_DAY;
export const sToDays = (ms: number) => ms / S_PER_DAY;

const MS_PER_DAY = S_PER_DAY * 1000;
export const daysToMs = (days: number) => days * MS_PER_DAY;
export const msToDays = (ms: number) => ms / MS_PER_DAY;
