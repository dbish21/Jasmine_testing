
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 280000,
    years: 30,
    rate: 6.1
  };
  expect(calculateMonthlyPayment(values)).toEqual('1696.79')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 280044,
    years: 30,
    rate: 6.1
  };
  expect(calculateMonthlyPayment(values)).toEqual ('1697.05')
});

it("should handle low interest rates", function() {
  const values = {
    amount: 280000,
    years: 30,
    rate: 1
  };
  expect(calculateMonthlyPayment(values)).toEqual ('900.59')
});

it("should handle high interest rates", function() {
  const values = {
    amount: 280000,
    years: 30,
    rate: 15.8
  };
  expect(calculateMonthlyPayment(values)).toEqual ('3720.20')
});