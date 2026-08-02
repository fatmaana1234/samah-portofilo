export type Language = 'ar' | 'en';
export type Theme = 'dark' | 'light';

export type PortfolioCategory = 
  | 'all'
  | 'excel'
  | 'powerpoint'
  | 'word'
  | 'posters'
  | 'social'
  | 'video';

export interface PortfolioItem {
  id: string;
  titleAr: string;
  titleEn: string;
  category: PortfolioCategory;
  descriptionAr: string;
  descriptionEn: string;
  imageUrl?: string;
  fileUrl?: string;
  videoUrl?: string;
  tags: string[];
  software: string[];
  slidesCount?: number;
  featured?: boolean;
  dateAdded?: string;
  slides?: {
    slideNumber: number;
    titleAr: string;
    titleEn: string;
    contentAr: string;
    contentEn: string;
    bgColor?: string;
  }[];
}

export interface ServiceItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  iconName: string;
  featuresAr: string[];
  featuresEn: string[];
  recommendedForAr: string;
  recommendedForEn: string;
}

export interface SkillCategory {
  titleAr: string;
  titleEn: string;
  skills: {
    nameAr: string;
    nameEn: string;
    level: number; // percentage 0-100
    iconName?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  roleAr: string;
  roleEn: string;
  organizationAr: string;
  organizationEn: string;
  periodAr: string;
  periodEn: string;
  descAr: string;
  descEn: string;
  highlightsAr: string[];
  highlightsEn: string[];
  type: 'work' | 'volunteer' | 'education';
}
