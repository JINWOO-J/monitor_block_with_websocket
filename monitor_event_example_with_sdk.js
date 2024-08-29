import pkg from "icon-sdk-js";
const { HttpProvider, EventMonitorSpec, Converter, EventFilter, IconService } = pkg;

const provider_url = "https://ctz.havah.io/api/v3";

const provider = new HttpProvider(provider_url + "/icon_dex");
const iconService = new IconService(provider);

const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
};

function logWithTimestamp(message, color = colors.reset) {
    const now = new Date();
    console.log(`[${now.toISOString()}] ${color}${message}${colors.reset}`);
}

async function main() {
    try {
        logWithTimestamp("Fetching last block...", colors.cyan);
        const lastBlock = await iconService.getLastBlock().execute();
        logWithTimestamp(`Last block: ${JSON.stringify(lastBlock)}`, colors.green);

        // const height = 29624980;
        const height = lastBlock.height;

        logWithTimestamp(`Current height: ${height}`, colors.blue);

        /// Refer -> https://scan.havah.io/txn/0xd44d1bded49f8c4ecd3caa5fb063639ff3c776e853eb01054a9b346e602801be?p=1&t=2

        const eventFilter = new EventFilter("BTPEvent(str,int,str,str)", "cxcf2c8d58fd7bbd25866de0660b155f057ea489eb");

        logWithTimestamp(`Event filter created: ${JSON.stringify(eventFilter)}`, colors.yellow);

        const spec = new EventMonitorSpec(
            Converter.toBigNumber(height + 1),
            eventFilter,
            true,
            10
        );
        logWithTimestamp(`EventMonitorSpec created: ${JSON.stringify(spec)}`, colors.magenta);

        const onevent = (data) => {
            logWithTimestamp(`Event received: ${JSON.stringify(data)}`, colors.green);
        };

        const onerror = (error) => {
            logWithTimestamp(`Error occurred: ${error}`, colors.red);
        };

        logWithTimestamp("Starting block monitor...", colors.cyan);
        const monitor = iconService.monitorEvent(spec, onevent, onerror);
        logWithTimestamp(`Monitor started: ${JSON.stringify(monitor)}`, colors.blue);

        setTimeout(() => {
            logWithTimestamp("Monitor is still running after 5 seconds", colors.yellow);
        }, 5000);

    } catch (e) {
        logWithTimestamp(`An error occurred: ${e}`, colors.red);
        logWithTimestamp(`Error stack: ${e.stack}`, colors.red);
    }
}

main().then(() => logWithTimestamp("Main function completed", colors.green)).catch(e => logWithTimestamp(`Unhandled error in main: ${e}`, colors.red));
