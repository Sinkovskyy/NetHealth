import {IP2LocationKey} from '../../config';
import {GetIpInfoResponse} from './types';

export class NetInfoService {
  private static KEY = IP2LocationKey;

  static async getIpInfo(ipAddress: string): Promise<GetIpInfoResponse> {
    return fetch(
      `https://api.ip2location.io/?key=${this.KEY}&ip=${ipAddress}`,
    ).then(response => response.json());
  }

  static async getPublicIpAdress(): Promise<string> {
    return fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(response => response.ip);
  }
}
