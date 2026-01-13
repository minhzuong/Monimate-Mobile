import en from './resources/en.json';
import vi from './resources/vi.json';

type TranslationKeys = 
    |keyof (typeof vi)['translation']
    |keyof (typeof en)['translation'] 
export default TranslationKeys