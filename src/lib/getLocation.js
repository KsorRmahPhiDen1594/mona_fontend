export async function getLocation(ip) {
    const token = process.env.IPINFO_TOKEN;
    try {
        const res = await fetch(`https://ipinfo.io/${ip}?token=${token}`);
        if (!res.ok) throw new Error('IP lookup failed');
        const data = await res.json();
        console.log("data in getLocation", data);
        return data; // { country: 'US', ... }
    } catch (error) {
        console.error('Error fetching IP location:', error);
        return null;
    }
}
