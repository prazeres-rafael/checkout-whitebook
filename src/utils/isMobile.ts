export const isMobile = (): boolean =>  {
    if (typeof window !== 'undefined') {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        return width <= 768;
    }
    return false;
}