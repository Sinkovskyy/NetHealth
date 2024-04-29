import {exec} from 'child_process';
import {IpInfo} from '../ipInfo';

type Hop = {
  ipAddress?: string;
  full: string;
  latitude?: number;
  longitude?: number;
};

export class Traceroute {
  static trace(ip: string): Promise<{hops: Hop[]; full: string}> {
    return new Promise((resolve, reject) => {
      exec(`traceroute ${ip}`, (error, stdout, stderr) => {
        if (error) {
          reject(stderr);
        }
        Traceroute.parseTraceroute(stdout)
          .then(hops => {
            resolve({hops, full: stdout});
          })
          .catch(reject);
      });
    });
  }

  private static async parseTraceroute(
    tracerouteResult: string,
  ): Promise<Hop[]> {
    const lines = tracerouteResult.trim().split('\n');
    const hops: Hop[] = [];

    for (const line of lines) {
      const ipAddress = Traceroute.extractIPFromTraceroute(line);

      try {
        const ipInfo = await IpInfo.getInfo(ipAddress);

        if (!ipInfo || !ipInfo.latitude || !ipInfo.longitude) {
          throw Error('Not coorect hop');
        }

        hops.push({
          ipAddress,
          full: line,
          latitude: ipInfo.latitude,
          longitude: ipInfo.longitude,
        });
      } catch (e) {
        console.log(e);
      }
    }

    return hops;
  }

  private static extractIPFromTraceroute(tracerouteResult: string) {
    const ipRegex = /\((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\)/g;

    return ipRegex.exec(tracerouteResult)?.[0].slice(1, -1);
  }
}
