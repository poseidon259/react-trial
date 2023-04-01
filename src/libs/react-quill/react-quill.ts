export const getText = (text?: string) =>{
    const reg = /<[^>]*>/gm;
    text = text && text?.replace(/&lt;/g, '<');
    text = text && text?.replace(/&gt;/g, '>');
    return text?.replace(reg,'')?.trim() || '';
}