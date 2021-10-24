console.log(performance.memory)

var sizes = ["bytes", "KB", "MB", "GB", "TB"];

function formatSize(bytes) {
    var l = Math.min(sizes.length - 1, Math.log(bytes) / Math.LN2 / 10 | 0);
    return [bytes / Math.pow(1024, l), sizes[l]];
}

console.log(formatSize(performance.memory.usedJSHeapSize))