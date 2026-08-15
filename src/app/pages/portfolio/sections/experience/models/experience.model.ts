export interface ExperienceImage {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface Experience {
  readonly slug: string;
  readonly company: string;
  readonly companyUrl: string;
  readonly period: string;
  readonly headline: string;
  readonly responsibility: string;
  readonly image: ExperienceImage;
  readonly technologies: readonly string[];
  readonly supportingResults: readonly string[];
}
