export interface Data {
    title: string;
    layoutType?: 'Services' | 'Work';
    items: Array<{imgPath: string; title: string; description: string}>;
}