const dictionaries: any = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ru: () => import('./dictionaries/ru.json').then((module) => module.default),
  ar: () => import('./dictionaries/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!(locale in dictionaries)) {
    throw new Error(`Locale ${locale} not supported.`);
  }

  try {
    return await dictionaries[locale]();
  } catch (error) {
    throw new Error(`Error loading locale dictionary for ${locale}`);
  }
};
