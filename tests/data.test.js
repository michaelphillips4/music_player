import { expect, test } from 'vitest'
import {getFriendlyNameFromUrl  } from '../src/Data'

test('empty url', () => {
  expect(getFriendlyNameFromUrl("")).toBe("")
})

test('null url', () => {
  expect(getFriendlyNameFromUrl(null)).toBe("")
})


test('empty param url', () => {
  expect(getFriendlyNameFromUrl()).toBe("")
})


test('correct url', () => {
  expect(getFriendlyNameFromUrl("https://python-bucket-1.s3.eu-west-2.amazonaws.com/Music/Estudio_By_Francisco_Tarrega.mp3")).toBe("Estudio By Francisco Tarrega")
})

test('no back slash in url', () => {
  expect(getFriendlyNameFromUrl("python-bucket-1.s3.eu-west-2.amazonaws.comEstudio_By_Francisco_Tarrega.mp3")).toBe("")
})

