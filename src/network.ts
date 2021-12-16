import useSWR, { Arguments } from 'swr'

//@ts-ignore
const fetcher = (...args: Arguments[]) => fetch(...args).then(res => res.json())
const { data, error } = useSWR('https://chainid.network/chains.json', fetcher);

console.log(`chainlist`, data)