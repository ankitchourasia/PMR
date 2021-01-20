import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncreptiondecreptionService {

  constructor() { }



   
encrypt(data:string)
{

  //alert(data);

  var key = CryptoJS.enc.Utf8.parse('WINPAY@#10@MPEBV');
var iv = CryptoJS.enc.Utf8.parse('JAIBALAJIVIBHORM');
// let salt=CryptoJS.enc.Utf8.parse("44444");
// var salt = genRandomString(16);
var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key,
  {
      keySize: 16,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
 
     
  });
  //alert('Encrypted :' + encrypted);
var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
  keySize: 16,
  iv: iv,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7
});

//  console.log('Encrypted :' + encrypted);

 
// console.log('Key :' + encrypted.key);
// console.log('Salt :' + encrypted.salt);
// console.log('iv :' + encrypted.iv);
// console.log('Decrypted : ' + decrypted);
// console.log('utf8 = ' + decrypted.toString(CryptoJS.enc.Utf8));

return encrypted;

}


dcrypt(data:string)
{

  //alert(data);

  var key = CryptoJS.enc.Utf8.parse('WINPAY@#10@MPEBV');
var iv = CryptoJS.enc.Utf8.parse('JAIBALAJIVIBHORM');
// let salt=CryptoJS.enc.Utf8.parse("44444");
// var salt = genRandomString(16);
// var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key,
//   {
//       keySize: 16,
//       iv: iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7
 
     
//   });
  //alert('Encrypted :' + encrypted);
var decrypted = CryptoJS.AES.decrypt(data, key, {
  keySize: 16,
  iv: iv,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7
});

//  console.log('Encrypted :' + decrypted);
// console.log('Key :' + encrypted.key);
// console.log('Salt :' + encrypted.salt);
// console.log('iv :' + encrypted.iv);
// console.log('Decrypted : ' + decrypted);
// console.log('utf8 = ' + decrypted.toString(CryptoJS.enc.Utf8));

return decrypted.toString(CryptoJS.enc.Utf8);

}

}
