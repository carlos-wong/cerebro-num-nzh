var nzhcn = require("nzh/cn"); //直接使用简体中文


test('Init', () => {
  expect(nzhcn.encodeB(100111)).toBe("壹拾万零壹佰壹拾壹");
  expect(nzhcn.encodeB(123456789)).toBe("壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖");
});
