// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';
import * as functions from "../code-to-unit-test/unit-test-me.js";


// TODO - Part 2
test('619-663-0258 is a valid phonrNumber',()=>{
  expect(functions.isPhoneNumber('619-663-0258')).toBe(true)
})
test('(858)-4439284 is a valid phonrNumber',()=>{
  expect(functions.isPhoneNumber('(858)443-9284')).toBe(true)
})
test('6196630258 is not a valid phonrNumber',()=>{
  expect(functions.isPhoneNumber('6196630258')).toBe(false)
})
test('858@439)84 is not a valid phonrNumber',()=>{
  expect(functions.isPhoneNumber('858@439)84')).toBe(false)
})


test('1211254727@qq.com is a valid email',()=>{
  expect(functions.isEmail('1211254727@qq.com')).toBe(true)
})
test('yyskksensei@gmail.com is a valid email',()=>{
  expect(functions.isEmail('yyskksensei@gmail.com')).toBe(true)
})
test('858H439284@192893 is not a valid email',()=>{
  expect(functions.isEmail('858H439284@192893')).toBe(false)
})
test('858@439)84@@@@ is not valid email',()=>{
  expect(functions.isEmail('858@439)84@@@@')).toBe(false)
})


test('Abc_4567 is a strong password',()=>{
expect(functions.isStrongPassword('Abc_4567')).toBe(true)
})
test('z_12345678901 is a strong password',()=>{
  expect(functions.isStrongPassword('z_12345678901')).toBe(true)
})
test('123abc is not a strong password',()=>{
  expect(functions.isStrongPassword('123abc')).toBe(false)
})
test('a123! is not a strong password',()=>{
  expect(functions.isStrongPassword('a123!')).toBe(false)
})

test('1/1/2024 is a valid date',()=>{
  expect(functions.isDate('1/1/2024')).toBe(true)
})
test('07/04/1776 is a valid date',()=>{
  expect(functions.isDate('07/04/1776')).toBe(true)
})
test('7/4/1776 is not a valid date',()=>{
  expect(functions.isDate('Abc_4567')).toBe(false)
})
test('0712/04/17 is not a valid date',()=>{
  expect(functions.isDate('Abc_4567')).toBe(false)
})

test('#fff is a valid hexColor',()=>{
  expect(functions.isHexColor('#fff')).toBe(true)
})
test('ffffff is a valid hexColor',()=>{
  expect(functions.isHexColor('ffffff')).toBe(true)
})
test('#ffff is not a valid hexColor',()=>{
  expect(functions.isHexColor('#ffff')).toBe(false)
})
test('1234567 is not a valid hexColor',()=>{
  expect(functions.isHexColor('1234567')).toBe(false)
})
