// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If B = string.charAt(k+1) + string.charAt(k+2) do not represent
 * hexadecimal digits, throw URIError
 *
 * @path 15_Native/15.1_The_Global_Object/15.1.3_URI_Handling_Function_Properties/15.1.3.2_decodeURIComponent/S15.1.3.2_A1.2_T2.js
 * @description Complex tests
 */

//CHECK
result = true;
var interval = [[0x00, 0x29], [0x40,0x40], [0x47, 0x60], [0x67, 0xFFFF]];
for (indexI = 0; indexI < interval.length; indexI++) {
  for (indexJ = interval[indexI][0]; indexJ <= interval[indexI][1]; indexJ++) {
    try {
      decodeURIComponent("%" + "1" + String.fromCharCode(indexJ));
      result = false;
    } catch (e) {   
      if ((e instanceof URIError) !== true) {
        result = false;
      }
    }      
  }  
}  

if (result !== true) {    
  $ERROR('#1: If string.charAt(k+2) does not represent hexadecimal digits, throw URIError');
}
