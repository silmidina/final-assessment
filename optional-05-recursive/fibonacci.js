function fibonacci(n) {
  const result = [];

  function fib(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    const seq = fib(n - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
  }
  return fib(n);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
