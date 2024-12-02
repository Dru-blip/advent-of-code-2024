function check(values: number[]): number {
    const MAX_DIFF = 3;
    const MIN_DIFF = 1;
    const isDecreasing = values[0] > values[1];

    for (let i = 0; i < values.length - 1; i++) {
        const diff = Math.abs(values[i] - values[i + 1]);
        if (
            values[i] === values[i + 1] ||
            ((values[i] > values[i + 1]) !== isDecreasing) || diff < MIN_DIFF ||
            diff > MAX_DIFF
        ) {
            return i;
        }
    }
    return -1;
}

function process(values: number[]): boolean {
    if (check(values) === -1) {
        return true;
    } else {
        return false;
    }
}

function part2(values: number[]) {
    const index = check(values);
    if (index !== -1) {
        for (let i = 0; i < values.length; i++) {
            if (check([...values.slice(0, i), ...values.slice(i + 1)]) === -1) {
                return true;
            }
        }
    } else if (index === -1) {
        return true;
    }
    return false;
}

async function main() {
    const decoder = new TextDecoder("utf-8");
    const data = decoder.decode(await Deno.readFile("input.txt"));

    let count = 0;
    data.split("\n").forEach((line) => {
        const values = line.split(" ");
        const isSafe = part2(values.map((val) => parseInt(val)));
        if (isSafe) {
            count++;
        }
    });

    console.log(count);
}

main();
