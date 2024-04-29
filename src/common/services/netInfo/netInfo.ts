import {API} from '../../config';
import {GetIpInfoResponse, TracerouteHop} from './types';

export class NetInfoService {
  static async getIpInfo(ipAddress: string): Promise<GetIpInfoResponse> {
    return fetch(`${API.baseUrl}/ipinfo?ip=${ipAddress}`).then(response =>
      response.json(),
    );
  }

  static async getPublicIpAdress(): Promise<string> {
    // TODO: Replace to custom server endpoint
    return fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(response => response.ip);
  }

  static async traceroute(
    ip: string,
  ): Promise<{hops: TracerouteHop[]; full: string}> {
    return fetch(`${API.baseUrl}/traceroute?ip=${ip}`).then(response =>
      response.json(),
    );
  }
}
