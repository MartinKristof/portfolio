import { Badge } from '@pf/components/ui/badge';

export const LanguageFlag = ({ language }: { language: string }) => (
  <Badge variant="outline" className="ml-2 text-base" title={language === 'cs' ? 'Czech' : 'English'}>
    {language === 'cs' ? '🇨🇿' : '🇬🇧'}
  </Badge>
);
