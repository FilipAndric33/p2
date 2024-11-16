export const useCarousels = (content: any) => {
    const carousels: [][] = [];
    for(let i = 0; i < content.length; i += 10) {
        carousels.push(content.slice(i, i + 10));
    }

    return carousels;
}