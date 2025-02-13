const { sumTokensExport, } = require('../helper/unwrapLPs')

const TREASURY = '0xa5f3d6a33c5a5bcdff8f81c88ca00f457b699e0f'

const TOKENS = {
  USDEX_USDC_LP: '0x79f3bb5534b8f060b37b3e5dea032a39412f6b10',
  DEXSHARE_BNB_LP: '0x65d83463fc023bffbd8ac9a1a2e1037f4bbdb399',
  DEXIRA_BNB_LP: '0x01b279a06f5f26bd3f469a3e730097184973fc8a',
  DEXSHARE: '0xf4914e6d97a75f014acfcf4072f11be5cffc4ca6',
  DEXIRA: '0x147e07976e1ae78287c33aafaab87760d32e50a5',
  WDEX_DEXSHARE: '0x6647047433df4cfc9912d092fd155b9d972a4a85',
  BNB: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
};

module.exports = {
  bsc: {
    tvl: sumTokensExport({
      tokens: [
        TOKENS.DEXIRA_BNB_LP,
        TOKENS.DEXSHARE_BNB_LP,
        TOKENS.USDEX_USDC_LP,
      ], owner: TREASURY,
    }),
  },
};