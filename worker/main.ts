const MainHost = process.env.MAIN_HOST
const MainPort = process.env.MAIN_PORT

import fetch from 'node-fetch'

async function main() {
    try {
        let res = await fetch(`http://${MainHost}:${MainPort}/report`)
        let text = await res.text()
        console.log('response from main:', text)
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

main()
setInterval(() => {
    // just to hold the process, pretend to be running as a service
}, 1000)

