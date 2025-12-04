import translate from 'google-translate-api-x';

export const translateText = async (req, res) => {
  const { text, targetLang } = req.body;

  if (!text || !targetLang) {
    return res.status(400).json({ message: 'Text and target language are required' });
  }

  try {
    const resTranslation = await translate(text, { to: targetLang });
    res.json({ translatedText: resTranslation.text });
  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).json({ message: 'Translation failed', error: error.message });
  }
};
