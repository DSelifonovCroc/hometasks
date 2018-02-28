export const reducerFailureTest = (reducer, action) => {
  it('...sets error data', () => {
    const error = new Error('test');
    const next = reducer(undefined, action(error));
    expect(next.error).toEqual(error);
  });
};

export const reducerValueTest = (reducer, action, field, payload="test") => {
  it(`...fills the ${field} with ${payload}`, () => {
      const next = reducer(undefined, action(payload));
      expect(next[field]).toEqual(payload);
  });
};

export const reducerClearFieldTest = (reducer, action, field) => {
  it(`...clears ${field} data`, () => {
    const next = reducer(undefined, action());
    expect(next[field]).toEqual(null);
  });
}

export const methodIsDefined = (wrapper, method) => {
  it(method, () => {
    expect(wrapper.instance()[method]).toBeDefined();
  });
}