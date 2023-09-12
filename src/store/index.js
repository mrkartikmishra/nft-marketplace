import { createGlobalState } from "react-hooks-global-state";

const { useGlobalState, getGlobalState, setGlobalState } = createGlobalState({
  createNFTModal: "scale-0",
  nftList: [
    {
      tokenId: 1,
      name: "Name 1",
      price: 101,
    },
    {
      tokenId: 2,
      name: "Name 2",
      price: 202,
    },
    {
      tokenId: 3,
      name: "Name 1",
      price: 101,
    },
    {
      name: "Name 2",
      price: 202,
    },
    {
      tokenId: 4,
      name: "Name 1",
      price: 101,
    },
    {
      tokenId: 5,
      name: "Name 2",
      price: 202,
    },
  ],
});

export { useGlobalState, getGlobalState, setGlobalState };
