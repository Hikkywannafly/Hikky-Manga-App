

type translateType = { readonly label: string; readonly value: string } & Record<string, any>;
type localType = 'vi' | 'en' | 'ru' | 'es';

type optionType = {
    local: localType,
    reverse: boolean
}


export const convert = (
    text: string,
    type: any,
    options: optionType
) => {



}