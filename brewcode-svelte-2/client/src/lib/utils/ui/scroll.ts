export const scrollToSection = (section: string) => {
	return document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
};
