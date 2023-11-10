const os = require('os');

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    for (const alias of iface) {
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'Unable to retrieve local IP';
}

// export const IPCONFIG = getLocalIP();
export const IPCONFIG = '36.139.61.245';
export default
{
  name: 'ip',
  IPCONFIG,
}
