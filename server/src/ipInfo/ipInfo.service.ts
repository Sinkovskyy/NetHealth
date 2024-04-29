import {GetIpInfoResponse} from './types';

export class IpInfo {
  private static KEY = '268285F2CA7F69DE0468108B77195CF8';

  static async getInfo(ip?: string): Promise<GetIpInfoResponse | null> {
    if (!ip) {
      throw Error('Not coorect ip');
    }

    return fetch(`https://api.ip2location.io/?key=${this.KEY}&ip=${ip}`).then(
      response => response.json(),
    );
  }
}
