import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {GetColors} from '../constants/GetColors';
import {GetText} from '../constants/GetText';
import {hp, wp} from '../utils/Dimension';
export const DownloadInvoice = () => {
  const [pastedUrl, setPastedUrl] = useState('');

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Cool storage Permission',
          message:
            'Downloader App needs access to your storage' +
            'so you can download.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permission granted');
        downloadFile();
      } else {
        console.log('permission denied');
      }
    } catch (err) {
      console.log('err in catch block', err);
    }
  };
  const downloadFile = () => {
    const {config, fs} = RNFetchBlob;
    const FileDir = fs.dirs.DownloadDir;
    const date = new Date();
    config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          FileDir +
          '/downloads' +
          Math.floor(date.getDate() + date.getSeconds()),
        description: 'file download',
      },
    })
      .fetch(
        'GET',
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        {},
      )
      .then(res => {
        console.log('The file saved to ', res.path());
      });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <TextInput
        placeholder="Paste URL"
        value={pastedUrl}
        style={{
          width: wp(70),
          height: hp(6),
          elevation: wp(0.5),
          // borderWidth: 0.5,
          marginBottom: hp(5),
        }}
      /> */}

      <TouchableOpacity
        style={{
          backgroundColor: GetColors.tomato,
          width: wp(70),
          height: hp(6),
          borderRadius: wp(4),
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          requestPermission();
        }}>
        <Text style={{color: GetColors.white, fontSize: wp(4)}}>
          {GetText.DOWNLOAD_PDF}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
