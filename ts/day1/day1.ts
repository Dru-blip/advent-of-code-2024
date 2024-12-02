function distance(list1: number[], list2: number[]) {
    list1.sort((a, b) => a - b);
    list2.sort((a, b) => a - b);

    let sum = 0;
    for (let i = 0; i < list1.length; i++) {
        sum += Math.abs(list1[i] - list2[i]);
    }
    return sum;
}

function similarity(list1: number[], list2: number[]) {
    let freq: Map<number, number> = new Map();

    for (let i=0;i<list2.length;i++) {
        freq.set(list2[i],(freq.get(list2[i])||0)+1)
    }

    let similar = 0;
    for (let i=0;i<list1.length;i++) {
        if (freq.has(list1[i])) {
            similar += freq.get(list1[i])! * list1[i];
        }
    }

    return similar;
}

export async function process() {
    const decoder = new TextDecoder("utf-8");
    const data = decoder.decode(await Deno.readFile("day1.txt"));

    const line1: number[] = [];
    const line2: number[] = [];

    data.split("\n").forEach((line) => {
        const vals = line.trim().split(" ");
        line1.push(parseInt(vals[0]));
        line2.push(parseInt(vals[3]));
    });

    const similar = similarity(line1, line2);
    console.log(similar);
}
