import { isBrowser } from "@util/browser";
import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

export function useGetNFTs(params: any) {
  return useQuery("get-nfts", async () => {
    const res = await axios.get("/api/get-nfts", { params });
    return res.data;
  });
}
