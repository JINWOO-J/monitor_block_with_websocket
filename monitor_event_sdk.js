import IconSDK from 'icon-sdk-js';

const { IconService, IconBuilder, IconConverter, HttpProvider } = IconSDK;

// ICON 네트워크의 HTTP 제공자 설정
const provider = new HttpProvider('https://ctz.havah.io/api/v3');
const iconService = new IconService(provider);

// 모니터링할 스마트 계약 주소
const scoreAddress = 'cx0000000000000000000000000000000000000001'; // 실제 스마트 계약 주소로 교체

// 모니터링할 이벤트 시그니처 (예: Transfer(Address, Address, int))
const eventSignature = 'Transfer(Address,Address,int)';

// 이벤트 모니터링 시작
const monitor = iconService.monitorEvent(scoreAddress, eventSignature);

monitor.on('event', (event) => {
    console.log('Event occurred:', event);
});

monitor.on('error', (error) => {
    console.error('Error:', error);
});

// 모니터링 중지
// monitor.close();