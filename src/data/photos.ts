import { Photo } from '../types';
import soccerKickoffImg from '../../images/soccer-kickoff.jpeg';
import soccer2Img from '../../images/soccer-2.jpeg';
import baseball1Img from '../../images/baseball-1.jpeg';
import baseball2Img from '../../images/baseball-2.jpeg';

export const PHOTO_ITEMS: Photo[] = [
  // Row 1: Soccer (1, 2, 3)
  {
    id: 'soccer-1',
    title: 'Match Kickoff',
    category: 'Soccer',
    imageUrl: soccerKickoffImg,
    placeholderAlt: 'Soccer ball on field',
    description: 'Official soccer match ball on the pitch.'
  },
  {
    id: 'soccer-2',
    title: 'Striker in Action',
    category: 'Soccer',
    imageUrl: soccer2Img,
    placeholderAlt: 'Soccer striker in action on the pitch',
    description: 'Dynamic World Cup match action on the field.'
  },
  {
    id: 'soccer-3',
    title: 'Stadium Arena',
    category: 'Soccer',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80',
    placeholderAlt: 'Full football stadium pitch and grandstands',
    description: 'Packed grandstands overlooking the pristine green pitch during championship night.'
  },

  // Row 2: Volleyball (4, 5, 6)
  {
    id: 'volleyball-1',
    title: 'Beach Volleyball Spike',
    category: 'Volleyball',
    imageUrl: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
    placeholderAlt: 'Volleyball over the net on sunny sand court',
    description: 'Powerful spike attack soaring above the net against a bright blue sky.'
  },
  {
    id: 'volleyball-2',
    title: 'Court Action',
    category: 'Volleyball',
    imageUrl: 'https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&w=800&q=80',
    placeholderAlt: 'Volleyball player jumping to set ball at net',
    description: 'Precision setter coordinating a fast-paced offensive play.'
  },
  {
    id: 'volleyball-3',
    title: 'Match Ball Serve',
    category: 'Volleyball',
    imageUrl: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=800&q=80',
    placeholderAlt: 'Official volleyball on court surface',
    description: 'High-speed jump serve spinning across the defensive reception line.'
  },

  // Row 3: Baseball (7, 8, 9)
  {
    id: 'baseball-1',
    title: 'Batter at Home Plate',
    category: 'Baseball',
    imageUrl: baseball1Img,
    placeholderAlt: 'Baseball batter waiting at home plate with bat ready',
    description: 'Focused batter positioned in the batter box tracking the incoming fastball.'
  },
  {
    id: 'baseball-2',
    title: 'Pitcher Mound Delivery',
    category: 'Baseball',
    imageUrl: baseball2Img,
    placeholderAlt: 'Baseball pitcher throwing a pitch from the mound',
    description: 'Full windup release delivering a high-speed strike across the strike zone.'
  },
  {
    id: 'baseball-3',
    title: 'Ball & Leather Glove',
    category: 'Baseball',
    imageUrl: 'https://images.unsplash.com/photo-1516731415730-0c607149933a?auto=format&fit=crop&w=800&q=80',
    placeholderAlt: 'Baseball sitting in a classic leather fielder glove',
    description: 'Classic stitched baseball resting in a worn leather glove on the dugout grass.'
  }
];
