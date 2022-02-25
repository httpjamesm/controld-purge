# controld-purge

This is a script that I made to auto-remove all IPs associated with my [ControlD](https://controld.com) account that are not from my home ISP. Sometimes I manage ControlD from a VPN, but don't mean to add the IP address to the authorized IPs list. This script goes through all ControlD IPs using the API and deletes any IPs that are not categorized as your whitelisted ISP name.
 
## Installing

Install dependencies:

```bash
npm i
```

## Usage

1. Copy the `.env.example` file to `.env`.

```bash
cp .env.example .env
```

2. Fill out `.env` with your variables. 

Check the "Getting API Details" section for help getting the `CONTROLD_AUTHORIZATION` variable.

3. Run

```bash
node index.js
```

## Getting API Details

1. Visit the [ControlD Dashboard](https://controld.com/control-panel/filters) while logged in.
2. Open Dev Tools and head to the network tab with `CTRL`+`SHIFT`+`I`.
3. Reload page if needed.
4. Click on a request, such as `proxies`.
5. Open the request and check the "Request Headers" section for your `authorization` header value.

This value should look similar to:
`letter.integerletter.unix_timestamp.integer.very_long_hex_string`
