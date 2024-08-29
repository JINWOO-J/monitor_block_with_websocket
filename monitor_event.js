import IconSDK from 'icon-sdk-js'; // 기본 모듈 가져오기
const { IconService, HttpProvider, IconConverter } = IconSDK; // 필요한 부분 추출

// ICON 네트워크의 HTTP 제공자 설정
const provider = new HttpProvider('https://ctz.havah.io/api/v3');
const iconService = new IconService(provider);

// 모니터링할 스마트 계약 주소
const contractAddress = 'cx0000000000000000000000000000000000000001'; // 실제 스마트 계약 주소로 교체


// 모니터링할 이벤트 시그니처 (예: Transfer(Address, Address, int))
const eventSignature = 'Transfer(Address,Address,int)';

// 이벤트 모니터링 함수
async function monitorEvent() {
    let lastBlockHeight = await getLastBlockHeight();
    console.log(`Starting to monitor events from block height: ${lastBlockHeight}`);

    while (true) {
        const latestBlock = await iconService.getLastBlock().execute();
        const latestBlockHeight = latestBlock.height;

        if (latestBlockHeight > lastBlockHeight) {
            console.log(`Checking events from block height: ${lastBlockHeight + 1} to ${latestBlockHeight}`);

            for (let i = lastBlockHeight + 1; i <= latestBlockHeight; i++) {
                const block = await iconService.getBlockByHeight(i).execute();

                // confirmed_transaction_list가 배열인지 확인하고, 그렇지 않으면 빈 배열로 초기화
                const transactions = Array.isArray(block.confirmed_transaction_list) ? block.confirmed_transaction_list : [];

                for (const tx of transactions) {
                    if (tx.to === contractAddress) {
                        const logs = tx.eventLogs;

                        logs.forEach(log => {
                            if (log.indexed[0] === eventSignature) {
                                console.log('Event detected:', log);
                                // 이벤트 발생 시 추가 처리 로직을 여기에 추가할 수 있음
                            }
                        });
                    }
                }
            }

            lastBlockHeight = latestBlockHeight;
        }

        // 짧은 지연을 두고 이벤트를 계속 확인
        await sleep(1000);
    }
}

// 마지막 블록의 높이 가져오기
async function getLastBlockHeight() {
    const block = await iconService.getLastBlock().execute();
    return block.height;
}

// 지연 함수
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 모니터링 시작
monitorEvent().catch((error) => {
    console.error('Error in monitorEvent:', error);
});

