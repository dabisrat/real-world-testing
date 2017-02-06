describe('romanConverter', function () {
  it('should be a function', function () {
    expect(typeof romanConverter).toBe('function')
  })
  it ('should convert  strings to numbers', function () {
    var one = romanConverter('I')
    var two = romanConverter('II')
    var three = romanConverter('III')
    var four = romanConverter('IV')
    var six = romanConverter('VI')
    var nine = romanConverter('IX')
    var twenty_four = romanConverter('XXIV')
    
    expect(one).toEqual(1)
    expect(two).toEqual(2)
    expect(three).toEqual(3)
    expect(four).toEqual(4)
    expect(six).toEqual(6)
    expect(nine).toEqual(9)
    expect(twenty_four).toEqual(24) 
  })
  it('should convert Numbers to their Roman string', function(){
    expect(romanConverter(1)).toEqual('I')
    expect(romanConverter(5)).toEqual('V')
    expect(romanConverter(10)).toEqual('X')
    expect(romanConverter(2)).toEqual('II')
    expect(romanConverter(4)).toEqual('IV')
    expect(romanConverter(9)).toEqual('IX')
    expect(romanConverter(49)).toEqual('XLIX')
    expect(romanConverter(999)).toEqual('CMXCIX')
  

  })
})