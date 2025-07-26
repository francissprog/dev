export const scrollToSection = (section: string) => {
	 document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
};
