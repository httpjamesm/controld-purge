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

3. Run

```bash
node index.js
```
