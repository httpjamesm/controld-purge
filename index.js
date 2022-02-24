const dotenv = require('dotenv')
dotenv.config()

const fetch = require("node-fetch");

const getAccountIps = async (authorization) => {
    const request = await fetch("https://api.controld.com/access", {
        method: "GET",
        headers: {
            Authorization: authorization,
        },
    });

    const response = await request.json();

    return response.body.ips;
};

const deleteIp = async (authorization, ip) => {
    await fetch("https://api.controld.com/access/" + ip, {
        method: "DELETE",
        headers: {
            Authorization: authorization,
        },
    });
};

const init = async () => {
    const authorization = process.env.CONTROLD_AUTHORIZATION;
    console.log(process.env.CONTROLD_AUTHORIZATION)
    const ips = await getAccountIps(authorization);

    for (const ip of ips) {
        console.log(ip)
        if (!ip.isp.includes(process.env.WHITELISTED_ISP)) {
            await deleteIp(authorization, ip.ip);
        }
    }
};

init();
