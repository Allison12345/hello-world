function palindromeString(str) {
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  )
}
console.log(palindromeString('ab'))
