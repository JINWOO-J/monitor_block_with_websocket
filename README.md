<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">MONITOR_BLOCK_WITH_WEBSOCKET</h1>
</p>
<p align="center">
    <em>Real-time Network Pulsar🌐 | monitoring icon blocks, smart contracts & transactions, live</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/JINWOO-J/monitor_block_with_websocket?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/JINWOO-J/monitor_block_with_websocket?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/JINWOO-J/monitor_block_with_websocket?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/JINWOO-J/monitor_block_with_websocket?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)
</details>
<hr>

##  Overview

Our innovative software ecosystem, Monitor_Block_with_Websocket, specializes in real-time block event monitoring on the ICON blockchain. It delivers seamless and configurable webhooks enabling uninterrupted transmission of critical network data such as blocks, smart contracts transactions, and transaction signatures that facilitate smooth integration into customised ecosystems built utilizing the included ICON SDK. Additionally, real-time alert systems ensure efficient handling and monitoring over evolving blockchain dynamicities for superior performance and high-level web interaction efficiency.

---

##  Features



---

##  Repository Structure

```sh
└── monitor_block_with_websocket/
    ├── README.md
    ├── monitor_block.js
    ├── monitor_block_example_with_sdk.js
    ├── monitor_event.js
    ├── monitor_event_example_with_sdk.js
    ├── monitor_event_example_with_sdk_29624980.js
    ├── monitor_event_sdk.js
    ├── package-lock.json
    └── package.json
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---                                                                                                                                                           | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [monitor_block.js](https://github.com/JINWOO-J/monitor_block_with_websocket/blob/master/monitor_block.js)                                                     | Monitors newly mined blocks on ICON blockchain by continually fetching latest block height, identifying new blocks and logging hash values. Enables a continuous stream of network data, using an easy-to-configure JSON SDL WebSocket API for uninterruptible real-time data streaming. In other words (if extended just a few words); Monitors each incoming block on the ICON network, fetching and compares blocks to log new ones, offering instantaneous real time flow of important networking information via easy configuring a predefined JSON SDK webhook API setup.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [monitor_block_example_with_sdk.js](https://github.com/JINWOO-J/monitor_block_with_websocket/blob/master/monitor_block_example_with_sdk.js)                   | Monitors and outputs Block data fromIcon Service over WebSocket within monitor_block_sdk\_with\_example.js. The script customises Icon SDK to connect with ICX DEX and follows new blocks with height increment beyond the last one. Subscribers stay informed about fresh block updates with real-time print statements to console. Essentially, this file sets up continuous Block monitoring. ⚡🔂💪💖🚀🌐. Iconic flexibility in action!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [monitor_event_sdk.js](https://github.com/JINWOO-J/monitor_block_with_websocket/blob/master/monitor_event_sdk.js)                                             | Monitors transaction events of smart contracts for transfer activity on Icon network without human intervention. Tracks specified addresses and signatures using WebSocket, routing real-time event data to the system console for evaluation. Provides base for developers looking to integrate custom applications using iconSDK while maintaining high-level security and efficiency. [icon-sdk-js integration]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [monitor_event_example_with_sdk.js](https://github.com/JINWOO-J/monitor_block_with_websocket/blob/master/monitor_event_example_with_sdk.js)                   | Monitor pending transactions and fetch log data accordingly to log outputs after designated time frame. Adhering to the project structure within monitor_block_with_websocket.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [package-lock.json](https://github.com/JINWOO-J/monitor_block_with_websocket/blob/master/package-lock.json)                                                   | Monitor_block_with_websocket`The key purpose of this code Repository, as implied by its name, is creating tools to **real-time monitor events related to blocks** within a decentralized platform (which presumes the focus on blockchain or other comparable systems is imminent, not explicitly stated with available data). This aligns with the parent repository's overarching architecture concerned with blockchain event monitoring using WebSocket as an interaction component.Here are some of its essential functionalities: 1-**monitor_block**-Primarily functions to obtain relevant data from events and updates concerning blocks inside the underlying distributed networks, thereby supplying constant access and real-time reactions to new, modified or completed blocks that have substantial impact downstream (detailed information such as timestamping, transaction identifiers, blockchain node addresses etc., though not explicitly articulated within context provided may also be acquired.) 2. **monitor_block_example_with_sdk**-Seens like it focuses on showcasing concrete implementation of how monitor_block module interacts specifically with its SDK for enhanced functionality, demonstrating potential applications that benefit from monitoring individual block modifications through WebSocket integratrion. 3 **monitor_eventFacilitates capturing distinct occurrences or events tied to blocks in a way that can be easily tracked (such as confirmations), making it less cumbersome for the architecture to process these dynamic changes effectively over time-possibly handling events associated |
| [package.json](https://github.com/JINWOO-J/monitor_block_with_websocket/blob/master/package.json)                                                             | Monitor_block\_javascript files. Depends highly on IconSDK library(v1.5.2), establishing connections and data flow easily, as specified in its repository (package structure).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [monitor_event_example_with_sdk_29624980.js](https://github.com/JINWOO-J/monitor_block_with_websocket/blob/master/monitor_event_example_with_sdk_29624980.js) | Monitores WebSocket-aktiven Event im Netzmenschenblock durch aktivieren. Er initialisiert Web und SDK Konkatenzverarbeitungsstruktur für die InterConsortium Blockchain und richtet einen Watchpointer auf Events vom Zielleitungswaehlsche Event ein, mit verstarkten Überwachungen und Verarbeitungen. Das Skript folgt als praktisches Ausstellungsbeispiel einer Anreicherung beim Netz-Websdkverkantwortet bei erfolgloser Intersprungsverladung nach fünf vorgegebenen seKundenen ein Alarm.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [monitor_event.js](https://github.com/JINWOO-J/monitor_block_with_websocket/blob/master/monitor_event.js)                                                     | This JavaScript script `monitors events smart contract interaction on the ICON network`, taking a dedicated address as scope to look out for particular contract event signatures. A loop consistently surveys the latest block, scrutinizes registered events against given signature and triggers additional processing should relevant interactions transpire – all accomplished via Icon SDK connectivity configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

</details>

---

##  Getting Started

**System Requirements:**

* **JavaScript**: `version x.y.z`

###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the monitor_block_with_websocket repository:
>
> ```console
> $ git clone https://github.com/JINWOO-J/monitor_block_with_websocket
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd monitor_block_with_websocket
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```

###  Usage

<h4>From <code>source</code></h4>

> Run monitor_block_with_websocket using the command below:
> ```console
> $ node monitor_event_example_with_sdk_29624980.js
> ```


---

##  License

This project is protected under the MIT License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---
