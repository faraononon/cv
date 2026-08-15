import { Component } from '@angular/core';

import { ContactSection } from './sections/contact/contact-section';
import { ExperienceSection } from './sections/experience/experience-section';
import { HeroSection } from './sections/hero/hero-section';
import { SkillsSection } from './sections/skills/skills-section';

@Component({
  selector: 'app-portfolio-page',
  imports: [ContactSection, ExperienceSection, HeroSection, SkillsSection],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.css',
})
export class PortfolioPage {}
