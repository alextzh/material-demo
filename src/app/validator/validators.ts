import {FormControl, FormGroup} from '@angular/forms';
/**
 * Created by tianzhihong on 2017/6/15.
 */
/*验证手机号*/
export function mobileValidator(control: FormControl): any {
  const myReg = /^1[3|4|5|7|8][0-9]{9}$/;
  const valid: boolean = myReg.test(control.value);
  return valid ? null : {mobile: true};
}
/*验证身份证号*/
export function cardCodeValidator(control: FormControl): any {
  const city = {11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江',
    31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北',
    43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏',
    61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外'};
  let valid = true;
  let code = control.value;
  if (!code || !/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i.test(code)) {
    valid = false;
  }else if (!city[code.substr(0, 2)]) {
    valid = false;
  }else {
    // 18位身份证需要验证最后一位校验位
    if (code.length === 18) {
      code = code.split('');
      // ∑(ai×Wi)(mod 11)
      // 加权因子
      const factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
      // 校验位
      const parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
      let sum = 0;
      let ai = 0;
      let wi = 0;
      for (let i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      if (parity[sum % 11] !== code[17].toUpperCase()) {
        valid = false;
      }
    }
  }
  return valid ? null : {cardCode: true};
}
/*验证姓名*/
export function realNameValidator(control: FormControl): any {
  const myReg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
  const valid: boolean = myReg.test(control.value);
  return valid ? null : {realName: true};
}
/*验证密码相等*/
export function equalValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const confirmPassword: FormControl = group.get('confirmPassword') as FormControl;
  const valid: boolean = (password.value === confirmPassword.value);
  return valid ? null : {equal: {descxxx: '密码与确认密码不匹配'}};
}


/**生成一个随机数**/
export function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
/**生成一个随机色**/
export function randomColor(min, max) {
  const r = randomNum(min, max);
  const g = randomNum(min, max);
  const b = randomNum(min, max);
  return 'rgb(" + r + "," + g + "," + b + ")';
}

export function findPosition( oElement ) {
  let x2 = 0;
  let y2 = 0;
  const width = oElement.offsetWidth;
  const height = oElement.offsetHeight;
  if ( typeof( oElement.offsetParent ) !== 'undefined' ) {
    for (var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent) {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
    x2 = posX + width;
    y2 = posY + height;
    return [ posX, posY , x2, y2];

  } else {
    x2 = oElement.x + width;
    y2 = oElement.y + height;
    return [ 0, 0 , x2, y2];
  }
}
