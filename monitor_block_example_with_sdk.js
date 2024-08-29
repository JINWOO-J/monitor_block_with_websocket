import pkg from "icon-sdk-js";
const { HttpProvider, BlockMonitorSpec, Converter, IconService } = pkg;

const provider_url = "https://ctz.havah.io/api/v3";

const provider = new HttpProvider(provider_url + "/icon_dex");
const iconService = new IconService(provider);

async function main() {
    try {
        const lastBlock = await iconService.getLastBlock().execute();
        const height = lastBlock.height;
        const spec = new BlockMonitorSpec(Converter.toBigNumber(height + 1));

        const onevent = (data) => {
            console.log(data);
        };

        const onerror = (error) => {
            console.log(error);
        };

        const monitor = iconService.monitorBlock(spec, onevent, onerror);
    } catch (e) {
        console.log(e);
    }
}

main();