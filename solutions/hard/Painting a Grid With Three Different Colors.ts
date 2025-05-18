// Title: Painting a Grid With Three Different Colors
            // Difficulty: Hard
            // Language: TypeScript
            // Link: https://leetcode.com/problems/painting-a-grid-with-three-different-colors/

function colorTheGrid(m: number, n: number): number {
    const MOD = 1e9 + 7;
    const validRows: number[][] = [];

    const generate = (path: number[]) => {
        if (path.length === m) {
            validRows.push([...path]);
            return;
        }
        for (let color = 0; color < 3; color++) {
            if (path.length === 0 || path[path.length - 1] !== color) {