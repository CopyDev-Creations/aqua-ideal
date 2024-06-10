const easeInOutSineFromTo = (x, start, end) => {
    const smoothStart = Math.max(start, x - 1);
    const smoothEnd = Math.min(end, x + 1);

    if (x < smoothStart) return 0;
    if (x > smoothEnd) return 1;
    return -(Math.cos(Math.PI * (x - smoothStart) / (smoothEnd - smoothStart)) - 1) / 2;
}
export default easeInOutSineFromTo