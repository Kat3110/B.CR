export function typeCheck(value, type) {
  const emailReg =
    // eslint-disable-next-line
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const pwReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

  return type === "id" || type === "email"
    ? emailReg.test(value)
    : pwReg.test(value);
}
