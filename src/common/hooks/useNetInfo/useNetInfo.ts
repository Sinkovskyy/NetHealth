import {useCallback, useEffect, useMemo, useState} from 'react';
import {GetIpInfoResponse} from '../../services/netInfo/types';
import {useNetInfo as useRNCNetInfo} from '@react-native-community/netinfo';
import {NetInfoService} from '../../services';

export const useNetInfo = () => {
  // Net info from mobile module
  const {type, details} = useRNCNetInfo();

  const [netInfo, setNetInfo] = useState<GetIpInfoResponse | undefined>(
    undefined,
  );

  const [publicIpAdress, setPublicIpAdress] = useState<string>();

  // Fetch details info from mobile module
  const {ipAddress: privateIpAdress, subnet} = useMemo(() => {
    if (details) {
      return details as {ipAddress: string; subnet: string};
    }

    return {ipAddress: undefined, subnet: undefined};
  }, [details]);

  // Fetch location from third-part api
  const fetchLocationData = useCallback(async (_ipAddress: string) => {
    const response = await NetInfoService.getIpInfo(_ipAddress!);
    setNetInfo(response);
  }, []);

  const fetchMyNetInfo = useCallback(() => {
    if (!publicIpAdress) {
      return;
    }
    fetchLocationData(publicIpAdress);
  }, [fetchLocationData, publicIpAdress]);

  useEffect(() => {
    NetInfoService.getPublicIpAdress().then(setPublicIpAdress);
  }, []);

  return {
    fetchLocationData,
    publicIpAdress,
    fetchMyNetInfo,
    privateIpAdress,
    subnet,
    netInfo,
    netType: type,
  };
};
