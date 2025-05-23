import { Service, Testimonial, Transformation, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Personal Training',
    description: 'One-on-one personalized training sessions tailored to your specific goals and fitness level.',
    icon: 'dumbbell',
    features: [
      'Customized workout plans',
      'Nutritional guidance',
      'Regular progress tracking',
      'Form correction and technique improvement',
    ],
  },
  {
    id: '2',
    title: 'Competition Prep',
    description: 'Comprehensive preparation for bodybuilding competitions with expert guidance.',
    icon: 'trophy',
    features: [
      'Posing practice',
      'Stage presence coaching',
      'Peak week strategies',
      'Competition day guidance',
    ],
  },
  {
    id: '3',
    title: 'Nutrition Planning',
    description: 'Detailed nutrition plans to complement your training and accelerate your results.',
    icon: 'apple',
    features: [
      'Macronutrient calculation',
      'Meal planning and timing',
      'Supplement recommendations',
      'Diet adjustments based on progress',
    ],
  },
  {
    id: '4',
    title: 'Online Coaching',
    description: 'Remote coaching for clients worldwide with consistent check-ins and adjustments.',
    icon: 'monitor',
    features: [
      'Weekly video check-ins',
      'Real-time feedback',
      'Workout tracking app access',
      'Priority messaging support',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jason Miller',
    quote: 'Working with this coach transformed not just my physique but my entire approach to fitness and nutrition. Gained 15lbs of muscle in 6 months!',
    image: 'https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    quote: 'After struggling with weight loss for years, I finally found a program that works. Lost 30lbs and feel stronger than ever before!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Chang',
    quote: 'The competition prep coaching was exceptional. Placed 2nd in my first ever physique competition thanks to the detailed guidance.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
  },
];

export const transformations: Transformation[] = [
  {
    id: '1',
    clientName: 'David Williams',
    beforeImage: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '12 weeks',
    description: 'David lost 45lbs and gained significant muscle definition through dedicated training and nutrition.',
  },
  {
    id: '2',
    clientName: 'Emily Rodriguez',
    beforeImage: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/700446/pexels-photo-700446.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '16 weeks',
    description: 'Emily transformed her physique and competed in her first fitness competition after just 4 months of training.',
  },
  {
    id: '3',
    clientName: 'Robert Chen',
    beforeImage: 'https://images.pexels.com/photos/1978505/pexels-photo-1978505.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '6 months',
    description: 'Robert went from skinny to muscular, gaining 25lbs of lean muscle mass while maintaining low body fat.',
  },
];