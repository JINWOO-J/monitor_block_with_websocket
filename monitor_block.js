import IconSDK from 'icon-sdk-js'; 
const { IconService, HttpProvider } = IconSDK; 

// ICON 네트워크의 HTTP 제공자 설정
const provider_url = "https://ctz.havah.io/api/v3";
const provider = new HttpProvider(provider_url);
const iconService = new IconService(provider);


async function monitorBlockRaw() {
    let lastBlockHeight = await getLastBlockHeight();
    console.log(`Starting to monitor from block height: ${lastBlockHeight}`);

    while (true) {
        const latestBlock = await iconService.getLastBlock().execute();
        const latestBlockHeight = latestBlock.height;

        if (latestBlockHeight > lastBlockHeight) {
            console.log(`New block detected. Height: ${latestBlockHeight}, Hash: ${latestBlock.blockHash}`);
            lastBlockHeight = latestBlockHeight;
        }
        
        await sleep(1000);
    }
}


async function getLastBlockHeight() {
    const block = await iconService.getLastBlock().execute();
    return block.height;
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 모니터링 시작
monitorBlockRaw().catch((error) => {
    console.error('Error in monitorBlock:', error);
});
