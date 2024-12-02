function distance(list1: number[], list2: number[]): number {
    // Create sorted copies to avoid modifying original arrays
    const sortedList1 = [...list1].sort((a, b) => a - b);
    const sortedList2 = [...list2].sort((a, b) => a - b);
    
    return sortedList1.reduce((sum, num, i) => 
        sum + Math.abs(num - sortedList2[i]), 0);
}

function similarity(list1: number[], list2: number[]): number {
    // Use Map for more efficient frequency tracking
    const freq = new Map<number, number>();
    
    // Count frequencies in list1
    for (const num of list1) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    // Calculate similarity
    return list2.reduce((similar, num) => {
        const count = freq.get(num) || 0;
        return similar + (count * num);
    }, 0);
}

export async function processFile() {
    try {
        const data = await Deno.readTextFile("day1.txt");
        const lines = data.trim().split("\n");
        
        const line1: number[] = [];
        const line2: number[] = [];
        
        lines.forEach(line => {
            const vals = line.trim().split(" ");
            line1.push(parseInt(vals[0], 10));
            line2.push(parseInt(vals[3], 10));
        });
        
        const similar = similarity(line1, line2);
        console.log(similar);
    } catch (error) {
        console.error("Error processing file:", error);
    }
}

processFile();